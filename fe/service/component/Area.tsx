import * as React from 'react';
import {Col, Row} from './Grid';
import {Text} from 'native-base';
const Area = () => {
  return (
    <Row>
      <Col numRows={3}>
        <Text fontSize="lg" alignItems="center">
          비교영역
        </Text>
      </Col>
    </Row>
  );
};
export default Area;
