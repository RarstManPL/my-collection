import { useParams } from "react-router-dom"

import { ServiceItemDetails } from "@modules/Service"
import { GameFields } from "@modules/Page"

import { gameConstants } from "@constants"

export const GameDetails = () => {
  const { id } = useParams()

  return (
    <ServiceItemDetails
      id={id}
      collection="games"
      constants={gameConstants}
    >
      <GameFields />
    </ServiceItemDetails>
  )
}

const route = {
  routeProps: {
    key: "gameDetails",
    path: "/games/:id",
  },
  component: GameDetails,
}

export default route
