import * as db from '../services/datastore';


// keys for actiontypes
export const ActionTypes = {
    // CART MANAGEMENT
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    // USER MANAGEMENT
    CREATE_USER: "CREATE_USER",
    FETCH_USER: "FETCH_USER",
    // ORDER MANAGEMENT
    FETCH_ORDER: "FETCH_ORDER",
    SUBMIT_ORDER: "SUBMIT_ORDER",
    UPDATE_ORDER: "UPDATE_ORDER",
    // INVENTORY MANAGEMENT
    FETCH_ITEMS: "FETCH_ITEMS",
    FETCH_ITEM: "FETCH_ITEM",
    // FOR WHAT CATEGORY TO DISPLAY
    SET_CATEGORY: "SET_CATEGORY",
  };
  
  // CART MANAGEMENT
  
  export function addItem(item, quantity) { // edit the quantity of an item in the cart (if the item is new, adds to cart list)
    return {
      type: ActionTypes.ADD_ITEM,
      payload: {item, quantity},  
    };
  }
  
  export function setCategory(category){
    return {
      type: ActionTypes.SET_CATEGORY,
      payload: {category}
    }
  }

  // USER MANAGEMENT

  export function createUser(userfields) {
    return {
      type: ActionTypes.FETCH_USER,
      payload: {userfields}
    }
  }

  export function fetchUser(username, pass) {
    return {
      type: ActionTypes.FETCH_USER,
      payload: {username, pass}
    }
  }

  // ORDER MANAGEMENT

  export function submitOrder(orderDetails) {
    return {
      type: ActionTypes.FETCH_ORDER,
      payload: {orderDetails}
    }
  }

  export function fetchOrder(orderId) {
    return {
      type: ActionTypes.FETCH_ORDER,
      payload: {orderId}
    }
  }

  export function updateOrder(orderId, updates) {
    return {
      type: ActionTypes.UPDATE_ORDER,
      payload: {orderId, updates}
    }
  }

  // INVENTORY ACCESS

  export function fetchItems() {
    return(dispatch) => {
      db.fetchItems().then((response) => {
        dispatch({ type: ActionTypes.FETCH_ITEMS, payload: response });
      }).catch((error) => {
        console.log(error);
      })
    }
    // return {
    //   type: ActionTypes.FETCH_ITEMS,
    //   payload: {}
    // }
  }

