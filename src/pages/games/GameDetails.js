import { useParams } from "react-router-dom"

const GameDetails = () => {
  const { id } = useParams()

  return (
    <div>game details {id}</div>
  )
}

const route = {
  routeProps: {
    key: "gameDetails",
    path: "/games/:id",
  },
  component: GameDetails,
}

export default route
