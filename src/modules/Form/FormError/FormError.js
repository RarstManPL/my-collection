import styles from "./FormError.module.css"

export const FormError = (props) => {
  const { children, ...rest } = props

  return (
    <div className={styles["field-error"]} {...rest}>
      {children}
    </div>
  )
}
