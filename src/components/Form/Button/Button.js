import styles from "./Button.module.css"

const Button = (props) => {
  const { children, className, ...props_ } = props
  const classes = `${styles["form-button"]}${className ? ` ${className}` : ""}`

  return (
    <button className={classes} {...props_}>
      {children}
    </button>
  )
}

export { Button }
