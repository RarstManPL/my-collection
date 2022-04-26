import styles from "./Title.module.css"

export const Title = (props) => {
  const { start, end, motd = null, startStyle = {}, ...rest } = props

  return (
    <div className={styles.title} {...rest}>
      <b className={styles["title-start"]} style={startStyle}>
        {start}
      </b>
      {end}{motd ? <span style={{ textTransform: "none" }}> - {motd}</span> : ""}
    </div>
  )
}
