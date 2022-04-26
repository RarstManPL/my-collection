import { ServicePage } from "../../components/Service"
import { movieConstants } from "../../constatns"

export const MoviesList = () => {
  return (
    <ServicePage
      name="movies"
      addButton={movieConstants.addButton}
      sortMethods={movieConstants.sortMethods} />
  )
}
