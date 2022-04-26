import { firestore } from "../firebase"
import { collection, addDoc, serverTimestamp, setDoc, doc, getDoc } from "firebase/firestore"
import { useEffect, useReducer, useState } from "react"

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

    case "RAISE_ERROR":
      return { ...state, error: action.payload, ready: true }

    default:
      return state
  }
}

const useCollection = (firestoreCollection) => {
  const [collection_, setCollection_] = useState(null)
  const [isCancelled, setCancelled] = useState(false)
  const [state, dispatch] = useReducer(collectionReducer, collectionInitialState)

  useEffect(() => {
    setCollection_(collection(firestore, firestoreCollection))
  }, [firestoreCollection])

  useEffect(() => (() => setCancelled(true)), [])

  const dispatchNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const addDocument = async (data, id = null) => {
    dispatchNotCancelled({ type: "TO_INITIAL_STATE" })
    console.log("ID",id)

    const docData = { ...data, createdAt: serverTimestamp() }
    console.log("DEJTa", data)

    try {
      const reference = !id
        ? collection_
        : doc(firestore, firestoreCollection, id)

      const ref = await !id
        ? addDoc(reference, docData)
        : setDoc(reference, docData)

      dispatchNotCancelled({ type: "DOCUMENT_ADDED", payload: ref })
    }
    catch (error) {
      dispatchNotCancelled({ type: "RAISE_ERROR", payload: error.message })
      console.log("ERR", error.message)
    }
  }

  const deleteDocument = async (data) => { }

  const getDocument = async (id) => {
    dispatchNotCancelled({ type: "TO_INITIAL_STATE" })

    try {
      console.log(firestoreCollection)
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

export { useCollection }
