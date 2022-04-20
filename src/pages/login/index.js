import { Login as LoginComponent } from "../../components/Pages";
import * as Yup from "yup"

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

const Login = () => {
  return <LoginComponent formInit={formInit} />
}

export { Login }
