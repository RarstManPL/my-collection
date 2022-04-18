import { useParams } from 'react-router-dom'

export default function GameDetails() {
  const { id } = useParams()

  return (
    <div>game details { id }</div>
  )
}
  