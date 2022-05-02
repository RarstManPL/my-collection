import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"

import { Title, Error } from "@components"
import { Button, InlineChooser } from "@modules/Form"
import { ServiceFormPreview } from "../"

import { useCollection, useAuth } from "@hooks"

import styles from "./ServiceEditor.module.css"

export const ServiceEditor = (props) => {
  const { collection, addButton, categories, formInit, id, children, uid = null } = props
  const { addDocument } = useCollection(collection)
  const navigate = useNavigate()
  const { user } = useAuth()

  const filteredCategories = useMemo(() => categories.filter((category) => category.value), [categories])
  const preparedFormInit = useMemo(() => ({
    ...formInit,
    initialValues: {
      ...formInit.initialValues,
      category: formInit.initialValues.category && formInit.initialValues.category !== ""
        ? formInit.initialValues.category
        : filteredCategories[0].value,
    }
  }), [formInit, filteredCategories])

  const handleSubmit = async (values, { setSubmitting }) => {
    await addDocument({ ...values, uid: user.uid }, id)
    navigate(`/${collection}`)
    setSubmitting(false)
  }

  return (
    <div className="container page">
      <Title
        start="my"
        end={collection}
        motd={addButton.text} />

      {!user || (uid && user.uid !== uid)
        ? <Error>Nie masz dostępu do tego pliku</Error>
        : (
            <Formik {...preparedFormInit} onSubmit={handleSubmit}>
            <>
              <div className={styles["form-preview"]}>
                <ServiceFormPreview id={id} collection={collection} redirect={true} />
              </div>
    
              <Form className={styles["form-container"]}>
                <div className={styles["form-inputs"]}>
                  {children}
    
                  <hr className={styles["form-line"]} />
    
                  <InlineChooser name="category" options={filteredCategories} />
                </div>
    
                <div className={styles["form-buttons"]}>
                  <Button type="submit" className={styles.add}>
                    {addButton.text}
                  </Button>
                </div>
              </Form>
            </>
          </Formik>
        )
      }
    </div>
  )
}
