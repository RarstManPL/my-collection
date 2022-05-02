import styles from "./Error.module.css"

export const Error = (props) => {
  const { children } = props

  return (
    <div className={styles.error}>
      {children}
    </div>
  )
}
