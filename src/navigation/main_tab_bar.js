import React, { useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartPage from '../screens/cartPage';
import Shop from '../screens/shop';
import DeliveryPage from '../screens/DeliveryPage';
import ProfilePage from '../screens/profilePage';
import DriverView from '../screens/DriverView';
import { Ionicons } from "@expo/vector-icons";
import { connect, useSelector } from 'react-redux';
import { fetchOrders } from '../actions/index';
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
  useEffect(() => {
    props.fetchOrders();
  },[])
  const user = useSelector((state) => state.user.user)
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

        <Tab.Screen name="Home" component={Shop}  options={{headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (  <Ionicons name="home" color={color} size={size} />),}}/>   
        <Tab.Screen name="Cart" component={CartPage}  options={{headerShown: false, tabBarLabel: 'Cart', tabBarIcon: ({ color, size }) => (  <Ionicons name="cart" color={color} size={size} />),}}/>        
        <Tab.Screen name="Delivery" component={DeliveryPage}  options={{ tabBarLabel: 'Delivery', tabBarIcon: ({ color, size }) => (  <Ionicons name="bookmarks-outline" color={color} size={size} />),}}/>        
        <Tab.Screen name="Profile" component={ProfilePage} initialParams={{logout: logout}}  options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (  <Ionicons name="person-circle-outline" color={color} size={size} />),}}/>        
        {user.isDriver === true ? <Tab.Screen name="Driver" component={DriverView}  options={{ tabBarLabel: 'Driver', tabBarIcon: ({ color, size }) => (  <Ionicons name="bicycle-outline" color={color} size={size} />),}}/> : null } 
        
      </Tab.Navigator>
  );
};

export default connect(null, { fetchOrders })(MainTabBar);
