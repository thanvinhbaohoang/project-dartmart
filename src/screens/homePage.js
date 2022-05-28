import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Modal, Pressable, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem } from '../actions/index';

function HomePage(props){
    const cart = useSelector((state) => state.item.cart);
    
    const [modalVisible, setModalVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const [tempQuantity, setTempQuantity] = useState(1);

    useEffect(() => {
        setTempQuantity(1);
    }, [modalVisible])
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.categoryHeaderContainer}>
                    <Text style={styles.categoryHeaderText}>Categories</Text> 
                </View>
                <ScrollView horizontal={true} style={styles.categoryScroll}>
                {itemData.map((item) => {
                        return (
                            <View key={item.name}>
                                <View style={styles.categoryContainer}>
                                        <Text style={styles.categoryText}>Category</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
                <LinearGradient colors={['#78FFC4', '#75D000', '#269C56']} style={styles.featured}>
                    <Text style={styles.featuredText}>Featured Products</Text>
                </LinearGradient>
                <View style={styles.itemsContainer}>
                    {itemData.map((item) => {
                        return (
                            <TouchableHighlight key={item.name} underlayColor="transparent" onPress={() => {setSelectedItem(item); setModalVisible(!modalVisible)}}>
                                <View style={styles.itemContainer}>
                                        <Image source={{uri: "https://dartmart-image-bucket.s3.amazonaws.com/water.png"}} style={styles.image} />
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemCost}>{item.cost}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </ScrollView>
            <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.itemModal}>
                    <Text style={styles.itemModalName}>{selectedItem?.name}</Text>
                    <Text style={styles.itemModalCost}>{selectedItem?.cost}</Text>
                    <Image style={styles.modalImage} source={{uri: "https://dartmart-image-bucket.s3.amazonaws.com/water.png"}}/>
                    <Pressable style={{position: 'absolute', top: 20, right: 20}} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{fontSize: 25}}>X</Text>
                    </Pressable>
                    <View style={styles.controlContainer}>
                        <View style={styles.quantityContainer}>
                            <Pressable onPress={() => setTempQuantity(tempQuantity-1)}>
                                <View style={tempQuantity === 1 ? {display: 'none'} : styles.quantityControl}>
                                    <Text style={styles.quantityControlText}>-</Text>
                                </View>
                            </Pressable>
                            <View style={styles.quantity}>
                                <Text>{tempQuantity}</Text>
                            </View>
                            <Pressable onPress={() => setTempQuantity(tempQuantity+1)}>
                            <View style={styles.quantityControl}>
                                    <Text style={styles.quantityControlText}>+</Text>
                                </View>
                            </Pressable>
                        </View>
                        <Pressable onPress={() => {props.addItem(selectedItem, tempQuantity); setModalVisible(!modalVisible)}}>
                            <View style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Submit</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>

    );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        width: windowWidth,
        backgroundColor: '#02604E'
    },
    categoryHeaderContainer:{
        height: windowHeight * .05,
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    categoryHeaderText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20
    },
    categoryScroll:{
        width: windowWidth,
        backgroundColor: 'black',
    },
    categoryContainer:{
        width: windowWidth * .35,
        margin: windowWidth * .025,
        marginHorizontal: 5,
        height: windowWidth * .10,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText:{
        fontSize: 15,
        fontWeight: 'bold',
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
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: windowWidth * .45,
        marginTop: 30
    },
    image:{
        height: "80%",
        width: "80%",
        // borderRadius: 30,
    },
    itemContainer:{
        width: windowWidth * .45,
        margin: windowWidth * .025,
        height: windowWidth * .45,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 30,
        alignItems:'center',
        marginBottom: windowHeight * .25,
        marginTop: windowHeight * .25,
        flex: 1
    },
    modalImage:{
        width: "50%",
        height: "45%",
    },
    itemModalName:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemModalCost:{
        marginTop: 15
    },
    controlContainer:{
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 200,
    },
    quantityControl:{
        width: 40,
        height: 40, 
        borderRadius: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityControlText:{
        fontSize: 20,
        color: 'white',
    },
    quantity:{
        borderWidth: 1,
        width: 40,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButton:{
        width: 100,
        height: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    submitButtonText:{
        color: 'white',
    }
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
        name: 'test3',
        cost: '2.99',
    },
    {
        name: 'test4',
        cost: '2.99',
    },
    {
        name: 'test5',
        cost: '2.99',
    },
    {
        name: 'test6',
        cost: '2.99',
    },
    {
        name: 'test7',
        cost: '2.99',
    },
    {
        name: 'test8',
        cost: '2.99',
    },
    {
        name: 'test9',
        cost: '2.99',
    },
    {
        name: 'test10',
        cost: '2.99',
    },
    {
        name: 'test11',
        cost: '2.99',
    },
    {
        name: 'test12',
        cost: '2.99',
    },
    {
        name: 'test13',
        cost: '2.99',
    },
    {
        name: 'test14',
        cost: '2.99',
    },
]
export default connect(null, { addItem })(HomePage);