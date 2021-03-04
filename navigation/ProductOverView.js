import { createStackNavigator } from 'react-navigation-stack';
import ProductOverVieweScreen from '../screens/shop/ProductOverVieweScreen';
import ProductsDetailScreen from '../screens/shop/ProductDetailScreen';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const ProductOverViweNavigator = createStackNavigator({
    Products: {
        screen: ProductOverVieweScreen,
    },
    ProductsDetail:{
        screen: ProductsDetailScreen
    }

},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.mainColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor,
        }
    })

export default createAppContainer(ProductOverViweNavigator);