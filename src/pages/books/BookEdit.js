import { useParams } from "react-router-dom"
import { ServiceItemEdit } from "../../components/Service"
import { BookFields } from "../../components/Pages"
import { bookConstants } from "../../constatns"

export const BookEdit = () => {
  const { id } = useParams()

  return (
    <ServiceItemEdit
      collection="books"
      constants={bookConstants}
      id={id}
    >
      <BookFields />
    </ServiceItemEdit>
  )
}
