import { Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { Title } from "../../Title"
import { Button, InlineChooser } from "../../Form"
import { useCollection } from "../../../hooks/useCollection"
import { ServiceFormPreview } from "../"
import { useAuth } from "../../../hooks/useAuth"

import styles from "./ServiceEditor.module.css"

export const ServiceEditor = (props) => {
  const { collection, addButton, categories, formInit, id, children } = props
  const { addDocument } = useCollection(collection)
  const navigate = useNavigate()
  const { user } = useAuth()

  const filteredCategories = categories.filter((category) => category.value)
  const preparedFormInit = {
    ...formInit,
    initialValues: {
      ...formInit.initialValues,
      category: formInit.initialValues.category && formInit.initialValues.category !== ""
        ? formInit.initialValues.category
        : filteredCategories[0].value,
    },
  }

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

      <Formik {...preparedFormInit} onSubmit={handleSubmit}>
        <>
          <div className={styles["form-preview"]}>
            <ServiceFormPreview />
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
    </div>
  )
}
