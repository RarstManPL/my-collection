import { GameFields, ServiceEditor } from "../../components"
import { gameConstants } from "../../constants"

export const GameCreate = () => {
  return (
    <ServiceEditor
      collection="games"
      categories={gameConstants.sortMethods}
      addButton={gameConstants.addButton}
      formInit={gameConstants.formInit}
    >
      <GameFields />
    </ServiceEditor>
  )
}
