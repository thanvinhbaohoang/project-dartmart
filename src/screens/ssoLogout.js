import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { ROUTE_SSO_LOGOUT, SERVER_URL } from '../Constants';

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      padding: 15,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  });

export default function SSOLogout ({ navigation }) {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <WebView 
                source={{ uri: `${SERVER_URL}${ROUTE_SSO_LOGOUT}` }}
                startInLoadingState={true}
                onMessage={(event) => {
                    console.log("onMessage event:", event.nativeEvent, "onMessage data:", event.nativeEvent.data)
                }}
            />
            <View
                style={{
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    title="SSOLogin"
                    onPress={() => {
                        navigation.navigate("SSOLogin");
                    }}
                />
            </View>
        </SafeAreaView>
    )
}