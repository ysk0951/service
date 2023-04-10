/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
const Col = ({numRows, children}) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};
const Row = ({children}) => <View style={styles.row}>{children}</View>;
function App(): JSX.Element {
  return (
    <View style={styles.app}>
      <Row>
        <Col numRows={2}>
          <Text>First column</Text>
        </Col>
        <Col numRows={2}>
          <Text>Second column</Text>
        </Col>
      </Row>
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
  row: {
    flexDirection: 'row',
  },
  '1col': {
    backgroundColor: 'lightblue',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 1,
  },
  '2col': {
    backgroundColor: 'green',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 3,
  },
  '3col': {
    backgroundColor: 'orange',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 3,
  },
  '4col': {
    flex: 4,
  },
};

export default App;
