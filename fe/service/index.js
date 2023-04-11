/**
 * @format
 */

import App from './App';
import * as React from 'react';
import rootReducer from './reduxModule';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NativeBaseProvider} from 'native-base';
import {Center} from 'native-base';
import {createStore} from 'redux';

const store = createStore(rootReducer);
export default function Main() {
  return (
    <NativeBaseProvider store={store}>
      <Center flex={1}>
        <App />
      </Center>
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
