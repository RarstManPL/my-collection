import { useParams } from "react-router-dom"

const MovieDetails = () => {
  const { id } = useParams()

  return (
    <div>movie details {id}</div>
  )
}

const route = {
  routeProps: {
    key: "movieDetails",
    path: "/movies/:id",
  },
  component: MovieDetails,
}

export default route
