import { ActionTypes } from '../actions';

const initialState = {
  paymentConfirmed: false,
}

const PaymentReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PAYMENT_STATUS:
        return {paymentConfirmed: action.payload}
    default:
      return state;
  }
};

export default PaymentReducer;