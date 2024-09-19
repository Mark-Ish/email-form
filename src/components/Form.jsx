import { reduxForm } from "redux-form"
import InputAddress from "../shared/InputAddress"
import InputName from "../shared/InputName"
import InputEmail from "../shared/InputEmail"
import InputBio from "../shared/InputBio"
import InputCountry from "../shared/InputCountry"
import InputCity from "../shared/InputCity"
import styles from "./styles/Form.module.css"
import FooterForm from "./FooterForm"
import { Stripe } from "../ui/stripe/Stripe"

let Form = (props) => {
  const { handleSubmit } = props

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.inputName}>
            <InputName />
          </div>
          <div className={styles.inputEmail}>
            <InputEmail />
          </div>
          <div className={styles.inputBio}>
            <InputBio />
          </div>
          <div className={styles.formStripe}>
            <Stripe />
          </div>
          <div className={styles.inputCountry}>
            <InputCountry />
          </div>
          <div className={styles.inputCity}>
            <InputCity />
          </div>
          <div className={styles.inputAddress}>
            <InputAddress />
          </div>
          <div className={styles.footerForm}>
            <FooterForm />
          </div>
        </div>
      </form>
    </>
  )
}

Form = reduxForm({ form: "formSave" })(Form)

export default Form
