export const addOrder = (state, payload) => {
        state.ordersTotal = state.ordersHistory.length;
        state.cash += payload.payment;
        state.operatingHours += payload.duration;
}