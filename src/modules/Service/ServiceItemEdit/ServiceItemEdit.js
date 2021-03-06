import { useEffect, useState } from "react"

import { ServiceEditor } from "../"
import { useCollection } from "@hooks"

const editButton = { text: "Edytuj" }

export const ServiceItemEdit = (props) => {
  const { collection, id, constants, children } = props
  const { getDocument, response } = useCollection(collection)
  const [ready, setReady] = useState(false)
  const [formInit, setFormInit] = useState(constants.formInit)

  useEffect(() => {
    getDocument(id)
  }, [id, getDocument])

  useEffect(() => {
    if (!response.ready)
      return () => { }

    if (response.document) {
      setFormInit((current) => {
        let preparedValues = {}

        Object.keys(current.initialValues).forEach((key) => {
          preparedValues[key] = response.document[key]
        })

        return { ...current, initialValues: { ...preparedValues } }
      })
    }

    setReady(true)
  }, [response])

  return (
    ready && (
      <ServiceEditor
        collection={collection}
        categories={constants.sortMethods}
        addButton={editButton}
        formInit={formInit}
        id={id}
        uid={response.document ? response.document.uid : null}
      >
        {children}
      </ServiceEditor>
    )
  )
}
