import { Input } from "../../Form"

export const MovieFields = () => {
  return (
    <>
      <Input
        label="Tytuł"
        name="title"
        type="text"
        placeholder="Straszny film 5"
        required={true}
      />

      <Input
        label="Rok"
        name="year"
        type="text"
        placeholder="2005"
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
