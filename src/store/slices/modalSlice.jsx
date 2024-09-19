import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modalActive: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setActiveModal: (state) => {
      state.modalActive = !state.modalActive
    },
  },
})

export const { setActiveModal } = modalSlice.actions
export default modalSlice.reducer
