import { useParams } from "react-router-dom"

export const GameEdit = () => {
  const { id } = useParams()

  return (
    <div>edit game {id}</div>
  )
}
