import React from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Button,
    View
} from 'react-native';
import { useDispatch } from 'react-redux';
import Color from '../../constants/Colors';
import * as CartAction from '../../store/actions/CartActions';
const ProductDetailScreen = props => {
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style={styles.image}
                source={{ uri: props.navigation.getParam('image') }} />
            <View style={styles.action}>
                <Button
                    color={Color.mainColor}
                    title='ADD TO CART'
                    onPress={() => { dispatch(CartAction.addToCartAction(props.navigation.getParam('item'))) }}
                    style={styles.button} />
            </View>
            <Text style={styles.description}>{props.navigation.getParam('title')}</Text>
            <Text style={styles.price}>${props.navigation.getParam('price')}</Text>
        </ScrollView>
    )
}
ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('title'),
    }
}
const styles = StyleSheet.create({
    constainer: {
        width: 500,
        height: 700,
    },
    action: {
        alignItems: 'center',
        marginVertical: 20,

    },

    image: {
        width: '100%',
        height: 300,
    },
    description: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        width: 200,

    }
})

export default ProductDetailScreen; 