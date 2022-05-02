import { ServicePage } from "../../components"
import { movieConstants } from "../../constatns"

export const MoviesList = () => {
  return (
    <ServicePage
      name="movies"
      addButton={movieConstants.addButton}
      sortMethods={movieConstants.sortMethods} />
  )
}
