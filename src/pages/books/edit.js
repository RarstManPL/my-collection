import { useParams } from 'react-router-dom'

export default function BookEdit() {
  const { id } = useParams()

  return (
    <div>edit book { id }</div>
  )
}
  