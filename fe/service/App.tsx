/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Top from './layout/Top';
import {View} from 'react-native';
// import {Provider as PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <View style={styles.app}>
      <Top />
    </View>
  );
}

const styles = {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: 400,
    // backgroundColor: 'red',
  },
};

export default App;
