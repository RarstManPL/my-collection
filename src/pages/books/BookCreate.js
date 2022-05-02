import { BookFields, ServiceEditor } from "../../components"
import { bookConstants } from "../../constatns"

export const BookCreate = () => {
  return (
    <ServiceEditor
      collection="books"
      categories={bookConstants.sortMethods}
      addButton={bookConstants.addButton}
      formInit={bookConstants.formInit}
    >
      <BookFields />
    </ServiceEditor>
  )
}
