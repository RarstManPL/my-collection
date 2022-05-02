import { ServicePage } from "../../components"
import { bookConstants } from "../../constants"

export const BooksList = () => {
  return (
    <ServicePage
      name="books"
      addButton={bookConstants.addButton}
      sortMethods={bookConstants.sortMethods} />
  )
}
