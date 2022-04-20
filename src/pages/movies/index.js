import { ServicePage } from "../../components/ServicePage"

const addButton = { text: "Dodaj nowy film" }

const sortMethods = [
  { id: "all", text: "Wszystkie", default: true, value: null },
  { id: "pending", text: "W kolejce", default: false, value: "pending" },
  { id: "ended", text: "Obejrzane", default: false, value: "pending" },
]

const Movies = () => {
  return (
    <ServicePage
      name="movies"
      addButton={addButton}
      sortMethods={sortMethods} />
  )
}

export { Movies }
