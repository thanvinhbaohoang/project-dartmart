import React, { useEffect, useState, useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Modal, Pressable, Image, TextInput, TouchableOpacity } from 'react-native';
import { addItem, fetchItems, setCategory } from '../actions/index';

function HomePage(props){
    const ref = useRef(null);

    const allItems = useSelector((state) => state.item.allItems);
    const [modalVisible, setModalVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const [tempQuantity, setTempQuantity] = useState(1);
    const [search, setSearch] = useState('');

    const categories = [];
    useEffect(() => {
        setTempQuantity(1);
    }, [modalVisible])

    useEffect(() => {
        props.fetchItems();
    }, [])
    return (
        <View style={{backgroundColor: '#02604E'}}>
            <ScrollView ref={ref} contentContainerStyle={styles.container} stickyHeaderIndices={[0]}>
                <View style={styles.searchContainer}>
                    <TextInput placeholder='Search Dartmart' style={{
                        backgroundColor: 'white',
                        width: windowWidth * .8,
                        height: 40,
                        borderRadius: 20,
                        fontSize: 15,
                        paddingLeft: 10,
                        marginTop: 10,
                    }} onSubmitEditing={(event) => {setSearch(event.nativeEvent.text); ref.current.scrollToEnd({animated: false})}}/>
                </View>
                <View style={styles.categoryHeaderContainer}>
                    <Text style={styles.categoryHeaderText}>Categories</Text> 
                </View>
                <ScrollView horizontal={true} style={styles.categoryScroll}>
                    { 
                        allItems.forEach((item) => {
                            if(!categories.includes(item.category)){
                                categories.push(item.category);
                            }
                        })
                    }
                    {
                    categories.map((category) => {
                            return (
                                <TouchableHighlight key={category} onPress={() => {
                                    props.setCategory(category);
                                    props.navigation.navigate("Category");
                                }}>
                                    <View style={styles.categoryTagContainer}>
                                            <Text style={styles.categoryText}>{category}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                    })}
                </ScrollView>
                {
                categories.map((category) => {
                        return (
                            <View style={styles.categoryContainer}>
                                <View style={{padding: 10}}>
                                    <Text style={styles.subheader}>{category?.toUpperCase()}</Text>
                                </View>
                                <ScrollView horizontal={true} contentContainerStyle={styles.categoryItemScroll}>
                                    {allItems.filter((item) => item.category === category).map((item) => {
                                        return (
                                            <TouchableHighlight key={category + item.name} underlayColor="transparent" onPress={() => {
                                                setSelectedItem(item); setModalVisible(!modalVisible)
                                                }}>
                                                <View style={styles.itemContainer}>
                                                        <Text style={styles.itemName}>{item.name}</Text>
                                                        <Image source={{uri: item.imageURL}} style={styles.image} />
                                                        <Text style={styles.itemCost}>${item.cost}</Text>
                                                </View>
                                            </TouchableHighlight>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        )
                })}
                <Text style={styles.subheader}>All items</Text>
                <View style={styles.itemsContainer}>
                    {allItems.filter((item) => item.name.toUpperCase().startsWith(search.toUpperCase())).map((item) => {
                        return (
                            <TouchableHighlight key={item.name} underlayColor="transparent" onPress={() => {
                                setSelectedItem(item); setModalVisible(!modalVisible)
                                }}>
                                <View style={styles.itemContainer}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Image source={{uri: item.imageURL}} style={styles.image} />
                                        <Text style={styles.itemCost}>${item.cost}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={{width: windowWidth, height: windowHeight, backgroundColor: modalVisible ? 'rgba(0,0,0,.5)' : 'transparent'}}>
                <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.itemModal}>
                        <Text style={styles.itemModalName}>{selectedItem?.name}</Text>
                        <Image style={styles.modalImage} source={{uri: selectedItem?.imageURL}}/>
                        <Text style={styles.itemModalCost}>${selectedItem?.cost}</Text>
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
        backgroundColor: '#02604E',
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
    searchContainer:{
        width: windowWidth,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
    },  
    categoryScroll:{
        width: windowWidth,
        backgroundColor: '#02604E',
    },
    categoryTagContainer:{
        width: windowWidth * .35,
        margin: windowWidth * .025,
        marginHorizontal: 5,
        height: windowWidth * .10,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryContainer:{
        height: windowWidth * .65,
    },
    categoryText:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    categoryItemScroll:{
        alignItems:'center',
        minWidth: windowWidth,
        backgroundColor: '#BBDDBB',
        height: windowWidth * .5,
    },
    subheader:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    itemsContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: windowWidth * .45,
        marginTop: 10,
        minHeight: windowHeight * .7
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
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    controlContainer:{
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    },
    // quantityContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center',
    //     width: 200,
    // },
    // quantityControl:{
    //     width: 40,
    //     height: 40, 
    //     borderRadius: 20,
    //     backgroundColor: 'black',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // quantityControlText:{
    //     fontSize: 20,
    //     color: 'white',
    // },
    // quantity:{
    //     borderWidth: 2,
    //     width: 40,
    //     height: 60,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'white',
    // },
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

export default connect(null, { addItem, fetchItems, setCategory })(HomePage);