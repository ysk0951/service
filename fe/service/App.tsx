/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Top from './component/Top';
import Stat from './component/Stat';
import Filter from './component/Filter';
import Area from './component/Area';
import {View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.app}>
      <Top />
      <Stat />
      <Filter />
      <Area />
    </View>
  );
}

const styles = {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: 400,
  },
};

export default App;
