import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homePage';
import Splash from '../screens/splashLogIn/splash'
import CartPage from '../screens/cartPage';
import SSOLogin from '../screens/ssoLogin';
import Shop from '../screens/shop';
import DeliveryPage from '../screens/DeliveryPage';
import ProfilePage from '../screens/profilePage';
import SSOLogout from '../screens/ssoLogout';
import DriverView from '../screens/DriverView';
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AboutTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
};

const SearchTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('SSOLogout')}
    >
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green'
      }}
      >Logout</Text>
    </TouchableOpacity>
    </View>;
};

const Tab = createBottomTabNavigator();

function MainTabBar(props){

  const logout = () => {
    props.navigation.navigate("Logout");
  }
  return (
      <Tab.Navigator 
      screenOptions={{
        tabBarStyle:{
          height: windowHeight * .1,
          backgroundColor: '#02604E',
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
      }}>
        {/* TEMPORARY SIGN IN NAVIGATION */}
        {/* <Tab.Screen name="Splash" component={Splash} /> */}
        {/* <Tab.Screen name="SignIn" component={SignIn} /> */}
        {/* <Tab.Screen name="SignUp" component={SignUp} /> */}
        {/* <Tab.Screen name="SSOLogin" component={SSOLogin} /> */}
        {/* =============================================== */}
        {/* <Tab.Screen name="Home" options={{headerShown: false}} component={Shop} />
        <Tab.Screen name="Cart" options={{headerShown: false}} component={CartPage} />
        <Tab.Screen name="Delivery" component={DeliveryPage} />
        <Tab.Screen name="Profile" component={ProfilePage} initialParams={{logout: logout}}/>
        <Tab.Screen name="Driver" component={DriverView} /> */}

        <Tab.Screen name="Home" component={Shop}  options={{headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (  <Ionicons name="home" color={color} size={size} />),}}/>   
        <Tab.Screen name="Cart" component={CartPage}  options={{headerShown: false, tabBarLabel: 'Cart', tabBarIcon: ({ color, size }) => (  <Ionicons name="cart" color={color} size={size} />),}}/>        
        <Tab.Screen name="Delivery" component={DeliveryPage}  options={{ tabBarLabel: 'Delivery', tabBarIcon: ({ color, size }) => (  <Ionicons name="bookmarks-outline" color={color} size={size} />),}}/>        
        <Tab.Screen name="Profile" component={ProfilePage} initialParams={{logout: logout}}  options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (  <Ionicons name="person-circle-outline" color={color} size={size} />),}}/>        
        <Tab.Screen name="Driver" component={DriverView}  options={{ tabBarLabel: 'Driver', tabBarIcon: ({ color, size }) => (  <Ionicons name="bicycle-outline" color={color} size={size} />),}}/>   
        
      </Tab.Navigator>
  );
};

export default MainTabBar;
