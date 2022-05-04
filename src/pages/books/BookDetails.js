import { useParams } from "react-router-dom"

import { ServiceItemDetails } from "@modules/Service"
import { BookFields } from "@modules/Page"

import { bookConstants } from "@constants"

export const BookDetails = () => {
  const { id } = useParams()

  return (
    <ServiceItemDetails
      id={id}
      collection="books"
      constants={bookConstants}
    >
      <BookFields />
    </ServiceItemDetails>
  )
}

const route = {
  routeProps: {
    key: "bookDetails",
    path: "/books/:id",
  },
  component: BookDetails,
}

export default route
