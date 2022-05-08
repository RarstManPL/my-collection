import { ServicePage } from "@modules/Service"
import { movieConstants } from "@constants"

const MoviesList = () => {
  return (
    <ServicePage
      name="movies"
      addButton={movieConstants.addButton}
      sortMethods={movieConstants.sortMethods} />
  )
}

const route = {
  routeProps: {
    key: "movies",
    path: "/movies",
  },
  component: MoviesList,
}

export default route
