import { useState } from "react"
import { Listbox } from "@headlessui/react"
import { useField } from "formik"

import { FormError } from "../"

import styles from "./Select.module.css"
import formStyles from "../Form.module.css"

export const Select = (props) => {
  const { options, label, name, disabled } = props
  const [field, meta] = useField(name)
  const [choiceText, setChoiceText] = useState(
    options.find((option) => option.value === field.value)?.text)

  const handleChange = (value) => {
    field.onChange({ target: { value, name } })
    setChoiceText(options.find((option) => option.value === value)?.text)
  }

  return (
    <div className={formStyles["input-container"]}>
      <Listbox value={field.value} onChange={handleChange} disabled={disabled}>
        <Listbox.Label className={formStyles["field-label"]}>{label}</Listbox.Label><br />

        <Listbox.Button className={styles["select-button"]}>{choiceText}</Listbox.Button>
        <Listbox.Options className={styles["select-options"]}>
          {options.map((option) => (
            <Listbox.Option
              value={option.value}
              key={option.id}
              className={({ selected }) =>
                `${styles["select-option"]}${selected ? ` ${styles["option-selected"]}` : ""}`}
            >
              {option.text}
            </Listbox.Option>
          ))}
        </Listbox.Options>

        {meta.touched && meta.error && <FormError>{meta.error}</FormError>}
      </Listbox>
    </div>
  )
}
