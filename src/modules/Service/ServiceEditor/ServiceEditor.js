import React, { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"

import { Title, Error } from "@components"
import { Button, InlineChooser } from "@modules/Form"
import { ServiceFormPreview } from "../"

import { useCollection, useAuth } from "@hooks"

import styles from "./ServiceEditor.module.css"

export const ServiceEditor = (props) => {
  const {
    collection,
    addButton = null,
    categories,
    formInit,
    id,
    children,
    uid = null,
    disabled = false,
    motd = addButton ? addButton.text : null
  } = props

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
        motd={motd} />

      {!user || (uid && user.uid !== uid) || (id && !preparedFormInit.initialValues.title)
        ? <Error>Nie masz dostępu do tego pliku</Error>
        : (
          <Formik {...preparedFormInit} onSubmit={handleSubmit}>
            <>
              <div className={styles["form-preview"]}>
                <ServiceFormPreview id={id} collection={collection} redirect={true} />
              </div>

              <Form className={styles["form-container"]}>
                <div className={styles["form-inputs"]}>
                  {React.cloneElement(children, { disabled })}

                  <hr className={styles["form-line"]} />

                  <InlineChooser
                    name="category"
                    options={filteredCategories}
                    disabled={disabled}
                  />
                </div>

                {addButton && (
                  <div className={styles["form-buttons"]}>
                    <Button type="submit" className={styles.add}>
                      {addButton.text}
                    </Button>
                  </div>
                )}
              </Form>
            </>
          </Formik>
        )
      }
    </div>
  )
}
