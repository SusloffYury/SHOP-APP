import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import Colors from '../constants/Colors';

const ProductItem = props => {
  const TouchableCMP = TouchableOpacity;
  if (Platform.Os === 'android' && version >= 21) {
    TouchableCMP = TouchableNativeFeedback;
  }
  return (

    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCMP onPress={props.onViewDetail} ForegroundColor={Colors.accentColor}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={props.onViewDetail}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={props.onAddToCart}
            />
          </View>
        </TouchableCMP>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    elevation: 5,
    height: 300,
    margin: 20,
    backgroundColor: 'white',

  },
  touchable: {
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontFamily:'open-sans-bold',
    fontSize: 18,
    height: '20%',
    marginVertical: 30,
  },
  price: {
    fontFamily:'open-sans-bold',
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  }
});

export default ProductItem;
