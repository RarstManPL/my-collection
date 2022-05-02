import { useParams } from "react-router-dom"

import { ServiceItemEdit, GameFields } from "../../components"
import { gameConstants } from "../../constatns"

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
