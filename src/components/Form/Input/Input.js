import { useField } from "formik"
import { Error, Label } from "../"

import styles from "./Input.module.css"

const Input = (props) => {
  const { label, required, ...props_ } = props
  const [field, meta] = useField(props);

  return (
    <div className={styles["input-container"]}>
      <Label htmlFor={props.id || props.name} required={required}>{label}</Label>
      <input className={styles["custom-input"]} {...field} {...props_} />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </div>
  );
};

export { Input }
