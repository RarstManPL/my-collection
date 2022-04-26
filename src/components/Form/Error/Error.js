import styles from "./Error.module.css"

export const Error = (props) => {
  const { children, ...rest } = props

  return (
    <div className={styles["field-error"]} {...rest}>
      {children}
    </div>
  )
}
