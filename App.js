import React from 'react';
import MainTabBar from './src/navigation/main_tab_bar';
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Splash from './src/screens/splash';

import rootReducer from './src/reducers'

const store = configureStore({
  reducer: rootReducer
})
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import RootStackScreen from './src/screens/rootStackScreen';


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

// disable really annoying in app warnings
LogBox.ignoreAllLogs();
const App = (props) => {
  return(
    <Provider store={store}>
      <MainTabBar />
      {/* <Splash />  */}
      {/* <RootStackScreen /> */}
    </Provider>
  ); 
};


export default App;