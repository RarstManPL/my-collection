import { useEffect, useState } from "react"
import { Bars } from "react-loader-spinner"

import { Paginate, Error } from "@components"
import { SearchWidget } from "@modules/Widget"
import { ServiceItem } from "../"

import { useSnapshot } from "@hooks"

import styles from "./ServiceItemsList.module.css"

const matchesText = (obj, query) => {
  if (typeof obj === "string")
    return obj.toLowerCase().includes(query.toLowerCase())

  return Object.values(obj).some(val => matchesText(val, query))
}

export const ServiceItemsList = (props) => {
  const { name, queryOptions = {}, category, itemsPerPage = 0, withFiltration = true } = props

  const [ready, setReady] = useState(false)
  const [documents, setDocuments] = useState(null)
  const [query, setQuery] = useState(null)

  const [documentsLength, setDocumentsLength] = useState(0)
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const snapshot = useSnapshot(name, queryOptions)

  const handlePageClick = (event) => setItemOffset((event.selected * itemsPerPage) % documentsLength)

  useEffect(() => {
    if (snapshot) {
      setReady((snapshot.ready
        && !(snapshot.controls.optionsCheck.null && snapshot.controls.optionsCheck.queries)))

      if (snapshot.documents) {
        const categoryFiltred = snapshot.documents && (category
          ? snapshot.documents.filter(document => document.category === category)
          : snapshot.documents)

        const queryFiltred = categoryFiltred && (withFiltration && query
          ? categoryFiltred.filter(document => matchesText(document, query))
          : categoryFiltred)

        setDocumentsLength(queryFiltred.length)

        if (itemsPerPage > 0) {
          setDocuments(queryFiltred.slice(itemOffset, itemOffset + itemsPerPage))
          setPageCount(Math.ceil(queryFiltred.length / itemsPerPage))
        } else {
          setDocuments(queryFiltred)
        }
      }
    }
  }, [snapshot, category, query, itemOffset, itemsPerPage, withFiltration])

  return (
    <div className={styles["service-items"]}>
      {snapshot.error && <div>{snapshot.error}</div>}
      {ready
        ? (
          <>
            {withFiltration && (
              <div className={styles["search-widget"]}>
                <SearchWidget setQuery={setQuery} className={styles.widget} />
              </div>
            )}

            {!documents || documents.length < 1
              ? <Error>Brak elementów do załadowania...</Error>
              : (
                <>
                  {documents.map(item => <ServiceItem serviceItem={item} key={item.id} />)}

                  {itemsPerPage > 0 && (
                    <div className={styles.pagination}>
                      <Paginate
                        onPageChange={handlePageClick}
                        pageCount={pageCount}
                      />
                    </div>
                  )}
                </>
              )
            }
          </>)
        : <Bars color="#00BFFF" height={80} width={80} />
      }
    </div>
  )
}
