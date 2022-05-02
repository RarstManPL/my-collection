import { useField } from "formik"
import { FormError, Label } from "../"

import styles from "./Input.module.css"
import formStyles from "../Form.module.css"

export const Input = (props) => {
  const { label, required, ...rest } = props
  const [field, meta] = useField(props);

  return (
    <div className={formStyles["input-container"]}>
      <Label htmlFor={props.id || props.name} required={required}>{label}</Label>
      <input className={styles["custom-input"]} {...field} {...rest} />
      {meta.touched && meta.error && <FormError>{meta.error}</FormError>}
    </div>
  )
}
