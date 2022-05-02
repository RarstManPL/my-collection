import styles from "./FormColumns.module.css"

export const FormColumn = (props) => {
  const { number, children } = props

  return (
    <div
      className={styles["form-column"]}
      style={{ gridColumn: `${number} / ${number + 1}` }}
    >{children}</div>
  )
}
