import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem } from '../actions/index';

function ProfilePage(props){
    return (
        <View backgroundColor='red' style={styles.container}>

                <Text style={styles.featuredText}> {orderDetail.userName}</Text>
                <Text style={styles.text2}> {orderDetail.role}</Text>
                <View style={styles.buttonsSection}>
                    <TouchableOpacity>
                        <Text style={styles.text1}>Personal Info</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.text1}>Payment</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
        fontSize: 20,
        fontWeight: 'normal',
      },
    container: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        width: windowWidth,
        height:windowHeight,
        backgroundColor: '#02604E',
        borderRadius: 30,
    },
    featuredText: {
        marginTop:20,
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsSection : {
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const orderDetail = {
    userName : 'USER',
    role : "Customer",
    estimatedTime : '4:20 PM',
    orderNumber : '69',
}
export default connect(null, { addItem })(ProfilePage);