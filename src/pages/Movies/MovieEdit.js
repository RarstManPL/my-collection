import { useParams } from "react-router-dom"

import { MovieFields } from "@modules/Page"
import { ServiceItemEdit } from "@modules/Service"

import { movieConstants } from "@constants"

const MovieEdit = () => {
  const { id } = useParams()

  return (
    <ServiceItemEdit
      collection="movies"
      constants={movieConstants}
      id={id}
    >
      <MovieFields />
    </ServiceItemEdit>
  )
}

const route = {
  routeProps: {
    key: "movieEdit",
    path: "/movies/edit/:id",
  },
  component: MovieEdit,
}

export default route
