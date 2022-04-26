import { MovieFields } from "../../components/Pages"
import { ServiceEditor } from "../../components/Service"
import { pages } from "../../constatns"

const MovieCreate = () => {
  return (
    <ServiceEditor
      collection="movies"
      categories={pages.movies.sortMethods}
      addButton={pages.movies.addButton}
      formInit={pages.movies.formInit}
    >
      <MovieFields />
    </ServiceEditor>
  )
}

export { MovieCreate }
