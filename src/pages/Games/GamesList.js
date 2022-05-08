import { ServicePage } from "@modules/Service"
import { gameConstants } from "@constants"

const GamesList = () => {
  return (
    <ServicePage
      name="games"
      addButton={gameConstants.addButton}
      sortMethods={gameConstants.sortMethods} />
  )
}

const route = {
  routeProps: {
    key: "games",
    path: "/games",
  },
  component: GamesList,
}

export default route
