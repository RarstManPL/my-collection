import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { ManageWidget } from "../ManageWidget"
import { ServiceItemsList } from "../ServiceItemsList"
import { Title } from "../Title"
import { where } from "firebase/firestore"

import styles from "./ServicePage.module.css"

const ServicePage = (props) => {
  const { name, sortMethods, addButton } = props
  const { user, userReady, documentReady } = useAuth()
  const [category, setCategory] = useState(sortMethods.find(sortMethod => sortMethod.default)?.value)
  const [options, setOptions] = useState(null)
  const uid = user ? user.uid : null

  const sortMethods_ = sortMethods
    .map(sortMethod => ({
      ...sortMethod,
      action: (category_) => setCategory(category_)
    }))

  useEffect(() => {
    if (userReady && documentReady) {
      setOptions({
        queries: [
          where("uid", "==", uid)
        ]
      })
    }
  }, [uid, userReady, documentReady])

  return (
    <main className={`container ${styles.page}`}>
      <Title
        start="my"
        end={name} />

      {user
        ? (<>
          <ManageWidget
            sortMethods={sortMethods_}
            addButton={addButton} />

          <ServiceItemsList
            name={name}
            queryOptions={options}
            category={category} />
        </>)
        : <div>Nie możesz tego zobaczyć... Nie jesteś zalogowany</div>
      }
    </main>
  )
}

export { ServicePage }
