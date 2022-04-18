import { Routes, Route } from 'react-router-dom';
import "./App.css"

import { Header } from './components/Header'

import Home from './pages'
import Login from './pages/login'

import { Books } from './pages/books'
import BookCreate from './pages/books/create'
import BookEdit from './pages/books/edit'
import BookDetails from './pages/books/details'

import { Games } from './pages/games'
import GameCreate from './pages/games/create'
import GameEdit from './pages/games/edit'
import GameDetails from './pages/games/details'

import { Movies } from './pages/movies'
import MovieCreate from './pages/movies/create'
import MovieEdit from './pages/movies/edit'
import MovieDetails from './pages/movies/details'

import { useLocation } from "react-router-dom"

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

const App = () => {
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

        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books/create" element={<BookCreate />} />
        <Route path="/books/edit/:id" element={<BookEdit />} />

        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/games/edit/:id" element={<GameEdit />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/create" element={<MovieCreate />} />
        <Route path="/movies/edit/:id" element={<MovieEdit />} />
      </Routes>
    </div>
  );
}

export default App
