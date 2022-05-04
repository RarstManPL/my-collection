import { useMemo } from "react"
import { Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { Header } from "@components"
import pages from "@pages"

import "./App.css"

/* 
  TODO
  - default image
*/

const colors = {
  books: {
    primary: "255, 138, 101",
    secondary: "177, 80, 50",
  },

  games: {
    primary: "124, 208, 81",
    secondary: "22, 132, 103",
  },

  movies: {
    primary: "124, 99, 222",
    secondary: "54, 27, 156",
  },
}

export const App = () => {
  const location = useLocation()

  const styles = useMemo(() => {
    const colorScheme = Object
      .entries(colors)
      .find(([key]) => location.pathname.startsWith(`/${key}`))
      ?.[1]

    return colorScheme
      ? { "--primary": colorScheme.primary, "--secondary": colorScheme.secondary }
      : {}
  }, [location.pathname])

  return (
    <div className="App" style={styles}>
      <Header />

      <Routes>
        {pages.map(module => {
          const Component = module.component
          return <Route {...module.routeProps} element={<Component />} />
        })}
      </Routes>
    </div>
  )
}
