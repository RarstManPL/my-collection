import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { pages } from '../../constatns'
import { Input } from '../../components/Form'
import { ServiceEditor } from '../../components/Service'
import { BookFields } from '../../components/Pages'

export default function BookEdit() {
  const { id } = useParams()
  const { getDocument, response } = useCollection("books")
  const [ready, setReady] = useState(false)
  const [formInit, setFormInit] = useState(pages.books.formInit)

  useEffect(() => { 
    getDocument(id)
  }, [id])

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
        categories={pages.books.sortMethods}
        addButton={pages.books.addButton}
        formInit={formInit}
        id={id}
      >
        <BookFields />
      </ServiceEditor>
    )
  )
}
