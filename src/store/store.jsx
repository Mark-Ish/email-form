import { configureStore } from "@reduxjs/toolkit"
import { reducer as formReducer } from "redux-form"
import modalReducer from "./slices/modalSlice"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
  },
})
