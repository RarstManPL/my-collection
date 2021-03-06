import { useCallback } from "react"
import { useField, useFormikContext } from "formik"

import { Input } from "@modules/Form"
import { useServiceFiller } from "@hooks"
import { regularExpressions } from "@constants"

export const BookFields = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField("isbn")
  const { disabled } = props

  const fillForm = useCallback((resource) => {
    const book = resource[Object.keys(resource)[0]]
    setFieldValue("title", book.title)
    setFieldValue("author", book.authors[0].name)
    setFieldValue("cover", book.cover.large)
  }, [setFieldValue])

  useServiceFiller(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${field.value}&jscmd=data&format=json`,
    regularExpressions.isbn.test(field.value),
    fillForm
  )

  return (
    <>
      <Input
        label="ISBN"
        name="isbn"
        type="text"
        placeholder="ISBN"
        required={false}
        disabled={disabled}
      />

      <Input
        label="Tytuł"
        name="title"
        type="text"
        placeholder="Pomnik Cesarzowej Achai - Tom I"
        required={true}
        disabled={disabled}
      />

      <Input
        label="Autor"
        name="author"
        type="text"
        placeholder="Andrzej Ziemiański"
        required={true}
        disabled={disabled}
      />

      <Input
        label="Okładka"
        name="cover"
        type="text"
        placeholder="https://imgur.com/"
        required={false}
        disabled={disabled}
      />
    </>
  )
}
