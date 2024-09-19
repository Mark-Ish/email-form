import { Field } from "redux-form"
import styles from "./Inputs.module.css"

const InputBio = () => {
  return (
    <>
      <label className={styles.labelBio} htmlFor="bio">
        Bio
      </label>
      <Field
        className={styles.fieldBio}
        placeholder="Bio"
        name="bio"
        component="textarea"
        type="text"
      />
    </>
  )
}

export default InputBio
