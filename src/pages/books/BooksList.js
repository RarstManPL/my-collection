import { ServicePage } from "../../components/Service"
import { bookConstants } from "../../constatns"

export const BooksList = () => {
  return (
    <ServicePage
      name="books"
      addButton={bookConstants.addButton}
      sortMethods={bookConstants.sortMethods} />
  )
}
