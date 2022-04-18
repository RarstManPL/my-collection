import { NavLink } from "react-router-dom"

import styles from "./Link.module.css"

export const Link = ({ tag, to, children, onClick }) => {
  switch(tag) {
    case "button": 
      return (
        <button 
          className={ styles.link } 
          onClick={ onClick }
        >{ children }</button>
      )
    case "navlink":
      return (
        <NavLink 
          to={ to ? to : "/" } 
          className={ ({ isActive }) => `${ styles.link } ${ isActive ? styles.active : '' }` }
          onClick={ onClick }
        >{ children }</NavLink>
      )
    default:
      return (
        <a 
          className={ styles.link } 
          href={ to ? to : "/" }
          onClick={ onClick }
        >{ children }</a>
      )
  }
}
