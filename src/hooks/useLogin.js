import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth"
import { auth } from "../firebase"

const useLogin = () => {
  const login = (email, password) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      });
  }

  return { login }
}

export { useLogin }
