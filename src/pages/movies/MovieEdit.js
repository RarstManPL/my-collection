import { useParams } from "react-router-dom"
import { ServiceItemEdit } from "../../components/Service"
import { MovieFields } from "../../components/Pages"
import { movieConstants } from "../../constatns"

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
