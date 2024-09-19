import { Field } from "redux-form"
import styles from "./Inputs.module.css"

const InputName = () => {
  return (
    <>
      <label className={styles.labelName} htmlFor="firstName">
        Enter your first name
      </label>
      <Field
        className={styles.fieldName}
        placeholder="First Name*"
        name="firstName"
        component="input"
        type="text"
      />
    </>
  )
}

export default InputName
