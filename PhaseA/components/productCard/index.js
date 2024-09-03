import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const ProductCard = ({ title, price, onIncrease, onDecrease, itemQuantity }) => {

    return (
        <View style={[styles.itemContainer, {
        }]}>
            <Text style={styles.itemTitle}>{title}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onDecrease}
                    style={styles.button}>
                    {
                        itemQuantity == 1 ? (
                            <AntDesign name="delete" size={24} color="black" />
                        ) : (
                            <AntDesign name="minussquareo" size={24} color="black" />
                        )
                    }
                </TouchableOpacity>
                <View style={{
                    width: 45,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        paddingHorizontal: 5
                    }}>{itemQuantity ?? 1}</Text>
                </View>
                <TouchableOpacity onPress={onIncrease}
                    style={styles.button}
                >
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        margin: 5,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    button: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        borderRadius: 4,
        backgroundColor: '#ddd',
        zIndex: 100
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})