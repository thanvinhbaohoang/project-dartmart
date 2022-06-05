import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable } from 'react-native';
import SSOLogin from '../ssoLogin';

const Splash  = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.logo1}> Welcome To </Text>
            <Text style={styles.logo2}> Dartmart</Text>
        </View>

        <View style = {styles.footer}>
            <View style={styles.modalContainer}>

              <TouchableOpacity onPress={()=>navigation.navigate('SSOLogin')}>
                  <Text style={styles.text1}>Sign In To Your Account</Text>
              </TouchableOpacity>

              <View style={styles.checkoutAsGuestSection}>
                <Text style={styles.text2}>Don't Have An Account?</Text>
                <TouchableOpacity style={styles.guestButton} onPress={()=>navigation.navigate('SSOLogin')}>
                  <Text style={styles.text1}>Sign Up</Text>
                </TouchableOpacity>
              </View>

            </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#BBDDBB'
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  logo1 : {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo2 : {
    fontSize: 48,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    backgroundColor: '#02604E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  modalContainer : {
    justifyContent: 'center',
    alignItems: 'center'
  },
text1: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
},
text2: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'normal',
},
checkoutAsGuestSection : {
  marginTop: 30,
  alignItems: 'center',
  justifyContent: 'center',
},
guestButton: {
  marginTop: 10,
  alignContent: 'center',
  justifyContent: 'center',
  opacity: 12,
  borderRadius: 18,
  paddingVertical: 10,
  paddingHorizontal: 33,
  borderColor: 'white',
  borderWidth: 3,
},
});

export default Splash;
