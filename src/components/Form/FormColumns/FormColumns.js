import styles from "./FormColumns.module.css"

export const FormColumns = (props) => {
  const { amount, children } = props

  return (
    <div
      className={styles["form-columns"]}
      style={{ gridTemplateColumns: `repeat(${amount}, 1fr)` }}
    >{children}</div>
  )
}
