import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (authContext === null)
    throw Error("You must use authContext inside AuthContextProvider")

  return authContext
}

export { useAuth }
