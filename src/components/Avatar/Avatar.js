import styles from "./Avatar.module.css"
import defaultAvatar from "../../assets/default.jpg"

const Avatar = ({ src }) => {
  return (
    <img 
      src={ src ? src : defaultAvatar } 
      alt="Avatar"
      className={ styles.avatar }
    />
  )
}

export { Avatar }
