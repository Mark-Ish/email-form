import { Field } from "redux-form"
import styles from "./Inputs.module.css"

const InputCity = () => {
  return (
    <>
      <label className={styles.labelCity} htmlFor="city">
        City
      </label>
      <Field
        className={styles.fieldCity}
        placeholder="City*"
        name="city"
        component="input"
        type="text"
      />
    </>
  )
}

export default InputCity
