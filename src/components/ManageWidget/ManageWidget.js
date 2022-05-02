import { useLocation } from "react-router-dom"
import { Link, SortWidget } from "../"

import styles from "./ManageWidget.module.css"

export const ManageWidget = (props) => {
  const { sortMethods, addButton } = props
  const location = useLocation()

  return (
    <aside className={styles.manage}>
      <Link
        tag="link"
        to={`${location.pathname}/create`}
        className={styles.add}>{addButton.text}</Link>

      <hr className={styles.separator} />

      <SortWidget methods={sortMethods} />
    </aside>
  )
}
