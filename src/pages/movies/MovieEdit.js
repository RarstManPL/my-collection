import { useParams } from "react-router-dom"

import { MovieFields } from "@modules/Page"
import { ServiceItemEdit } from "@modules/Service"

import { movieConstants } from "@constants"

export const MovieEdit = () => {
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
