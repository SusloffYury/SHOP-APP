import React from 'react';
import { FlatList, Platform } from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import * as CartAction from '../../store/actions/CartActions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/ui/HeaderButton';

const ProductsOverviewScreen = props => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={product}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    price={itemData.item.price}
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    onAddToCart={() => {
                        dispatch(CartAction.addToCartAction(itemData.item))
                    }}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductsDetail', {
                            productID: itemData.item.id,
                            title: itemData.item.title,
                            image: itemData.item.imageUrl,
                            price: itemData.item.price,
                            item: itemData.item
                        })
                    }}
                />}
        />
    )
};

ProductsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Products',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title='Cart'
                iconName={Platform.OS === 'android' ?
                    'md-cart' : 'ios-cart'}
                onPress={() => { navData.navigation.navigate('Cart') }}
            />
        </HeaderButtons>
    }


};

export default ProductsOverviewScreen;