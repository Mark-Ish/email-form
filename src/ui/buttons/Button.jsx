import styles from "./Button.module.css"

const Button = ({ children, type, handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.defaultBtn} type={type}>
      {children}
    </button>
  )
}

export default Button
