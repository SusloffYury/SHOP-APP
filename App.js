
import React from 'react';
import { View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ProductOverVieweReducer from './store/reducers/ProductOverVieweReducer';
import ProductOverViweNavigator from './navigation/ProductOverView';

const rootReducer = combineReducers({
  products: ProductOverVieweReducer,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
    <ProductOverViweNavigator/>
    </Provider>

  );
}

