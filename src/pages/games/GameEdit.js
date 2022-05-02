import { useParams } from "react-router-dom"

import { GameFields } from "@modules/Page"
import { ServiceItemEdit } from "@modules/Service"

import { gameConstants } from "@constants"

export const GameEdit = () => {
  const { id } = useParams()

  return (
    <ServiceItemEdit
      collection="games"
      constants={gameConstants}
      id={id}
    >
      <GameFields />
    </ServiceItemEdit>
  )
}
