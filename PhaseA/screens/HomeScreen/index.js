import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProductCard from '../../components/productCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/reducers/cartReducer';

const data = [
  { id: 0, title: 'Product 1', price: 100 },
  { id: 1, title: 'Product 2', price: 130 },
  { id: 2, title: 'Product 3', price: 120 },
  { id: 3, title: 'Product 4', price: 110 },
  { id: 4, title: 'Product 5', price: 140 },
];

const HomeScreen = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState([])
  const cartData = useSelector(state => state?.cart?.cartData)
  const dispatch = useDispatch()

  const onSelect = (id) => {
    if (selectedItems.includes(id)) {
      const updated = selectedItems.filter((items) => items !== id)
      setSelectedItems(updated)
    } else {
      setSelectedItems(p => [...p, id])
    }
  }

  const onSubmit = () => {
    let selectedProducts = data.filter((item) => {
      return selectedItems.includes(item.id)
    })
    // if (selectedItems.length !== 0) {
    //   navigation.navigate("Product", { data: selectedProducts })
    // }
    navigation.navigate("Product", { data: selectedProducts })
  }

  const onPressToCart = (item) => {
    dispatch(addToCart(item))
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        onSelect(item.id)
      }} style={[styles.itemContainer, {
        backgroundColor: selectedItems.includes(item.id) ? "pink" : "green"
      }]}>
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemTitle}>{item.price}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onPressToCart(item)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>add to cart</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.cartView}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text style={styles.cartText}>Total {cartData?.length}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        keyboardShouldPersistTaps='handled'
      />
      <TouchableOpacity onPress={onSubmit} style={styles.cartButton}>
        <Text style={styles.buttonTitle}>Go to cart screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 15
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
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
    // width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: '#ddd',
    paddingHorizontal: 10
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  cartText: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 10
  },
  cartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cartButton: {
    backgroundColor: '#ddd',
    width: "80%",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: '400',
  }
})