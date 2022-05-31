import React from 'react';
import MainTabBar from './src/navigation/main_tab_bar';
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import { store } from './src/services/datastore.js';
import {StripeProvider} from "@stripe/stripe-react-native";


// disable really annoying in app warnings
LogBox.ignoreAllLogs();
const App = (props) => {
  return(
    <StripeProvider publishableKey='pk_test_51L2ihZH8XcWRx3ZXYWgTAHXAy2192jRAEl3EQh56T5hKA5GSJP2FieJ2erTBIfeRFdpLPj4ltd3b4Sk0aD82v77u00rzVM0x0i'>
    <Provider store={store}>
      <MainTabBar />
    </Provider>
    </StripeProvider>
  ); 
};


export default App;