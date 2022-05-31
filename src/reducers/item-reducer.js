import { ActionTypes } from '../actions';

const initialState = {
    cart: [],
    allItems: [],
    category: "",
}

const ItemReducer = (state = initialState,  action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS: 
      return { ...state, allItems: action.payload }
    case ActionTypes.ADD_ITEM:
        let newList = [ ...state.cart ]
      state.cart.forEach((item) => {
          if(item.item.name === action.payload.item.name){
            newList.splice(newList.indexOf(item),1)
          }
      })
      return { ...state, cart: [...newList, action.payload] };
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload.category }
    default:
      return state;
  }
};

export default ItemReducer;