import { ServicePage } from "../../components/ServicePage"

const addButton = { text: "Dodaj nową książkę" }

const sortMethods = [
  { id: "all", text: "Wszystkie", default: true, value: null },
  { id: "current", text: "Bieżące", default: false, value: "current" },
  { id: "pending", text: "W kolejce", default: false, value: "pending" },
  { id: "ended", text: "Przeczytane", default: false, value: "ended" },
]

const Books = () => {
  return (
    <ServicePage
      name="books"
      addButton={addButton}
      sortMethods={sortMethods} />
  )
}

export { Books }
