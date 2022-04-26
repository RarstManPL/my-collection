import { useParams } from "react-router-dom"

export const MovieEdit = () => {
  const { id } = useParams()

  return (
    <div>edit movie {id}</div>
  )
}
