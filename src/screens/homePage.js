import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

function HomePage(props){

    const [modalVisible, setModalVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
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
                    <Pressable style={{position: 'absolute', top: 20, right: 20}}onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{fontSize: 25}}>X</Text>
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
    }
});

const itemData = [
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test1',
        cost: '4.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
    {
        name: 'test',
        cost: '2.99',
    },
]
export default HomePage;