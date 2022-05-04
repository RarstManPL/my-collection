import { RadioGroup } from "@headlessui/react"
import { useField } from "formik"

import { FormError } from "../"

import styles from "./InlineChooser.module.css"
import formStyles from "../Form.module.css"

export const InlineChooser = (props) => {
  const { options, name, disabled } = props
  const [field, meta] = useField(name)

  const handleChange = (value) => field.onChange({ target: { value, name } })

  return (
    <div className={formStyles["input-container"]}>
      <RadioGroup
        value={field.value}
        onChange={handleChange}
        className={styles.chooser}
        disabled={disabled}
      >
        {options.map((option) => (
          <RadioGroup.Option
            value={option.value}
            key={option.id}
            className={({ checked }) =>
              `${styles["chooser-option"]}${checked ? ` ${styles["option-checked"]}` : ""}`}>
            {option.text}
          </RadioGroup.Option>
        ))}
      </RadioGroup>

      {meta.touched && meta.error && <FormError>{meta.error}</FormError>}
    </div>
  )
}
