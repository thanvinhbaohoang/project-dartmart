import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Modal, Pressable } from 'react-native';
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
                <LinearGradient colors={['#78FFC4', '#75D000', '#269C56']} style={styles.featured}>
                    <Text style={styles.featuredText}>Featured Products</Text>
                </LinearGradient>
                <View style={styles.itemsContainer}>
                    {itemData.map((item) => {
                        return (
                            <TouchableHighlight underlayColor="transparent" onPress={() => {setSelectedItem(item); setModalVisible(!modalVisible)}}>
                                <View style={styles.itemContainer}>
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
                    <Text>{selectedItem?.name}</Text>
                    <Text>{selectedItem?.cost}</Text>
                    <Pressable style={{position: 'absolute', top: 20, right: 20}} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{fontSize: 25}}>X</Text>
                    </Pressable>
                    <View style={styles.quantityContainer}>
                        <Pressable onPress={() => setTempQuantity(tempQuantity-1)}>
                            <Text>-</Text>
                        </Pressable>
                        <Text>{tempQuantity}</Text>
                        <Pressable onPress={() => setTempQuantity(tempQuantity+1)}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={() => {props.addItem(selectedItem, tempQuantity); setModalVisible(!modalVisible)}}>
                        <Text>Submit</Text>
                    </Pressable>
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
    itemContainer:{
        width: windowWidth * .45,
        margin: windowWidth * .025,
        borderRadius: 30,
        height: windowWidth * .45,
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