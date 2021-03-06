import { useEffect, useReducer, useState } from "react"

import { firestore } from "@fbase"
import { collection, addDoc, serverTimestamp, setDoc, doc, getDoc, deleteDoc } from "firebase/firestore"

const collectionInitialState = {
  document: null,
  error: null,
  ready: false,
}

const collectionReducer = (state, action) => {
  switch (action.type) {
    case "TO_INITIAL_STATE":
      return collectionInitialState

    case "DOCUMENT_ADDED":
      return { ...state, document: action.payload, ready: true }

    case "DOCUMENT_GOT":
      return { ...state, document: action.payload, ready: true }

    case "DOCUMENT_DELETED":
      return { ...state, document: action.payload, ready: true }

    case "RAISE_ERROR":
      return { ...state, error: action.payload, ready: true }

    default:
      return state
  }
}

export const useCollection = (firestoreCollection) => {
  const [preparedCollection, setPreparedCollection] = useState(null)
  const [isCancelled, setCancelled] = useState(false)
  const [state, dispatch] = useReducer(collectionReducer, collectionInitialState)

  useEffect(() => {
    setPreparedCollection(collection(firestore, firestoreCollection))
  }, [firestoreCollection])

  useEffect(() => (() => setCancelled(true)), [])

  const dispatchNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const addDocument = async (data, id = null) => {
    dispatchNotCancelled({ type: "TO_INITIAL_STATE" })

    const docData = { ...data, createdAt: serverTimestamp() }

    try {
      const reference = !id
        ? preparedCollection
        : doc(firestore, firestoreCollection, id)

      const ref = await !id
        ? addDoc(reference, docData)
        : setDoc(reference, docData)

      dispatchNotCancelled({ type: "DOCUMENT_ADDED", payload: ref })
    }
    catch (error) {
      dispatchNotCancelled({ type: "RAISE_ERROR", payload: error.message })
    }
  }

  const deleteDocument = async (id) => {
    dispatchNotCancelled({ type: "TO_INITIAL_STATE" })

    try {
      const docRef = doc(firestore, firestoreCollection, id)
      const ref = await deleteDoc(docRef)

      dispatchNotCancelled({ type: "DOCUMENT_DELETED", payload: ref })
    }
    catch (error) {
      dispatchNotCancelled({ type: "RAISE_ERROR", payload: error.message })
    }
  }

  const getDocument = async (id) => {
    dispatchNotCancelled({ type: "TO_INITIAL_STATE" })

    try {
      const docRef = doc(firestore, firestoreCollection, id)
      const ref = await getDoc(docRef)

      dispatchNotCancelled({ type: "DOCUMENT_GOT", payload: ref.data() })
    }
    catch (error) {
      dispatchNotCancelled({ type: "RAISE_ERROR", payload: error.message })
    }
  }

  return { addDocument, deleteDocument, getDocument, response: state }
}
