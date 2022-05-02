import { MovieFields } from "@modules/Page"
import { ServiceEditor } from "@modules/Service"

import { movieConstants } from "@constants"

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
