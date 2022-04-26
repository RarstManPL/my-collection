import { gameConstants } from "../../../constatns"
import { FormColumn, FormColumns, Input, Select } from "../../Form"

export const GameFields = () => {
  return (
    <>
      <FormColumns amount={2}>
        <FormColumn number={1}>
          <Input
            label="Tytuł"
            name="title"
            type="text"
            placeholder="Dying Light 2"
            required={true}
          />

          <Input
            label="Autor"
            name="author"
            type="text"
            placeholder="Techland"
            required={true}
          />

          <Input
            label="Okładka"
            name="cover"
            type="text"
            placeholder="https://imgur.com/"
            required={false}
          />
        </FormColumn>

        <FormColumn number={2}>
          <Input
            label="Nazwa użytkownika platformy"
            name="username"
            type="text"
            placeholder="myCreedo"
            required={false}
          />

          <Select
            options={gameConstants.platforms}
            label="Platforma"
            name="platform" />
        </FormColumn>
      </FormColumns>
    </>
  )
}
