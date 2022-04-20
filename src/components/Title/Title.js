import styles from "./Title.module.css"

const Title = (props) => {
  const { start, end, startStyle = {}, ...props_ } = props

  return (
    <div className={styles.title} {...props_}>
      <b className={styles["title-start"]} style={startStyle}>
        {start}
      </b>
      {end}
    </div>
  )
}

export { Title }
