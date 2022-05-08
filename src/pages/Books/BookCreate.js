import { BookFields } from "@modules/Page"
import { ServiceEditor } from "@modules/Service"

import { bookConstants } from "@constants"

const BookCreate = () => {
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

const route = {
  routeProps: {
    key: "createBook",
    path: "/books/create",
  },
  component: BookCreate,
}

export default route
