import Form from "./components/Form"
import styles from "./App.module.css"
import Heading from "./components/Heading"
import Modal from "./components/Modal"
import { createPortal } from "react-dom"
import { setActiveModal } from "./store/slices/modalSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

function App() {
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const m = new Date()
  const dateString =
    ("0" + m.getUTCDate()).slice(-2) +
    "/" +
    ("0" + (m.getUTCMonth() + 1)).slice(-2) +
    "/" +
    m.getUTCFullYear() +
    " " +
    ("0" + m.getHours()).slice(-2) +
    ":" +
    ("0" + m.getUTCMinutes()).slice(-2)

  const submit = (values) => {
    const objValues = { ...values, dateString: dateString }
    setData((obj) => (obj = objValues))
    dispatch(setActiveModal())
  }

  return (
    <div className={styles.App}>
      <div className={styles.Wrapper}>
        <Heading />
        <Form onSubmit={submit} />
      </div>
      {createPortal(
        <Modal dateString={dateString} data={data} />,
        document.body
      )}
    </div>
  )
}

export default App
