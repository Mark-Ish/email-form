import { Field } from "redux-form"
import styles from "./Inputs.module.css"

const InputEmail = () => {
  return (
    <>
      <label className={styles.labelEmail} htmlFor="email">
        Enter your Email
      </label>
      <Field
        className={styles.fieldEmail}
        placeholder="Email*"
        name="email"
        component="input"
        type="email"
      />
    </>
  )
}

export default InputEmail
