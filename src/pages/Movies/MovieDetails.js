import { useParams } from "react-router-dom"

import { ServiceItemDetails } from "@modules/Service"
import { MovieFields } from "@modules/Page"

import { movieConstants } from "@constants"

export const MovieDetails = () => {
  const { id } = useParams()

  return (
    <ServiceItemDetails
      id={id}
      collection="movies"
      constants={movieConstants}
    >
      <MovieFields />
    </ServiceItemDetails>
  )
}

const route = {
  routeProps: {
    key: "movieDetails",
    path: "/movies/:id",
  },
  component: MovieDetails,
}

export default route
