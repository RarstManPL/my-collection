import { ServicePage } from "../../components/ServicePage"

const sortMethods = [
  { id: "all", text: "Wszystkie", default: true, value: null },
  { id: "pending", text: "W kolejce"},
  { id: "ended", text: "Obejrzane" },
]

const addButton = {
  text: "Dodaj nowy film",
}

const Movies = () => {
  return (
    <ServicePage
      name="movies"
      sortMethods={sortMethods}
      addButton={addButton} />
  )
}

export { Movies }
