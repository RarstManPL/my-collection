import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (authContext === null)
    throw Error("You must use authContext inside AuthContextProvider")

  return authContext
}
