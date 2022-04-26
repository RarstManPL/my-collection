import { BookFields } from "../../components/Pages"
import { ServiceEditor } from "../../components/Service"
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
