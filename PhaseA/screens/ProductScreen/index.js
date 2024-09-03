import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/productCard'
import { onDecrement, onIncrement } from '../../redux/reducers/cartReducer'
import AntDesign from '@expo/vector-icons/AntDesign';

const ProductScreen = ({ route, navigation }) => {

    const data = route?.params?.data
    const cartData = useSelector(state => state?.cart?.cartData)
    const dispatch = useDispatch()


    const totalPrice = cartData?.map((item) => {
        return item.quantity * item.price
    }).reduce((acc, curr) => acc + curr, 0);


    const onIncreaseQty = (item) => {
        dispatch(onIncrement(item))
    }

    const onDecreaseQty = (item) => {
        dispatch(onDecrement(item))
    }


    const renderItem = ({ item }) => {
        return (
            <ProductCard
                itemQuantity={item.quantity}
                title={item.title}
                price={item.quantity ? (item.price * item.quantity) : item.price}
                onIncrease={() => onIncreaseQty(item)}
                onDecrease={() => onDecreaseQty(item)}
            />
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }} style={styles.backIcons}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.cartView}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <View style={styles.priceTextView}>
                    <Text style={styles.cartText}>Total</Text>
                    <Text style={styles.cartTexts}>{totalPrice}</Text>
                </View>
            </View>
            <FlatList
                style={{ flex: 1, paddingTop: 10 }}
                data={cartData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                keyboardShouldPersistTaps='handled'
            />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15
    },
    cartView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    cartText: {
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 5
    },
    cartTexts: {
        fontSize: 16,
        fontWeight: '600',
    },
    priceTextView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    backIcons: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 50,
    }
})