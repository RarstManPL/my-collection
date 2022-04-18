import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { useSnapshot } from "../../hooks/useSnapshot"
import { ManageWidget } from "../ManageWidget"
import { PageItemsList } from "../PageItemsList"
import { PageTitle } from "../PageTitle"
import styles from "./ServicePage.module.css"

const ServicePage = ({ name, sortMethods, addButton }) => {
  const { user, userReady, documentReady } = useAuth()
  const [category, setCategory] = useState(sortMethods.find(sortMethod => sortMethod.default)?.value)
  const [options, setOptions] = useState(null)

  const sortMethods_ = sortMethods
    .map(sortMethod => ({
      ...sortMethod,
      action: (category_) => setCategory(category_)
    }))

  const snapshot = useSnapshot(name, options)

  useEffect(() => {
    if (userReady && documentReady) {
      setOptions({
        queries: [{
          field: "uid",
          operator: "==",
          value: user ? user.uid : null,
          required: true
        }]
      })
    }
  }, [user, userReady, documentReady])

  return (
    <main className={`container ${styles.page}`}>
      <PageTitle name={name} />

      <ManageWidget
        sortMethods={sortMethods_}
        addButton={addButton} />

      <PageItemsList
        snapshot={snapshot}
        category={category} />
    </main>
  )
}

export { ServicePage }
