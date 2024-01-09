import { createSlice } from '@reduxjs/toolkit'
import { addOrder } from './helpers/addOrder';
import { calculateCashback } from './helpers/calculateCashback';
const initialState = {
  ordersHistory: [],
  cash: 0,
//   currentCash: 0,
  operatingHours: 0,
//   operationgHoursCurrent: 0,
  cashback: 0,
//   cashbackCurrent: 0,
  cashbackPercent: 0,
  ordersTotal: 0,
//   ordersCurrent: 0,
  ntdCount: 0,
//   ntdCurrentCount: 0,
  lateCount: 0,
//   lateCurrentCount: 0,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    completeOrder: (state, action) => {
        addOrder(state, action.payload);
        calculateCashback(state);
        state.ordersHistory.push(action.payload.vacancy);
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { completeOrder, decrement, incrementByAmount } = profileSlice.actions

export default profileSlice.reducer