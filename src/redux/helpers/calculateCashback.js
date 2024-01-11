export const calculateCashback = (state) => {
    let cashback = Math.floor(state.operatingHours / 30);
    if(cashback > 10){
        cashback = 10;
    }
    console.log(state.ntdCount)
    if(state.ntdCount < 3){
        state.cashbackPercent = cashback;
        state.cashback = Math.round(state.cash / 100 * state.cashbackPercent);
    }
    else {
        state.cashbackPercent = 0;
        state.cashback = 0;
    }
}