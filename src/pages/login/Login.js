import * as Yup from "yup"
import { Login as LoginComponent } from "@modules/Page"

const formInit = {
  initialValues: {
    login: "",
    password: "",
  },

  validationSchema: Yup.object({
    login: Yup.string()
      .email("Podany email nie jest poprawny")
      .required("Login jest wymagany"),
    password: Yup.string()
      .required("Hasło jest wymagane"),
  }),
}

export const Login = () => {
  return <LoginComponent formInit={formInit} />
}
