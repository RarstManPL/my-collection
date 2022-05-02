import { MovieFields } from "@modules/Page"
import { ServiceEditor } from "@modules/Service"

import { movieConstants } from "@constants"

const MovieCreate = () => {
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

const route = {
  routeProps: {
    key: "movieCreate",
    path: "/movies/create",
  },
  component: MovieCreate,
}

export default route
