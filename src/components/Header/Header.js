import { useNavigate } from "react-router-dom"
import { Navbar } from "../Navbar"
import { UserWidget } from "../UserWidget"
import styles from "./Header.module.css"

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className="container">
        <div
          className={styles.logo}
          onClick={() => navigate("/")}
        >
          <b>MY</b>COLLECTION
        </div>
        <Navbar />
        <UserWidget />
      </div>
    </header>
  )
}
