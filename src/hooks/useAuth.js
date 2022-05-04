import { useContext } from "react"
import { AuthContext } from "@contexts"

export const useAuth = () => {
  const authContext = useContext(AuthContext)

  if (authContext === null)
    throw Error("You must use authContext inside AuthContextProvider")

  return authContext
}
