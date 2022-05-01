import { SortWidget } from "../SortWidget/SortWidget"
import { useLocation } from "react-router-dom"
import { Link } from "../Link"

import styles from "./ManageWidget.module.css"
import { SearchWidget } from "../SearchWidget"

export const ManageWidget = (props) => {
  const { sortMethods, addButton, setQuery } = props
  const location = useLocation()

  return (
    <aside className={styles.manage}>
      <Link
        tag="link"
        to={`${location.pathname}/create`}
        className={styles.add}>{addButton.text}</Link>

      <hr className={styles.separator} />

      <SortWidget methods={sortMethods} />
      <SearchWidget setQuery={setQuery} />
    </aside>
  )
}
