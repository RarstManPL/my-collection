import { Input } from "../../components/Form"
import { BookFields } from "../../components/Pages"
import { ServiceEditor } from "../../components/Service"
import { pages } from "../../constatns"

const BookCreate = () => {
  return (
    <ServiceEditor
      collection="books"
      categories={pages.books.sortMethods}
      addButton={pages.books.addButton}
      formInit={pages.books.formInit}
    >
      <BookFields />
    </ServiceEditor>
  )
}

export { BookCreate }
