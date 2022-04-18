import { useEffect, useReducer } from "react"
import { firestore } from "../firebase"
import { collection, doc, onSnapshot, query, where } from "firebase/firestore"

const snapshotInitialState = {
  documents: null,
  ready: false,
  error: null,
  controls: {
    optionsCheck: {
      null: false,
      documentId: false,
      queries: false,
    },
  },
}

const snapshotReducer = (state, action) => {
  switch (action.type) {
    case "TO_INITIAL_STATE":
      return snapshotInitialState

    case "UPDATE_DOCUMENTS":
      return { ...state, documents: action.payload, ready: true, }

    case "NOT_PASS_CHECK":
      return {
        ...state, ready: true,
        controls: { ...state.controls, optionsCheck: { ...action.payload, }, },
      }

    case "RAISE_ERROR":
      return { ...state, error: action.payload, ready: true, }

    default:
      return state
  }
}

const useSnapshot = (firestoreCollection, options = {}) => {
  const [state, dispatch] = useReducer(snapshotReducer, snapshotInitialState)

  useEffect(() => {
    console.log(options)
    dispatch({ type: "TO_INITIAL_STATE" })

    const documentIdStop = options
      ? ("documentId" in options && !("id" in options.documentId))
      || (options.documentId === null && !options.documentId.id)
      : true

    const queriesStop = options
      ? "queries" in options
      && options.queries.filter(q => q.value === null && q.required).length > 0
      : true

    if (!options || documentIdStop || queriesStop) {
      dispatch({
        type: "NOT_PASS_CHECK", payload: {
          null: !options,
          documentId: documentIdStop,
          queries: queriesStop,
        },
      })
      return () => { }
    }

    const reference = options.documentId
      ? doc(firestore, firestoreCollection, options.documentId.id)
      : collection(firestore, firestoreCollection)

    const queries = options.queries
      ? query(reference, ...options.queries
        .filter(q => q.value !== null)
        .map(q => where(q.field, q.operator, q.value)))
      : reference

    const unsubscribe = onSnapshot(queries, { includeMetadataChanges: true }, (snapshot) => {
      dispatch({
        type: 'UPDATE_DOCUMENTS',
        payload: options.documentId
          ? { ...snapshot.data(), collection: firestoreCollection, }
          : (snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, collection: firestoreCollection, })))
      })
    },
      error => dispatch({ type: 'RAISE_ERROR', payload: error.message, }))

    return unsubscribe
  }, [firestoreCollection, options])

  return state
}

export { useSnapshot }
