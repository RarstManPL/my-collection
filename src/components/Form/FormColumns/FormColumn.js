import styles from "./FormColumns.module.css"

const FormColumn = (props) => {
  const { number, children, ...props_ } = props

  return (
    <div 
      className={styles["form-column"]} 
      style={{gridColumn: `${number} / ${number + 1}`}}
    >{children}</div>
  )
}

export { FormColumn }
