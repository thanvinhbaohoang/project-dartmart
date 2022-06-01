import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem, submitOrder, removeItem } from '../actions/index';

function CartPage(props){
    const cart = useSelector((state) => state.item.cart);

    const [modalVisible, setModalVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const [tempQuantity, setTempQuantity] = useState(1);
    var sum = 0;
    var fees = 0;
    useEffect(() => {
        setTempQuantity(1);
    }, [modalVisible])


    const calcCartSum = () => {
        sum = 0;
        cart.forEach(({item, quantity}) => {
            sum += quantity * item.cost;
        })
        return Math.round(sum * 100) / 100;
    }

    const calcFees = () => {
        fees = Math.round((sum * .05 + 1.99) * 100) / 100;
        return fees;
    }
    return (
        <View backgroundColor='#02604E' style={{height: windowHeight * .9}}>
            {/* SCROLL VIEW FOR ITEMS IN CART */}
            <Text style={styles.featuredText}>Shopping Cart</Text>
            <ScrollView contentContainerStyle={styles.itemsContainer}>
                {/* <View style={styles.itemsContainer}> */}
                    {cart.map(({item, quantity}) => {
                        return (
                            <View key={item.name} style={styles.itemContainer}>
                                {/* <View style={styles.imageContainer}>
                                    <
                                </View> */}
                                <View style={styles.imageContainer}>
                                    <Image source={{uri: item.imageURL}} style={styles.image} />
                                </View>
                                <View style={styles.itemInfoContainer}>
                                    <Text style={styles.itemName}>{item.name}</Text>


                                    <View style= {styles.costAndQuantity}>
                                        <View style = {styles.itemCostContainer}>
                                            <Text style={styles.itemCost}>${item.cost * quantity}</Text>
                                        </View>
                                        <View style={styles.quantityContainer}>
                                            <TouchableOpacity style={styles.quantityButton} onPress={()=> {if(quantity > 0) props.addItem(item, -1)}}>
                                                <Text style={styles.quantitySymbol}>-</Text>
                                            </TouchableOpacity>    
                                            <Text style={styles.text1}>{quantity}</Text>
                                            <TouchableOpacity style={styles.quantityButton} onPress={()=>props.addItem(item, 1)}>
                                                <Text style={styles.quantitySymbol}>+</Text>
                                            </TouchableOpacity> 
                                        </View>
                                    </View>
                                </View>
                                <Pressable style={{position: 'absolute', top: 10, right: 10}} onPress={() => {props.removeItem(item)}}>
                                    <Text style={styles.removeItemText}>x</Text>
                                </Pressable>
                            </View>
                        )
                    })}
                {/* </View> */}
            </ScrollView>

            <View style={styles.checkoutInfo}>
                <View>
                    <View>
                        <View style={styles.subtotal}>
                            <View style={styles.costLine}>
                                <Text style={styles.text2}>Cart Total</Text>
                                <Text style={styles.text2}>${calcCartSum()}</Text>
                            </View>
                            <View style={styles.costLine}>
                                <Text style={styles.text2}>Tax & Fees</Text>
                                <Text style={styles.text2}>${calcFees()}</Text>
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
                        <Text style={styles.text2}>Total</Text>
                        <Text style={styles.text2}>${Math.round((sum + fees) * 100) / 100}</Text>
                    </View>
                </View>
                        
                <TouchableOpacity style={styles.checkOutButton} onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.text1} justifyContent='center' >Check Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    text1: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        color: 'black',
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
    featuredText: {
        color: 'white',
        fontSize: 30,
        paddingBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: windowHeight * .05,
    },
    itemsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
        paddingBottom: 30,
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 18
    },  
    itemContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width: windowWidth * .95,
        margin: windowWidth * .025,
        borderRadius: 10,
        height: windowWidth * .35,
        backgroundColor: '#BBDDBB',
        padding: 10,
    },
    imageContainer:{
        borderRadius: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        width: windowWidth * .25,
        height: windowWidth * .25,
        backgroundColor:'white',
    },
    itemInfoContainer:{
        // alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: windowWidth * .7 - 20,
    },
    itemName: {
        alignSelf: 'flex-start',
        color: 'black',
        fontSize: 18,
        height: 45,
        padding: 10,
        fontWeight: 'bold',
        // alignSelf: 'baseline',
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: 'hidden'
    },
    costAndQuantity : {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: '100%',
        // alignItems:'flex-end',
        justifyContent: 'space-between'
    },
    itemCostContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    itemCost: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#02604E',
        fontWeight: 'bold',
    },
    removeItemText:{
        fontSize: 25, 
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
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },
    quantityButton : {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
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
        width: windowWidth,
        borderRadius: 22,
        padding: 20,
        height: 220,
        paddingTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        opacity: 0.9,
    },
    subtotal :{
        marginBottom: 20,
        paddingLeft: 10,
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
        alignContent: 'center',
        justifyContent: 'center',
        opacity: 12,
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 33,
        backgroundColor: '#BBDDBB',
      },
});

export default connect(null, { addItem, removeItem })(CartPage);