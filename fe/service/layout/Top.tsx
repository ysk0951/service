import * as React from 'react';
import {Text} from 'react-native';
import {Col, Row} from './Grid';
const Top = () => {
  return (
    <Row>
      <Col numRows={2}>
        <Text>강사모 애견 호텔비교서비스</Text>
      </Col>
      <Col numRows={2}>
        <Text>4월 첫주차</Text>
      </Col>
    </Row>
  );
};

export default Top;
