import { useState } from "react"
import { Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { Bars } from "react-loader-spinner"

import { Title, Error } from "@components"
import { Button, Input } from "@modules/Form"
import { useAuth } from "@hooks"

import styles from "./Login.module.css"

export const Login = (props) => {
  const { formInit } = props
  const { user, userReady, login } = useAuth()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    const response = await login(values.login, values.password)
    setError(response.error)
    setSubmitting(false)

    if (!response.error)
      navigate("/")
  }

  return (
    <div className={`container ${styles["login-form-container"]}`}>
      <Formik {...formInit} onSubmit={handleSubmit}>
        <Form className={styles["login-form"]}>
          <Title
            start="log"
            end="owanie"
            style={{ width: "100%", textAlign: "center", fontSize: "24px" }}
            startStyle={{ color: "rgb(var(--primary))" }} />

          {error && <Error>{error}</Error>}

          {userReady
            ? !user
              ? (<>
                <Input
                  label="Login"
                  name="login"
                  type="email"
                  placeholder="myCreedo98@gmail.com"
                  required={true}
                />

                <Input
                  label="Hasło"
                  name="password"
                  type="password"
                  placeholder="**************"
                  required={true}
                />

                <div className={styles["login-form-buttons"]}>
                  <Button type="button" disabled>Firebase</Button>
                  <Button type="submit">Zaloguj się</Button>
                </div>
              </>)
              : <Error>Jesteś już zalogowany</Error>
            : <Bars color="#00BFFF" height={80} width={80} />
          }
        </Form>
      </Formik>
    </div>
  )
}
