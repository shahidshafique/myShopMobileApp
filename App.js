import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsList from './screens/ProductsList';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import {CartIcon} from './components/CartIcon';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Products list screen Navigation */}
        <Stack.Screen
          name="Prodcuts"
          component={ProductsList}
          options={({navigation}) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation} />,
          })}
        />
        {/* Product Detail screen Navigation */}
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({navigation}) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation} />,
          })}
        />
        {/* Shopping cart screen Navigation */}
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={({navigation}) => ({
            title: 'Cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default App;
