import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"

import { auth, storage } from "@fbase"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDownloadURL, ref } from "firebase/storage"

import { useSnapshot } from "@hooks"

export const AuthContext = createContext()

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

export const AuthContextProvider = ({ children }) => {
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

  const login = useCallback(async (email, password) => {
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
  }, [])

  const logout = useCallback(async () => {
    await signOut(auth)
    injectUser(null)
    navigate("/")
  }, [navigate])

  const authValues = useMemo(() => ({ ...state, dispatch, login, logout }), [state, login, logout])

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  )
}
