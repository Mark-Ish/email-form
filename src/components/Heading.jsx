import { Stripe } from "../ui/stripe/Stripe"
import styles from "./styles/Heading.module.css"

const Heading = () => {
  return (
    <>
      <div>
        <h6 className={styles.mainTitle}>Change your private information</h6>
        <h6 className={styles.subTitle}>
          Please be informed that we do not share any sensitive information such
          as your bank card data with any third party agencies and companies.
          Please read our
          <a href="https://www.google.ru/?hl=ru"> terms of use </a>
          to be informed how we manage your private data.
        </h6>
      </div>

      <div className={styles.headingStripe}>
        <Stripe />
      </div>
    </>
  )
}

export default Heading
