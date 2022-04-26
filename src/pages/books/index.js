import { ServicePage } from "../../components/Service"
import { pages } from "../../constatns"

const Books = () => {
  return (
    <ServicePage
      name="books"
      addButton={pages.books.addButton}
      sortMethods={pages.books.sortMethods} />
  )
}

export { Books }
