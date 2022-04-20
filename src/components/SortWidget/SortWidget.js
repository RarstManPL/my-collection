import { useState } from "react"
import { Link } from "../Link"

import styles from "./SortWidget.module.css"

const SortWidget = (props) => {
  const { methods } = props
  const [activeId, setActiveId] = useState(methods.find(method => method.default)?.id)

  const handleClick = (method) => {
    method.action(method.value)
    setActiveId(method.id)
  }

  return (
    <div className={styles["sort-widget"]}>
      <ul className={styles["sort-list"]}>
        {methods.map((method) => (
          <Link
            tag="button"
            key={method.id}
            className={styles["sort-item"]}
            isActive={method.id === activeId}
            activeClass={styles.active}
            onClick={() => handleClick(method)}
          >{method.text}</Link>
        ))}
      </ul>
    </div>
  )
}

export { SortWidget }
