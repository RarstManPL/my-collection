import { BookFields, ServiceEditor } from "../../components"
import { bookConstants } from "../../constants"

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
