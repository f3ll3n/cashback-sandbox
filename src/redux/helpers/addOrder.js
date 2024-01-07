export const addOrder = (state, payload) => {
    state.cash += 1;
    state.ordersHistory.push(payload);
    state.ordersCount = state.ordersHistory.length;
    state.ordersCurrent += 1;
    state.cash += payload.payment;
    state.operatingHours += payload.duration;
}