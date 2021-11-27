import React, {createContext, useState} from 'react';

import {getProduct} from '../services/ProductsService';

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  // add item to cart function
  async function addItemToCart(id) {
    const product = await getProduct(id);
    setItems(prevItems => {
      const item = prevItems.find(item => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map(item => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  }

  // Total Items in cart
  function getItemsCount() {
    return items.reduce((sum, item) => sum + parseInt(item.qty), 0);
  }
  // Total Price of the cart
  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
      }}>
      {props.children}
    </CartContext.Provider>
  );
}
