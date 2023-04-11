import * as React from 'react';
import {Col, Row} from './Grid';
import {Text} from 'native-base';
const Filter = () => {
  return (
    <Row>
      <Col numRows={3}>
        <Text fontSize="lg" alignItems="center">
          필터
        </Text>
      </Col>
    </Row>
  );
};
export default Filter;
