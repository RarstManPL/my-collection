import styles from "./Avatar.module.css"
import defaultAvatar from "../../assets/default.jpg"

export const Avatar = (props) => {
  const { src = defaultAvatar } = props

  return (
    <img
      src={src}
      alt="Avatar"
      className={styles.avatar}
    />
  )
}
