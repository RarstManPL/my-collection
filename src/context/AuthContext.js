import { createContext, useEffect, useReducer, useState } from "react"
import { auth, storage } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useSnapshot } from "../hooks/useSnapshot"
import { getDownloadURL, ref } from "firebase/storage"

const AuthContext = createContext()

const authInitialState = {
  user: null,
  userReady: false,
  documentReady: false,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case "TO_INITIAL_STATE":
      return authInitialState

    case "MARK_LOGGED_IN":
      return { ...state, user: { ...action.payload }, userReady: true, }

    case "INJECT_USER_DOCUMENT":
      return { ...state, user: { ...state.user, ...action.payload, }, documentReady: true, }

    case "MARK_LOGGED_OUT":
      return { ...state, user: null, userReady: true, documentReady: true, }

    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)
  const [options, setOptions] = useState(null)
  const userDocument = useSnapshot("users", options)

  useEffect(() => {
    if (userDocument.documents) {
      const avatarReference = ref(storage, `profilePictures/${userDocument.documents.profilePicture}`)
      const action = { type: "INJECT_USER_DOCUMENT", payload: { ...userDocument.documents } }

      getDownloadURL(avatarReference)
        .then((url) => dispatch({ ...action, payload: { ...action.payload, avatarURL: url } }))
        .catch(() => dispatch(action))
    }
  }, [userDocument])

  useEffect(() => {
    const unsubscription = onAuthStateChanged(auth, (user) => {
      console.log(user)
      dispatch({ type: "TO_INITIAL_STATE" })

      dispatch(!user
        ? { type: "MARK_LOGGED_OUT" }
        : { type: "MARK_LOGGED_IN", payload: user })

      if (user)
        setOptions({ documentId: { id: user.uid } })
    })

    return unsubscription
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
