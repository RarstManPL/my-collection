import { useEffect, useState } from "react"
import { Listbox } from "@headlessui/react"
import { useField } from "formik"
import { Error } from "../"

import styles from "./Select.module.css"
import formStyles from "../Form.module.css"

export const Select = (props) => {
  const { options, label, name } = props
  const [field, meta] = useField(name)
  const [choice, setChoice] = useState(field.value !== "" ? field.value :
    options.find((option) => option.default)?.value)
  const [choiceText, setChoiceText] = useState(options.find((option) => option.default)?.text)

  const handleChange = (value) => {
    setChoice(value)
    setChoiceText(options.find((option) => option.value === value)?.text)
  }

  useEffect(() => field.onChange({ target: { value: choice, name } }), [name, choice, field])

  return (
    <div className={formStyles["input-container"]}>
      <Listbox value={choice} onChange={handleChange}>
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

        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Listbox>
    </div>
  )
}
