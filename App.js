import 'react-native-gesture-handler';
import React from 'react';
import MainTabBar from './src/navigation/main_tab_bar';
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/reducers';


// disable really annoying in app warnings
LogBox.ignoreAllLogs();
const store = configureStore({
  reducer: rootReducer
})
function App(props){
  return(
    <Provider store={store}>
      <MainTabBar />
    </Provider>
  ); 
};


export default App;