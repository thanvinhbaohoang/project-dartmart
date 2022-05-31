import React from 'react';
import { Text, View, Dimensions, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homePage';
import Splash from '../screens/splash'
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import CartPage from '../screens/cartPage';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
};

const SearchTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>Search</Text></View>;
};

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        tabBarStyle:{
          height: windowHeight * .1,
          borderRadius: windowHeight * .05,
          backgroundColor: '#008F74',
          position: 'absolute'
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        headerStyle:{
          backgroundColor: '#BBDDBB',
          height: windowHeight * .15
        },
        headerTitleAlign: 'left',
        headerTitle: 'Dartmart',
        headerTitleStyle:{
          marginLeft: 30,
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerRight: () => (
          <TextInput placeholder='Search' style={{
            backgroundColor: 'white',
            width: 150,
            height: 30,
            borderRadius: 15,
            paddingLeft: 10,
            fontSize: 15
          }}/>
        ),
        headerRightContainerStyle: {
          paddingRight: 30
        }
      }}>
        {/* TEMPORARY SIGN IN NAVIGATION */}
        <Tab.Screen name="Splash" component={Splash} />
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
        {/* =============================================== */}
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Cart" component={CartPage} />
        <Tab.Screen name="Delivery" component={SearchTab} />
        <Tab.Screen name="Profile" component={SearchTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;
