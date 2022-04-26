import styles from "../Form.module.css"

const Label = (props) => {
  const { children, required, ...props_ } = props
  const classes = `${styles["field-label"]}${required ? ` ${styles["field-required"]}` : ""}`

  return (
    <label className={classes} {...props_}>
      {children}
    </label>
  )
}

export { Label }
