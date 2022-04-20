import { NavLink, Link as RLink } from "react-router-dom"

import styles from "./Link.module.css"

const Link = (props) => {
  const { tag, to = "/", children, className, isActive, activeClass, ...props_ } = props

  const activeClass_ = activeClass ? activeClass : styles.active
  const classNames =
    `${styles.link}${className ? ` ${className}` : ""}${isActive ? ` ${activeClass_}` : ""}`

  switch (tag) {
    case "button":
      return (
        <button
          className={classNames}
          {...props_}
        >{children}</button>
      )

    case "link":
      return (
        <RLink
          to={to}
          className={classNames}
          {...props_}
        >{children}</RLink>
      )

    case "navlink":
      return (
        <NavLink
          to={to}
          className={({ isActive }) => `${classNames} ${isActive ? activeClass_ : ""}`}
          {...props_}
        >{children}</NavLink>
      )

    default:
      return (
        <a
          className={classNames}
          href={to}
          {...props_}
        >{children}</a>
      )
  }
}

export { Link }
