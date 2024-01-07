export const calculateCashback = (state) => {
    state.operatingHours = Math.floor(state.operatingHours / 30);
}