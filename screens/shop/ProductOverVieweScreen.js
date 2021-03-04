import React from 'react';
import { FlatList, Text } from 'react-native';
import ProductItem from '../../components/ProductItem'
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = props => {
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
                    onViewDetail={() => {
                        props.navigation.navigate('ProductsDetail', {
                            productID: itemData.item.id,
                            title: itemData.item.title,
                            image: itemData.item.imageUrl,
                            price: itemData.item.price,
                        })
                    }}
                />}
        />
    )
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

export default ProductsOverviewScreen;