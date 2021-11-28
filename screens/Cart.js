import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {CartContext} from '../contexts/CartContext';
function Cart({navigation}) {
  const {items} = useContext(CartContext);
  function renderItem({item}) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>{item.product.name}</Text>
        <Text style={styles.lineRight}>£{item.totalPrice}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      data={items}
      contentContainerStyle={styles.itemsListContainer}
      keyExtractor={item => item.product.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  cartLine: {
    flexDirection: 'row',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
});

export default Cart;
