import { ServicePage } from "@modules/Service"
import { bookConstants } from "@constants"

const BooksList = () => {
  return (
    <ServicePage
      name="books"
      addButton={bookConstants.addButton}
      sortMethods={bookConstants.sortMethods} />
  )
}

const route = {
  routeProps: {
    key: "books",
    path: "/books",
  },
  component: BooksList,
}

export default route
