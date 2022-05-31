import { doc, setDoc, updateDoc, getDoc, getFirestore, getDocs, collection, query, where } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";


// FIREBASE CONFIGURATION

  // firebase config object
  const firebaseConfig = {
    apiKey: "AIzaSyBztmmLcSw6qyEq8SWpImxAjbJSXiZURN0",
    authDomain: "dartmart-20a22.firebaseapp.com",
    projectId: "dartmart-20a22",
    storageBucket: "dartmart-20a22.appspot.com",
    messagingSenderId: "523739133844",
    appId: "1:523739133844:web:6d12f59d68c1c280070181",
    measurementId: "G-BEH6MVE7K5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);


  // INVENTORY FUNCTIONS

  // Fetch all items for displaying product options in menu
  export async function fetchItems() { 
      const querySnapshot = await getDocs(collection(db, "items"));
      return(querySnapshot.docs.map(doc => doc.data()));
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     // console.log(doc.id, " => ", doc.data());
        // });
  }


  // Decrement the quantity of an item in the inventory (for when an item is ordered)
  export async function updateItemQuantity(itemId, quantityChange) {

    // fetch the data for the item being ordered
    const docRef = doc(db, "items", itemId);
    const docSnap = await getDoc(docRef);

    // if the item is found in the inventory, update quantity
    if (docSnap.exists()) {
        // fetch previous quantity
        const prevQuantity = docSnap.quantity;
        // calculate new quantity based on order information
        const newQuantity = prevQuantity - quantityChange;
        // update the quantity stored in the database
        await updateDoc(docRef, {
            quantity: newQuantity
        });
    // if the item is not found, console log that the item was not found
    } else {
        console.log("Item not found during getDoc");
    }
  }

  // USER FUNCTIONS

  // initialize a user in the databse
  export async function createUser(newUserId, data) {

    const usersRef = doc(db, "users");
    const userExistsQuery = query(usersRef, where("email", "==", data.email));
    const querySnapshot = await getDocs(userExistsQuery);

    if (!querySnapshot.exists()){
      await setDoc(doc(db, "users", newUserId), data);
    }
  }

  // update information about a user in the database
  export async function updateUser(userId, data) {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, {
        data
    });
  }

  // FUNCTIONS FOR ORDERS

  // initialize an order in the database
  export async function createOrder(newOrderId, data) {
    await setDoc(doc(db, "orders", newOrderId), data);
  }

  export async function fetchOrder(orderId, callback) {
    const docRef = doc(db, "items", orderId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        callback(docSnap.data());
      } else {
        console.log("Order not found during fetchOrder");
      }
      
  }

  // update the status of an order as it is being submitted and fulfilled
  export async function updateOrder(orderId, data) {
    const docRef = doc(db, "orders", orderId);
    await updateDoc(docRef, {
        data
    });
  }

  // Fetch all orders in the database
  // Returns a promise; data can be accessed w/ querySnapshot.docs.map(doc => doc.data())
  export async function fetchAllOrders() { 
    return getDocs(collection(db, "orders"));
  }

  // Fetch all orders in progress
  // Returns a promise; data can be accessed w/ querySnapshot.docs.map(doc => doc.data())
  export async function fetchInProgressOrders() { 
    const inProgressOrderQuery = query(collection(db, "orders"), where ('status', '==', 'in-progress'));
    return getDocs(inProgressOrderQuery);
  }

  // Fetch all orders for a certain deliverer
  // Returns a promise; data can be accessed w/ querySnapshot.docs.map(doc => doc.data())
  export async function fetchDeliveryOrders(deliveryID) { 
    deliveryOrderQuery = query(collection(db, "orders"), where ('deliverId', '==', deliveryID));
    return getDocs(deliveryOrderQuery);
  }

  // Fetch all orders for a certain customer
  // Returns a promise; data can be accessed w/ querySnapshot.docs.map(doc => doc.data())
  export async function fetchOrders(customer) {
    customerOrderQuery = query(collection(db, "orders"), where ('customerId', '==', customer)); 
    return getDocs(customerOrderQuery);
  }
