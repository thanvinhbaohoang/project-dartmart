import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Modal, Pressable, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem, fetchItems } from '../actions/index';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './homePage'
import CategoryPage from './categoryPage';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

function Shop(props){

  let [themeFontLoad] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!themeFontLoad) {
    // (deprecated) prevent app from displaying without the theme font loaded in
    return <AppLoading />;
  }

    return (
        <Stack.Navigator
        screenOptions={{
            tabBarStyle:{
              height: windowHeight * .1,
              borderTopRightRadius: windowHeight * .05,
              borderTopLeftRadius: windowHeight * .05,
              backgroundColor: '#008F74',
              position: 'absolute'
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            headerStyle:{
              backgroundColor: '#BBDDBB',
              height: windowHeight * .15
            },
            gestureEnabled: false,
            headerTitleAlign: 'left',
            headerTitle: 'Dartmart',
            headerTitleStyle:{
              marginLeft: 30,
              fontSize: 30,
              fontWeight: 'bold',
              color: '#02604E',
              fontFamily: 'Poppins',
            },
          }}>
            <Stack.Screen name="Shop" component={HomePage} options={{headerLeft: () => null}} />
            <Stack.Screen name="Category" component={CategoryPage} />
        </Stack.Navigator>
    );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Shop;