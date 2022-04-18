import { ServicePage } from "../../components/ServicePage"

const sortMethods = [
  { id: "all", text: "Wszystkie", default: true, value: null },
  { id: "current", text: "Bieżące" },
  { id: "pending", text: "W kolejce" },
  { id: "ended", text: "Ograne" }
]

const addButton = {
  text: "Dodaj nową grę"
}

const Games = () => {
  return (
    <ServicePage
      name="games"
      sortMethods={ sortMethods }
      addButton={ addButton } />
  )
}

export { Games }
