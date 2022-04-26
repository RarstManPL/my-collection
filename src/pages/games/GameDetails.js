import { useParams } from "react-router-dom"

export const GameDetails = () => {
  const { id } = useParams()

  return (
    <div>game details {id}</div>
  )
}
