import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCollection } from "../../hooks/useCollection"
import { ServiceEditor } from "../../components/Service"
import { BookFields } from "../../components/Pages"
import { bookConstants } from "../../constatns"

export const BookEdit = () => {
  const { id } = useParams()
  const { getDocument, response } = useCollection("books")
  const [ready, setReady] = useState(false)
  const [formInit, setFormInit] = useState(bookConstants.formInit)

  useEffect(() => {
    getDocument(id)
  }, [id, getDocument])

  useEffect(() => {
    if (response.ready) {
      setFormInit((current) => (
        {
          ...current,
          initialValues: {
            ...current.initialValues,
            title: response.document.title,
            author: response.document.author,
            cover: response.document.cover,
            category: response.document.category,
          },
        }
      ))

      setReady(true)
    }
  }, [response])

  return (
    ready && (
      <ServiceEditor
        collection="books"
        categories={bookConstants.sortMethods}
        addButton={bookConstants.addButton}
        formInit={formInit}
        id={id}
      >
        <BookFields />
      </ServiceEditor>
    )
  )
}
