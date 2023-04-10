import * as React from 'react';
import {Text} from 'react-native';
import {Col, Row} from './Grid';
const Top = () => {
  return (
    <Row>
      <Col numRows={2}>
        <Text>1</Text>
      </Col>
      <Col numRows={2}>
        <Text>Second column</Text>
      </Col>
    </Row>
  );
};

export default Top;
