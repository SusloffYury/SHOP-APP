import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Color from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import * as CartAction from '../../store/actions/CartActions';

const CartScreen = props => {
    const amountProducts = useSelector(state => state.cart.totalItem)
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].ProductTitle,
                productPrice: state.cart.items[key].ProductPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            })

        }
        return transformedCartItems;
        return;
    })
    
    const dispatch = useDispatch();
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total:
                <Text style={styles.amount}>
                        {Number(amountProducts).toFixed(2)}
                    </Text>
                </Text>
                <Button
                    color={Color.mainColor}
                    title="Order Now"
                    disabled={cartItems.length === 0} />
            </View>
            <View>
                <FlatList
                    data={cartItems}
                    keyExtractor={item => item.productId}
                    renderItem={itemData =>
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.productTitle}
                            price={itemData.item.productPrice}
                            onRemove={() => {
                                dispatch(CartAction.
                                    removeFromCartAction(itemData.item.productId))
                            }}

                        />} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    },
    amount: {
        color: Color.accentColor,
    },
})

export default CartScreen;