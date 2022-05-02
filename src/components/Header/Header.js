import { useNavigate } from "react-router-dom"
import { Navbar, Title, UserWidget } from "../"

import styles from "./Header.module.css"

const titleStyles = {
  color: "#fff",
  fontSize: "24px",
  cursor: "pointer",
  gridColumn: "1 / 4",
  lineHeight: "38px",
}

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className="container">
        <Title
          start="my"
          end="collection"
          style={titleStyles}
          startStyle={{ color: "#fff" }}
          onClick={() => navigate("/")} />

        <Navbar />
        <UserWidget />
      </div>
    </header>
  )
}
