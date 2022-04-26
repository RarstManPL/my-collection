import styles from "../Form.module.css"

export const Label = (props) => {
  const { children, required, ...rest } = props
  const classes = `${styles["field-label"]}${required ? ` ${styles["field-required"]}` : ""}`

  return (
    <label className={classes} {...rest}>
      {children}
    </label>
  )
}
