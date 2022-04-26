import { GameFields } from "../../components/Pages"
import { ServiceEditor } from "../../components/Service"
import { pages } from "../../constatns"

const GameCreate = () => {
  return (
    <ServiceEditor
      collection="games"
      categories={pages.games.sortMethods}
      addButton={pages.games.addButton}
      formInit={pages.games.formInit}
    >
      <GameFields />
    </ServiceEditor>
  )
}

export { GameCreate }
