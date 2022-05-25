import { ActionTypes } from '../actions';

const initialState = {
    cart: [],
}

const ItemReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
        let newList = [ ...state.cart ]
      state.cart.forEach((item) => {
          if(item.name === action.payload.item.name){
            newList.splice(newList.indexOf(item),1)
          }
      })
      return { ...state, cart: [...newList, action.payload] };
    default:
      return state;
  }
};

export default ItemReducer;