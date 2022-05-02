import { ServicePage } from "../../components"
import { bookConstants } from "../../constatns"

export const BooksList = () => {
  return (
    <ServicePage
      name="books"
      addButton={bookConstants.addButton}
      sortMethods={bookConstants.sortMethods} />
  )
}
