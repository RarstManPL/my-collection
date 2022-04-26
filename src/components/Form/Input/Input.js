import { useField } from "formik"
import { Error, Label } from "../"

import styles from "./Input.module.css"

export const Input = (props) => {
  const { label, required, ...rest } = props
  const [field, meta] = useField(props);

  return (
    <div className={styles["input-container"]}>
      <Label htmlFor={props.id || props.name} required={required}>{label}</Label>
      <input className={styles["custom-input"]} {...field} {...rest} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </div>
  )
}
