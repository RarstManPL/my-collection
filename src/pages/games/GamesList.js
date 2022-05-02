import { ServicePage } from "../../components"
import { gameConstants } from "../../constatns"

export const GamesList = () => {
  return (
    <ServicePage
      name="games"
      addButton={gameConstants.addButton}
      sortMethods={gameConstants.sortMethods} />
  )
}
