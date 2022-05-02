import { BookFields } from "@modules/Page"
import { ServiceEditor } from "@modules/Service"

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
