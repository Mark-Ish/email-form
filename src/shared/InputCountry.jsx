import { Field } from "redux-form"
import styles from "./Inputs.module.css"

const InputCountry = () => {
  return (
    <>
      <label className={styles.labelCountry} htmlFor="country">
        Country
      </label>
      <Field
        className={styles.fieldCountry}
        placeholder="Country*"
        name="country"
        component="input"
        type="text"
      />
    </>
  )
}

export default InputCountry
