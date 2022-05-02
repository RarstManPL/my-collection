import Home from "./Home"
import Login from "./Login"
import Books from "./Books"
import Games from "./Games"
import Movies from "./Movies"

const routes = [
  Home,
  Login,
  ...Books,
  ...Games,
  ...Movies
]

export default routes
