import { FormColumn, FormColumns, Input, Select } from "@modules/Form"
import { gameConstants } from "@constants"

export const GameFields = (props) => {
  const { disabled } = props

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
            disabled={disabled}
          />

          <Input
            label="Autor"
            name="author"
            type="text"
            placeholder="Techland"
            required={true}
            disabled={disabled}
          />

          <Input
            label="Okładka"
            name="cover"
            type="text"
            placeholder="https://imgur.com/"
            required={false}
            disabled={disabled}
          />
        </FormColumn>

        <FormColumn number={2}>
          <Input
            label="Nazwa użytkownika platformy"
            name="username"
            type="text"
            placeholder="myCreedo"
            required={false}
            disabled={disabled}
          />

          <Select
            options={gameConstants.platforms}
            label="Platforma"
            name="platform"
            disabled={disabled}
          />
        </FormColumn>
      </FormColumns>
    </>
  )
}
