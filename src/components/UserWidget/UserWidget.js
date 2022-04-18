import styles from "./UserWidget.module.css"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "../Link"
import { Avatar } from "../Avatar"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { Bars } from "react-loader-spinner"

const UserWidget = () => {
  const { user, userReady, documentReady } = useAuth()
  const navigate = useNavigate()

  return (
    <div className={ styles.widget }>
      { userReady && documentReady
        ? user
          ? (
            <>
              <Link 
                tag="button" 
                className={ styles.user } 
                onClick={() => signOut(auth)}>{ user.name }</Link>

              <Avatar src={ user.avatarURL } />
            </>)
          : <Link
              tag="button"
              className={ styles.user }
              onClick={() => navigate("/login")}>Zaloguj się</Link>
        : <Bars color="#fff" height={40} width={80} />
      }
    </div>
  )
}

export { UserWidget }
