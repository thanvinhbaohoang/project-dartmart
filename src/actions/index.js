// keys for actiontypes
export const ActionTypes = {
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    FETCH_USER: "FETCH_USER",
  };
  
  
  export function addItem(item, quantity) { // edit the quantity of an item in the cart (if the item is new, adds to cart list)
    return {
      type: ActionTypes.ADD_ITEM,
      payload: {item, quantity},  
    };
  }


