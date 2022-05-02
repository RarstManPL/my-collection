import { ServicePage } from "@modules/Service"
import { movieConstants } from "@constants"

export const MoviesList = () => {
  return (
    <ServicePage
      name="movies"
      addButton={movieConstants.addButton}
      sortMethods={movieConstants.sortMethods} />
  )
}
