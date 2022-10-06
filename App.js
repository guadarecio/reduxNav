import {SafeAreaView} from 'react-native';
import React from 'react';
import StackNav from './src/navigators/stack/StackNav';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <StackNav />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
