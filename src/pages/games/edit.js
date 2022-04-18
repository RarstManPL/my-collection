import { useParams } from 'react-router-dom'

export default function GameEdit() {
  const { id } = useParams()

  return (
    <div>edit game {id}</div>
  )
}
