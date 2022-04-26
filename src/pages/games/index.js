import { ServicePage } from "../../components/Service"
import { pages } from "../../constatns"

const Games = () => {
  return (
    <ServicePage
      name="games"
      addButton={pages.games.addButton}
      sortMethods={pages.games.sortMethods} />
  )
}

export { Games }
