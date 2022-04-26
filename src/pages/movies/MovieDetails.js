import { useParams } from "react-router-dom"

export const MovieDetails = () => {
  const { id } = useParams()

  return (
    <div>movie details {id}</div>
  )
}
