import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem, submitOrder } from '../actions/index';

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
        return sum;
    }

    const calcFees = () => {
        fees = Math.round((sum * .05 + 1.99) * 100) / 100;
        return fees;
    }
    return (
        <View backgroundColor='#02604E' style={{height: windowHeight * .9}}>
            {/* SCROLL VIEW FOR ITEMS IN CART */}
            <Text style={styles.featuredText}>Shopping Cart</Text>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.itemsContainer}>
                    {cart.map(({item, quantity}) => {
                        return (
                            <TouchableOpacity key={item.name} underlayColor="transparent" onPress={() => {setSelectedItem(item)}}>
                                <View style ={styles.itemContainer}>
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
                                                <Text style={styles.text1}>${item.cost * quantity}</Text>
                                            </View>
                                            <View style={styles.quantityContainer}>
                                                <TouchableOpacity style={styles.quantityButton} onPress={()=>props.addItem(item, -1)}>
                                                    <Text style={styles.quantitySymbol}>-</Text>
                                                </TouchableOpacity>    
                                                <Text style={styles.text1}>{quantity}</Text>
                                                <TouchableOpacity style={styles.quantityButton} onPress={()=>props.addItem(item, 1)}>
                                                    <Text style={styles.quantitySymbol}>+</Text>
                                                </TouchableOpacity> 
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            </TouchableOpacity>

                        )
                    })}
                </View>
            </ScrollView>
            <View style={styles.checkoutInfo}>
                <View>
                    <View>
                        <View style={styles.subtotal}>
                            <View style={styles.costLine}>
                                <Text style={styles.text2}>Cart total</Text>
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
                        <Text style={styles.text1}>Total</Text>
                        <Text style={styles.text1}>${sum + fees}</Text>
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
        textAlign: 'center',
        paddingTop: windowHeight * .05,
    },
    itemsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 18
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
        borderWidth:2,
        borderRadius: 18,
        justifyContent: 'center',
        width: windowWidth * 0.3,
        backgroundColor:'white',
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
    costAndQuantity : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    itemCostContainer: {
        borderWidth: 1, 
        borderColor: 'white', 
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
        position: 'absolute',
        bottom: 0,
        width: windowWidth,
        height: 300,
        backgroundColor: 'black',
        flexDirection: 'row',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        flexWrap: 'wrap',
        justifyContent: 'center',
        // marginBottom: windowWidth * .22,
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

export default connect(null, { addItem })(CartPage);