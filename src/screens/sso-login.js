import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { createUser } from '../actions';
import { SERVER_URL } from '../Constants';

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      padding: 15,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  });

const validateST = (ticketedURL, navigation) => {
    fetch(ticketedURL,
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } 
    })
    .then(response => response.json())
    .then((data) => {
        console.log("server response:", data)
        if (data.succeeded == true) {
            createUser(data.user_id, data.user_info);
            
            navigation.navigate("Home");
        } else {
            console.log(data.msg);
        }
    })
    .catch((error) => console.log("error:", error));
}

export default function SSOLogin ({ navigation }) {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <WebView 
                source={{ uri: SERVER_URL }}
                onShouldStartLoadWithRequest={(request) => { 
                    console.log("onShouldStartLoadWithRequest:", request);

                    if (request.url.includes("?ticket")) {
                        console.log("ST url:", request.url)
                        
                        ticketedURL = request.url
                        console.log("ticketedURL:", ticketedURL)
                        validateST(ticketedURL, navigation);
                    }

                    else {
                        return true // continue loaading if service ticket is not included in the url
                    }
                }}
                startInLoadingState={true}
                onMessage={(event) => {
                    console.log("onMessage event:", event.nativeEvent, "onMessage data:", event.nativeEvent.data)
                }}
            />
        </SafeAreaView>
    )
}