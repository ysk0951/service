import * as React from 'react';
import {Col, Row} from './Grid';
import {Text} from 'native-base';
const Display = () => {
  return (
    <Row>
      <Col numRows={3}>
        <Text fontSize="lg" alignItems="center">
          디스플레이
        </Text>
      </Col>
    </Row>
  );
};
export default Display;
