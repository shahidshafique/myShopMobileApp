import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export function CartIcon({navigation}) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        Cart(0)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'blue',
    height: 30,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    height: 30,
    fontWeight: 'bold',
  },
});
