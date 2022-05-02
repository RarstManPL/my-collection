import { NavLink, Link as RLink } from "react-router-dom"
import styles from "./Link.module.css"

export const Link = (props) => {
  const { tag, to = "/", children, className, isActive, activeClass, ...rest } = props

  const selectedActiveClass = activeClass ? activeClass : styles.active
  const classNames =
    `${styles.link}${className ? ` ${className}` : ""}${isActive ? ` ${selectedActiveClass}` : ""}`

  switch (tag) {
    case "button":
      return (
        <button
          className={classNames}
          {...rest}
        >{children}</button>
      )

    case "link":
      return (
        <RLink
          to={to}
          className={classNames}
          {...rest}
        >{children}</RLink>
      )

    case "navlink":
      return (
        <NavLink
          to={to}
          className={({ isActive }) => `${classNames} ${isActive ? selectedActiveClass : ""}`}
          {...rest}
        >{children}</NavLink>
      )

    default:
      return (
        <a
          className={classNames}
          href={to}
          {...rest}
        >{children}</a>
      )
  }
}
