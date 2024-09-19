import { Field } from "redux-form"
import styles from "./Inputs.module.css"

const InputAddress = () => {
  return (
    <>
      <label className={styles.labelAddress} htmlFor="address">
        Enter your address
      </label>
      <Field
        className={styles.fieldAddress}
        placeholder="Address*"
        name="address"
        component="input"
        type="text"
      />
    </>
  )
}

export default InputAddress
