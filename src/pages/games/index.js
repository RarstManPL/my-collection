import { ServicePage } from "../../components/ServicePage"

const addButton = { text: "Dodaj nową grę" }

const sortMethods = [
  { id: "all", text: "Wszystkie", default: true, value: null },
  { id: "current", text: "Bieżące", default: false, value: "current" },
  { id: "pending", text: "W kolejce", default: false, value: "pending" },
  { id: "ended", text: "Ograne", default: false, value: "ended" },
]

const Games = () => {
  return (
    <ServicePage
      name="games"
      addButton={addButton}
      sortMethods={sortMethods} />
  )
}

export { Games }
