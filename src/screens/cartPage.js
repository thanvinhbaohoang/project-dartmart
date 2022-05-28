import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem } from '../actions/index';

function CartPage(props){
    const cart = useSelector((state) => state.item.cart);

    const [modalVisible, setModalVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const [tempQuantity, setTempQuantity] = useState(1);

    useEffect(() => {
        setTempQuantity(1);
    }, [modalVisible])
    return (
        <View backgroundColor='#FFDD62'>
            {/* SCROLL VIEW FOR ITEMS IN CART */}
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.featuredText}>Shopping Cart</Text>

                <View style={styles.itemsContainer}>
                    {itemData.map((item) => {
                        return (
                            <TouchableOpacity underlayColor="transparent" onPress={() => {setSelectedItem(item)}}>
                                <View style={styles.itemContainer}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemCost}>{item.cost}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <View style={styles.checkoutInfo}>
                <View>
                    <View>
                        <View style={styles.subtotal}>
                            <View style={styles.costLine}>
                                <Text style={styles.text2}>Sign Up</Text>
                                <Text style={styles.text2}>$69</Text>
                            </View>
                            <View style={styles.costLine}>
                                <Text style={styles.text2}>Tax & Fees</Text>
                                <Text style={styles.text2}>$31</Text>
                            </View>
                            <View style={styles.costLine}>
                                <Text style={styles.text2}>Tips</Text>
                                <Text style={styles.text2}>$0</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View style={styles.dividerLine}>
                    <Text style={styles.text1} justifyContent='center' ></Text>
                </View>
                <View style={styles.subtotal}>
                    <View style={styles.costLine}>
                        <Text style={styles.text1}>Total</Text>
                        <Text style={styles.text1}>$100</Text>
                    </View>
                </View>
                        
                <TouchableOpacity style={styles.checkOutButton} onPress={()=>navigation.navigate('SignUp')}>
                  <Text style={styles.text1} justifyContent='center' >Check Out</Text>
                </TouchableOpacity>
            </View>
            
            </ScrollView>
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
        width: windowWidth,
        margin: windowWidth * .025,
        borderRadius: 8,
        height: windowWidth * .35,
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
    },
    itemName: {
        fontSize: 20,
        position: 'absolute',
        top: 10,
        right: 15,
        fontWeight: 'bold',
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
        justifyContent: 'space-around',
        width: '100%'
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
        opacity: 0.9,
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

const itemData = [
    {
        name: 'test1',
        cost: '2.99',
    },
    {
        name: 'test2',
        cost: '4.99',
    },
    {
        name: 'test1',
        cost: '2.99',
    },
    {
        name: 'test2',
        cost: '4.99',
    },
    {
        name: 'test1',
        cost: '2.99',
    },
]
export default connect(null, { addItem })(CartPage);