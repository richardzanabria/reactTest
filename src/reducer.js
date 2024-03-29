import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contactMail: "",
  shippingAddr: {
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNum: ""
  },
  billingAddr: {
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNum: ""
  }
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContactMail: (state, action) => {
      state.contactMail = action.payload
    },
    updateContactMail: (state, action) => {
      state.contactMail = action.payload
    },
    addShippingAddr: (state, action) => {
      state.shippingAddr = {...state.shippingAddr, ...action.payload}
    },
    addBillingAddr: (state, action) => {
      state.billingAddr = {...state.billingAddr, ...action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { addContactMail, updateContactMail, addShippingAddr, addBillingAddr } = contactSlice.actions

export default contactSlice.reducer