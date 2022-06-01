import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable , TextInput} from 'react-native';

function SignUp({ navigation }) {
  return(    
    <View style={styles.container}>
    <View style={styles.logoContainer}>
        <Text style={styles.logo1}> Welcome To </Text>
        <Text style={styles.logo2}> Dartmart</Text>
    </View>

    <View style = {styles.footer}>
        <View style={styles.modalContainer}>

        <Text style={styles.text1}>Sign Up A New Account</Text>

          <View style={styles.checkoutAsGuestSection}>
            <View style={styles.inputBox} >
                <TextInput placeholder="Name" placeholderTextColor='grey' color = 'white' justifyContent = 'center'/>
            </View>
            <View style={styles.inputBox} >
            <TextInput placeholder="Phone Number" placeholderTextColor='grey' color = 'white'/>
            </View>


            <Text style={styles.text1} marginBottom = '10'>Log In Credential</Text>
            <View style={styles.inputBox} >
              <TextInput placeholder="Email" placeholderTextColor='grey' color = 'white'/>
            </View>
            <View style={styles.inputBox} >
              <TextInput placeholder="Confirm Email" placeholderTextColor='grey' color = 'white'/>
            </View>
            <View style={styles.inputBox} >
              <TextInput placeholder="Password" placeholderTextColor='grey' color = 'white'/>
            </View>


          </View>

          <View style={styles.checkoutAsGuestSection}>
            <TouchableOpacity style={styles.guestButton} onPress={()=>navigation.navigate('SignUp')}>
              <Text style={styles.text3}>Create Account</Text>
            </TouchableOpacity>
          </View>

        </View>
    </View>
  </View>
)
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#BBDDBB'
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'    
  },
  logo1 : {
    fontSize: 24,
    fontWeight: 'semibold',
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
  inputBox : {
      width: 300,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 33,
      borderColor: 'white',
      borderWidth: 2,
      placeholderTextColor: 'white',
  },
  inputText : {
      placeholderTextColor : 'white',
      color: 'white',
  },
text1: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
},
text2: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'normal',
},
text3: {
  color: '#02604E',
  fontSize: 24,
  fontWeight: 'bold',
},
signInCredentialSection : {
  marginTop: 10,
},
checkoutAsGuestSection : {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
guestButton: {
  width: 250,
  height: 65,
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 12,
  backgroundColor:'whitesmoke',
  borderRadius: 25,
  borderColor: 'white',
  borderWidth: 3,
},
});

  
export default SignUp;
