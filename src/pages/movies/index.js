import { ServicePage } from "../../components/Service"
import { pages } from "../../constatns"

const Movies = () => {
  return (
    <ServicePage
      name="movies"
      addButton={pages.movies.addButton}
      sortMethods={pages.movies.sortMethods} />
  )
}

export { Movies }
