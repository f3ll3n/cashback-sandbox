export const addOrder = (state, payload) => {
    state.ordersTotal = state.ordersHistory.length + 1;
    state.cash += payload.payment;
    state.operatingHours += payload.duration;
}