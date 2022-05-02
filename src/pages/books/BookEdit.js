import { useParams } from "react-router-dom"

import { ServiceItemEdit, BookFields } from "../../components"
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
