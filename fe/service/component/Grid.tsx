import {View} from 'react-native';
import {ICol, IRow} from '../interface/interface';
const Col = ({numRows, children}: ICol): JSX.Element => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};
const Row = ({children}: IRow): JSX.Element => (
  <View style={styles.row}>{children}</View>
);
const styles: any = {
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
    borderColor: 'orange',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  '3col': {
    borderColor: 'orange',
    borderWidth: 1,
    flex: 1,
  },
};
export {Row, Col};
