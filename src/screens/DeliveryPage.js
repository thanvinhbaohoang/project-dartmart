import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem } from '../actions/index';

function DeliveryPage(props){
    return (
        <View backgroundColor='red' style={styles.container}>

                <Text style={styles.featuredText}>Order Confirmed</Text>
                <Text style={styles.text2}>Hey {orderDetail.userName}, Thanks For Your Purchase</Text>

            <View>
                <View style={styles.dividerLine}>
                    <Text style={styles.text1} justifyContent='center' ></Text>
                </View>
                <View style={styles.subtotal}>
                    <View style={styles.costLine}>

                    <View style={styles.orderInfoContainer}>
                        <View style={styles.orderNumberAndEstimateTime}>
                            <Text style={styles.text2} alignSelf='baseline'>Order Number</Text>
                            <Text style={styles.text2}>Estimated Time</Text>
                        </View>

                        <View style={styles.orderInfo}>
                            <Text style={styles.text1}>#{orderDetail.orderNumber}</Text>
                            <Text style={styles.text1}>{orderDetail.estimatedTime}</Text>
                        </View>
                        <View style={styles.dividerLine}></View>

                    </View>
                    </View>
                </View>
                        
                <TouchableOpacity style={styles.checkOutButton} onPress={()=>navigation.navigate('SignUp')}>
                  <Text style={styles.text1} justifyContent='center' >More Order</Text>
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
    featured:{
        width: "90%",
        height: windowHeight * .3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 20
    },
    featuredText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width: windowWidth,
        margin: windowWidth * .025,
        borderRadius: 8,
        height: windowWidth * .35,
        backgroundColor: 'green',
        padding: 10,
    },
    imageContainer:{
        borderColor: 'white',
        borderWidth:2,
        borderRadius: 18,
        justifyContent: 'center',
        width: windowWidth * 0.3,
    },
    itemInfoContainer:{
        justifyContent: 'space-between',
        width: windowWidth*.62,
        padding:5,
    },
    itemName: {
        color: 'white',
        fontSize: 24,
        height: 30,
        fontWeight: 'bold',
        alignSelf: 'baseline',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    orderInfoContainer:{

    },
    orderNumberAndEstimateTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth*0.9,
    },
    orderInfo :{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth*0.9,
    },
    costAndQuantity : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    itemCostContainer: {
        borderWidth: 4, 
        borderColor: 'red', 
        borderRadius: 22,
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },
    itemCost: {
        fontSize: 15,
        position: 'absolute',
        bottom: 13,
        left: 13
    },
    itemModal:{
        height: 350,
        width: windowWidth * .8,
        marginHorizontal: windowWidth * .1,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 30,
        alignItems:'center',
        marginBottom: windowHeight * .25,
        marginTop: windowHeight * .25,
    },
    quantityContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    quantityButton : {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        // borderColor: 'white',
        // borderWidth: 3,
        backgroundColor: 'white',
        margin: 5
        },
    quantitySymbol : {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    checkoutInfo : {
        width: 400,
        height: 300,
        backgroundColor: 'black',
        flexDirection: 'row',
        borderRadius: 18,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: windowWidth * .22,
        opacity: 0.95,
        padding: 20,
    },
    subtotal :{
        marginBottom: 20,
        padding: 10,
        width: windowWidth* 0.95,
    },  
    dividerLine : {
        backgroundColor: 'grey',
        width: windowWidth* 0.9,
        height: 3,
        borderRadius: 10,
        opacity: 0.5
    },
    costLine : {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    orderNumberContainer : {
        justifyContent: 'flex-start',
        alignItems:'baseline'
    },
    orderNumber : {
        alignSelf: 'baseline'
    },
    estimatedTimeContainer : {
    },
    estimatedTime : {
        alignSelf: 'baseline'
    },
    checkOutButton: {
        width: windowWidth*.9,
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        opacity: 12,
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 33,
        backgroundColor: '#01D177',
      },
});

const orderDetail = {
    userName : 'USER',
    estimatedTime : '4:20 PM',
    orderNumber : '69',
}
export default connect(null, { addItem })(DeliveryPage);