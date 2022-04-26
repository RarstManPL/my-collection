import { useParams } from "react-router-dom"

export const BookDetails = () => {
  const { id } = useParams()

  return (
    <div>book details {id}</div>
  )
}
