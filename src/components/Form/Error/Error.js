import styles from "./Error.module.css"

const Error = (props) => {
  const { children, ...props_} = props

  return (
    <div className={styles["field-error"]} {...props_}>
      {children}
    </div>
  )
}

export { Error }
