import {View} from 'react-native';
import {ICol, IRow} from '../interface/interface';
const Col = ({numRows, children}: ICol) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};
const Row = ({children}: IRow) => <View style={styles.row}>{children}</View>;
const styles = {
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
    // backgroundColor: 'green',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 3,
    fontSize: '1rem',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
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
export {Row, Col};
