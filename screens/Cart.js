import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {CartContext} from '../contexts/CartContext';
function Cart({navigation}) {
  const {items, getTotalPrice, deleteItemFromCart, updateItemFromCart} =
    useContext(CartContext);

  const showConfirmDialog = id => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to remove Item From Cart?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            onDeleteItemFromCart(id);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
        },
      ],
    );
  };
  function onDeleteItemFromCart(id) {
    deleteItemFromCart(id);
  }

  function renderItem({item}) {
    return (
      <View>
        <View style={styles.cartLine}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductDetails', {
                productId: item.id,
              });
            }}>
            <Text style={styles.lineLeft}>{item.product.name}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.lineRight}>£{item.totalPrice}</Text>

        <Text>QTY</Text>
        <Picker
          selectedValue={item.qty.toString()}
          onValueChange={(itemValue, itemIndex) =>
            updateItemFromCart(item.id, itemValue)
          }
          style={{height: 50, width: 100}}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="5" />
        </Picker>

        <Button
          onPress={() => showConfirmDialog(item.id)}
          title="Remove"
          style={{}}
        />
      </View>
    );
  }
  function Totals() {
    const [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    }, []);
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>£{total}</Text>
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
      ListFooterComponent={Totals}
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
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: 'bold',
  },
});

export default Cart;
