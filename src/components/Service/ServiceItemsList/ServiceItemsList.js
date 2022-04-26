import { ServiceItem } from "../ServiceItem/ServiceItem"
import { Bars } from "react-loader-spinner"
import { useSnapshot } from "../../../hooks/useSnapshot"
import { useEffect, useState } from "react"

import styles from "./ServiceItemsList.module.css"

const ServiceItemsList = (props) => {
  const { name, queryOptions = {}, category } = props
  const [ready, setReady] = useState(false)
  const [documents_, setDocuments_] = useState(null)

  const snapshot = useSnapshot(name, queryOptions)

  useEffect(() => {
    if (snapshot) {
      setReady((snapshot.ready
        && !(snapshot.controls.optionsCheck.null && snapshot.controls.optionsCheck.queries)))

      setDocuments_(snapshot.documents && (category
        ? snapshot.documents.filter(document => document.category === category)
        : snapshot.documents))
    }
  }, [snapshot, category])

  return (
    <div className={styles['service-items']}>
      {snapshot.error && <div>{snapshot.error}</div>}
      {ready
        ? !documents_ || documents_.length < 1
          ? <div>Brak elementów do załadowania...</div>
          : documents_.map(item => <ServiceItem serviceItem={item} key={item.id} />)
        : <Bars color="#00BFFF" height={80} width={80} />
      }
    </div>
  )
}

export { ServiceItemsList }
