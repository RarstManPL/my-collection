import { ServiceItem } from "../ServiceItem/ServiceItem"
import { Bars } from "react-loader-spinner"
import { useSnapshot } from "../../../hooks/useSnapshot"
import { useEffect, useState } from "react"

import styles from "./ServiceItemsList.module.css"

export const ServiceItemsList = (props) => {
  const { name, queryOptions = {}, category } = props
  const [ready, setReady] = useState(false)
  const [documents, setDocuments] = useState(null)

  const snapshot = useSnapshot(name, queryOptions)

  useEffect(() => {
    if (snapshot) {
      setReady((snapshot.ready
        && !(snapshot.controls.optionsCheck.null && snapshot.controls.optionsCheck.queries)))

      setDocuments(snapshot.documents && (category
        ? snapshot.documents.filter(document => document.category === category)
        : snapshot.documents))
    }
  }, [snapshot, category])

  return (
    <div className={styles["service-items"]}>
      {snapshot.error && <div>{snapshot.error}</div>}
      {ready
        ? !documents || documents.length < 1
          ? <div>Brak elementów do załadowania...</div>
          : documents.map(item => <ServiceItem serviceItem={item} key={item.id} />)
        : <Bars color="#00BFFF" height={80} width={80} />
      }
    </div>
  )
}
