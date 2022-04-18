import { ServicePage } from "../../components/ServicePage"

const sortMethods = [
  { id: "all", text: "Wszystkie", default: true, value: null },
  { id: "current", text: "Bieżące" },
  { id: "pending", text: "W kolejce" },
  { id: "ended", text: "Przeczytane" },
]

const addButton = {
  text: "Dodaj nową książkę",
}

const Books = () => {
  return (
    <ServicePage
      name="books"
      sortMethods={sortMethods}
      addButton={addButton} />
  )
}

export { Books }
