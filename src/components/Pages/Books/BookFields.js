import { Input } from "../../Form"

const BookFields = () => {
  return (
    <>
      <Input
        label="Tytuł"
        name="title"
        type="text"
        placeholder="Pomnik Cesarzowej Achai - Tom I"
        required={true}
      />

      <Input
        label="Autor"
        name="author"
        type="text"
        placeholder="Andrzej Ziemiański"
        required={true}
      />

      <Input
        label="Okładka"
        name="cover"
        type="text"
        placeholder="https://imgur.com/"
        required={false}
      />
    </>
  )
}

export { BookFields }
