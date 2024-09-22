import React, { useState } from "react"
import styles from "./styles/Modal.module.css"
import Button from "../ui/buttons/Button"
import { useDispatch, useSelector } from "react-redux"
import { setActiveModal } from "../store/slices/modalSlice"
import validateEmail from "../utils/validateEmail"
import emailjs from "@emailjs/browser"

const Modal = ({ data }) => {
  const dispatch = useDispatch()
  const modalActive = useSelector((state) => state.modal.modalActive)
  const [currentValue, setCurrentValue] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleSubmit = (e) => {
    const templateParams = {
      message: `${data.firstName}, ${data.email}, ${data.city}, ${data.dateString}`,
    }

    if (validateEmail(currentValue)) {
      emailjs
        .send(
          "service_flypcce",
          "template_r6883ly",
          templateParams,
          "qFDaAjL6r43erXn2i"
        )
        .then((res) => {
          console.log(res)
          setCurrentValue("")
          setEmailError("")
        })
        .catch((error) => {
          console.error(error)
        })
      setEmailError("")
      setCurrentValue("")
    } else {
      setEmailError("Email is not correct!")
    }

    dispatch(setActiveModal())
  }

  const shadowClick = () => {
    dispatch(setActiveModal())
    setEmailError("")
  }

  const changeEmail = (e) => {
    setCurrentValue((v) => (v = e.target.value))
    if (!validateEmail(currentValue)) {
      setEmailError("Email is not correct!")
    } else {
      setEmailError("")
    }
  }

  return (
    <div
      className={modalActive ? styles.modalActive : styles.modal}
      onClick={shadowClick}
    >
      <div
        className={
          modalActive ? styles.modalContentActive : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        <form className={styles.formModal} onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">To whom do you want to send the data?</label>
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          <input
            value={currentValue}
            onChange={(e) => changeEmail(e)}
            className={styles.fieldEmailModal}
            placeholder="Email"
          ></input>

          <Button type="submit">Send</Button>
          <Button handleClick={shadowClick} type="button">
            Close
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Modal
