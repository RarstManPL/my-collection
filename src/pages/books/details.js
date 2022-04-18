import { useParams } from 'react-router-dom'

export default function BookDetails() {
  const { id } = useParams()

  return (
    <div>book details {id}</div>
  )
}
