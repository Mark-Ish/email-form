import Button from "../ui/buttons/Button"
import styles from "./styles/FooterForm.module.css"

const FooterForm = () => {
  return (
    <>
      <h6 className={styles.h6FooterForm}>
        You may also consider to update your
        <a href="https://www.google.ru/?hl=ru"> private information.</a>
      </h6>
      <Button type="submit">Save</Button>
    </>
  )
}

export default FooterForm
