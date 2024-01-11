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
  // lateCount: 0,
//   lateCurrentCount: 0,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    completeOrder: (state, action) => {
        state.ordersHistory.push(action.payload.vacancy);
        addOrder(state, action.payload);
        calculateCashback(state);
    },
    completeNtd: (state) => {
      state.ntdCount += 1;
      calculateCashback(state)
    },
    completeLate: (state, action) => {
      state.ntdCount += 1;
      state.ordersHistory.push(action.payload.vacancy);
      state.ordersHistory.push(action.payload.vacancy);
      state.ordersHistory.push(action.payload.vacancy);
      addOrder(state, action.payload);
      addOrder(state, action.payload);
      addOrder(state, action.payload);
      
      calculateCashback(state)
      
    },
    clearAllData: (state) => {
      state.ordersHistory = [];
      state.cash = 0;
      state.operatingHours = 0;
      state.cashback = 0;
      state.cashbackPercent = 0;
      state.ordersTotal = 0;
      state.ntdCount = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { completeOrder, completeNtd, completeLate, clearAllData } = profileSlice.actions

export default profileSlice.reducer