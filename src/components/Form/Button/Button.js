import styles from "./Button.module.css"

export const Button = (props) => {
  const { children, className, ...rest } = props
  const classes = `${styles["form-button"]}${className ? ` ${className}` : ""}`

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
