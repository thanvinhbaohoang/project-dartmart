// import * as db from './services/datastore';


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
    FETCH_ITEM: "FETCH_ITEM"
  };
  
  // CART MANAGEMENT
  
  export function addItem(item, quantity) { // edit the quantity of an item in the cart (if the item is new, adds to cart list)
    return {
      type: ActionTypes.ADD_ITEM,
      payload: {item, quantity},  
    };
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
    return {
      type: ActionTypes.UPDATE_ORDER,
      payload: {}
    }
  }

