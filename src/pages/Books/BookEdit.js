import { useParams } from "react-router-dom"

import { BookFields } from "@modules/Page"
import { ServiceItemEdit } from "@modules/Service"

import { bookConstants } from "@constants"

const BookEdit = () => {
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

const route = {
  routeProps: {
    key: "editBook",
    path: "/books/edit/:id",
  },
  component: BookEdit,
}

export default route
