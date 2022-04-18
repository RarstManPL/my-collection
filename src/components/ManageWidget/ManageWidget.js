import styles from "./ManageWidget.module.css"
import { SortWidget } from "../SortWidget/SortWidget"
import { useLocation, useNavigate } from "react-router-dom"

const ManageWidget = ({ sortMethods, addButton }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const buttonAction = () => navigate(`${location.pathname}/create`)

  return (
    <aside className={styles.manage}>
      <button
        className={styles.add}
        onClick={buttonAction}>{addButton.text}</button>

      <hr className={styles.separator} />

      <SortWidget methods={sortMethods} />
    </aside>
  )
}

export { ManageWidget }
