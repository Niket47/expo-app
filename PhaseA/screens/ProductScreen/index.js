import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductScreen = ({ route }) => {

    const data = route?.params?.data

    return (
        <View>
            {
                data.map((item, index) => {
                    return (
                        <Text key={index}>{item.title}</Text>
                    )
                })
            }
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})