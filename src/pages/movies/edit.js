import { useParams } from 'react-router-dom'

export default function MovieEdit() {
  const { id } = useParams()

  return (
    <div>edit movie {id}</div>
  )
}
