
import React, { useState } from 'react';
import { View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ProductOverVieweReducer from './store/reducers/ProductOverVieweReducer';
import ProductOverViweNavigator from './navigation/ProductOverView';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const rootReducer = combineReducers({
  products: ProductOverVieweReducer,
})

const store = createStore(rootReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);}}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <ProductOverViweNavigator />
    </Provider>

  );
}

