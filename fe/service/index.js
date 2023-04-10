/**
 * @format
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import * as React from 'react';
export default function Main() {
  return <App />;
}

AppRegistry.registerComponent(appName, () => Main);
