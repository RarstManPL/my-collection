import { Link } from "../"
import styles from "./Navbar.module.css"

const links = [
  { id: "games", name: "Gry", url: "/games" },
  { id: "books", name: "Książki", url: "/books" },
  { id: "movies", name: "Filmy", url: "/movies" },
]

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {links.map(link => (
        <Link
          tag="navlink"
          to={link.url}
          key={link.id}
        >{link.name}</Link>
      ))}
    </nav>
  )
}
