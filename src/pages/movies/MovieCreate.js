import { MovieFields, ServiceEditor } from "../../components"
import { movieConstants } from "../../constatns"

export const MovieCreate = () => {
  return (
    <ServiceEditor
      collection="movies"
      categories={movieConstants.sortMethods}
      addButton={movieConstants.addButton}
      formInit={movieConstants.formInit}
    >
      <MovieFields />
    </ServiceEditor>
  )
}
