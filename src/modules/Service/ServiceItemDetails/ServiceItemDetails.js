import { useState, useEffect } from "react"

import { ServiceEditor } from "../ServiceEditor"
import { useSnapshot } from "@hooks"

export const ServiceItemDetails = (props) => {
  const { id, collection, constants, children } = props
  const [options] = useState({ documentId: { id: id } })
  const [formInit, setFormInit] = useState(constants.formInit)
  const [ready, setReady] = useState(false)
  const snapshot = useSnapshot(collection, options)

  useEffect(() => {
    if (!snapshot.ready || Object.keys(snapshot.documents).length < 1)
      return () => { }

    setFormInit((current) => ({
      ...current,
      initialValues: {
        ...current.initialValues,
        ...(Object
          .keys(current.initialValues)
          .reduce((obj2, key) => (obj2[key] = snapshot.documents[key], obj2), {}))
      },
    }))

    setReady(true)
  }, [snapshot])

  return (
    snapshot.ready && ready
      ? (
        <ServiceEditor
          collection={collection}
          categories={constants.sortMethods}
          formInit={formInit}
          id={id}
          uid={snapshot.documents.uid}
          disabled={true}
          motd={snapshot.documents.title}
        >
          {children}
        </ServiceEditor>
      )
      : <p>Ładowanie</p>
  )
}