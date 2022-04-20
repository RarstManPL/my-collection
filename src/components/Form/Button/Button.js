import styles from "./Button.module.css"

const Button = (props) => {
  const { children, ...props_ } = props

  return (
    <button className={styles['form-button']} {...props_}>
      {children}
    </button>
  )
}

export { Button }
