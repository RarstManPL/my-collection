import styles from "./FormColumns.module.css"

const FormColumns = (props) => {
  const { amount, children, ...props_ } = props

  return (
    <div 
      className={styles["form-columns"]} 
      style={{gridTemplateColumns: `repeat(${amount}, 1fr)`}}
    >{children}</div>
  )
}

export { FormColumns }
