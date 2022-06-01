import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Modal, Pressable, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { addItem, fetchItems } from '../actions/index';

function CategoryPage(props){
    const category = useSelector((state) => state.item.category);
    const allItems = useSelector((state) => state.item.allItems);
    const [modalVisible, setModalVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const [tempQuantity, setTempQuantity] = useState(1);

    useEffect(() => {
        setTempQuantity(1);
    }, [modalVisible])

    useEffect(() => {
        props.fetchItems();
    }, [])
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                <View style={styles.itemsContainer}>
                    {allItems.filter((item) => item.category === category).map((item) => {
                        return (
                            <TouchableHighlight key={item.name} underlayColor="transparent" onPress={() => {
                                setSelectedItem(item); setModalVisible(!modalVisible)
                                }}>
                                <View style={styles.itemContainer}>
                                        <Image source={{uri: item.imageURL}} style={styles.image} />
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemCost}>{item.cost}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </ScrollView>
            <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.itemModal}>
                    <Text style={styles.itemModalName}>{selectedItem?.name}</Text>
                    <Text style={styles.itemModalCost}>{selectedItem?.cost}</Text>
                    <Image style={styles.modalImage} source={{uri: selectedItem?.imageURL}}/>
                    <Pressable style={{position: 'absolute', top: 20, right: 20}} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{fontSize: 25}}>X</Text>
                    </Pressable>
                    <View style={styles.controlContainer}>
                                <View style={styles.quantityContainer}>
                                            <TouchableOpacity style={styles.quantityButton} onPress={()=> {if(tempQuantity > 0) setTempQuantity(tempQuantity-1)}}>
                                                <Text style={styles.quantitySymbol}>-</Text>
                                            </TouchableOpacity>    
                                            <Text style={styles.text1}>{tempQuantity}</Text>
                                            <TouchableOpacity style={styles.quantityButton} onPress={() => setTempQuantity(tempQuantity+1)}>
                                                <Text style={styles.quantitySymbol}>+</Text>
                                            </TouchableOpacity> 
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
        height: windowHeight,
        backgroundColor: '#02604E',
    },
    title:{
        fontSize: 25,
        fontWeight: '500',
        color: 'white',
        marginTop: 15
    },
    categoryHeaderContainer:{
        height: windowHeight * .05,
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#02604E',
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
        height: "40%",
        width: "40%",
        marginTop: 10,
        // borderRadius: 30,
    },
    itemContainer:{
        width: windowWidth * .35,
        margin: windowWidth * .025,
        height: windowWidth * .45,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 15,
        width: '85%',
        paddingTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemCost: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
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
        flex: 1, 
        backgroundColor: '#BBDDBB'
    },
    itemModal:{
        height: 350,
        width: windowWidth * .8,
        marginHorizontal: windowWidth * .1,
        backgroundColor: '#BBDDBB',
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
        height: 40,
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-around',
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

export default connect(null, { addItem, fetchItems })(CategoryPage);