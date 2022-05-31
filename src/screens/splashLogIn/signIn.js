import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable , TextInput} from 'react-native';

const SignIn = ({navigation}) => {
    return(    
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.logo1}> Welcome To </Text>
            <Text style={styles.logo2}> Dartmart</Text>
        </View>

        <View style = {styles.footer}>
            <View style={styles.modalContainer}>

            <Text style={styles.text1}>Sign In To Your Account</Text>

              <View style={styles.checkoutAsGuestSection}>
                <View style={styles.inputBox} >
                    <TextInput placeholder="Email" placeholderTextColor='white' color = 'white' justifyContent = 'center'/>
                </View>
                <View style={styles.inputBox} >
                <TextInput placeholder="Your Password" placeholderTextColor='white' color = 'white'/>
                </View>

                <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('SignUp')}>
                  <Text style={styles.text1} justifyContent='center' >Sign In</Text>
                </TouchableOpacity>

              </View>

              <View style={styles.checkoutAsGuestSection}>
                <Text style={styles.text2}>Don't Have An Account?</Text>
                <TouchableOpacity style={styles.signUpButton} onPress={()=>navigation.navigate('SignUp')}>
                  <Text style={styles.text1}>Sign Up</Text>
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
  checkoutAsGuestSection : {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    width: 200,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    opacity: 12,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 33,
    backgroundColor: '#01D177',
    borderColor: 'white',
    borderWidth: 3,
  },
  signUpButton: {
    width: 200,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    opacity: 12,
    borderRadius: 25,
    paddingVertical: 10,
    backgroundColor: '#02604E',
    paddingHorizontal: 33,
    borderColor: 'white',
    borderWidth: 3,
  },
  });

export default SignIn;
