import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = ({ navigation }) => {

  const data = [
    { id: 0, title: 'Product 1' },
    { id: 1, title: 'Product 2' },
    { id: 2, title: 'Product 3' },
    { id: 3, title: 'Product 4' },
    { id: 4, title: 'Product 5' },
  ];
  
  const [selectedItems, setSelectedItems] = useState([])

  const onSelect = (id) => {
    if (selectedItems.includes(id)) {
      const updated = selectedItems.filter((items) => items !== id)
      setSelectedItems(updated)
    } else {
      setSelectedItems(p => [...p, id])
    }
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      onSelect(item.id)
    }} style={[styles.itemContainer, {
      backgroundColor: selectedItems.includes(item.id) ? "red" : "green"
    }]}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );


  const onSubmit = () => {
    let selectedProducts = data.filter((item) => {
      return selectedItems.includes(item.id)
    })
    navigation.navigate("Product", { data: selectedProducts })
  }


  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Button onPress={onSubmit} title='onPress' />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
    backgroundColor: "pink"
  },
  itemText: {
    fontSize: 18,
  },
})