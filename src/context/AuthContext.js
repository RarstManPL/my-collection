import { createContext, useEffect, useReducer, useState } from "react"
import { auth, storage } from "../firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useSnapshot } from "../hooks/useSnapshot"
import { getDownloadURL, ref } from "firebase/storage"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

const authInitialState = {
  user: null,
  userReady: false,
  askedDocument: false,
  documentReady: false,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case "TO_INITIAL_STATE":
      return authInitialState

    case "MARK_LOGGED_IN":
      return { ...state, user: { ...action.payload }, userReady: true }

    case "MARK_ASKED_DOCUMENT":
      return { ...state, askedDocument: true }

    case "INJECT_USER_DOCUMENT":
      return { ...state, user: { ...state.user, ...action.payload }, documentReady: true }

    case "MARK_LOGGED_OUT":
      return { ...state, userReady: true, documentReady: true }

    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)
  const [options, setOptions] = useState(null)
  const navigate = useNavigate()
  const userDocument = useSnapshot("users", options)

  const injectUser = (user) => {
    dispatch({ type: "TO_INITIAL_STATE" })

    dispatch(!user
      ? { type: "MARK_LOGGED_OUT" }
      : { type: "MARK_LOGGED_IN", payload: user })

    setOptions(user ? { documentId: { id: user.uid } } : null)
  }

  const login = async (email, password) => {
    const answear = {
      user: null,
      error: null,
    }

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      answear.user = response.user
      injectUser(response.user)
    }
    catch (error) {
      answear.error = error.message
    }

    return answear
  }

  const logout = async () => {
    await signOut(auth)
    injectUser(null)
    navigate("/")
  }

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
    (onAuthStateChanged(auth, (user) => injectUser(user)))()
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
