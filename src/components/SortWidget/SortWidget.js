import { useState } from "react"
import styles from "./SortWidget.module.css"

const SortWidget = ({ methods }) => {
  const [activeId, setActiveId] = useState(methods.find(method => method.default)?.id)

  const handleClick = (method) => {
    method.action('value' in method ? method.value : method.id)
    setActiveId(method.id)
  }

  return (
    <div className={styles['sort-widget']}>
      <ul className={styles['sort-list']}>
        {methods.map((method) => (
          <li
            className={`${styles['sort-item']} ${activeId === method.id ? styles.active : ""}`}
            onClick={() => handleClick(method)}
            key={method.id}
          >{method.text}</li>
        ))}
      </ul>
    </div>
  )
}

export { SortWidget }
