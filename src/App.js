import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header"
import { useLocation } from "react-router-dom"

import { Home, Login } from "./pages"
import { BookCreate, BookDetails, BookEdit, BooksList } from "./pages"
import { GameCreate, GameDetails, GameEdit, GamesList } from "./pages"
import { MovieCreate, MovieDetails, MovieEdit, MoviesList } from "./pages"

import "./App.css"

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

  const colorScheme = Object
    .entries(colors)
    .find(([key]) => location.pathname.startsWith(`/${key}`))
    ?.[1]

  const styles = colorScheme
    ? { "--primary": colorScheme.primary, "--secondary": colorScheme.secondary }
    : {}

  return (
    <div className="App" style={styles}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books/create" element={<BookCreate />} />
        <Route path="/books/edit/:id" element={<BookEdit />} />

        <Route path="/games" element={<GamesList />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/games/edit/:id" element={<GameEdit />} />

        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/create" element={<MovieCreate />} />
        <Route path="/movies/edit/:id" element={<MovieEdit />} />
      </Routes>
    </div>
  )
}
