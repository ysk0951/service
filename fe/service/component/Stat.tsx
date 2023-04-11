import * as React from 'react';
import {Col, Row} from './Grid';
import {Text} from 'native-base';
const Stat = () => {
  return (
    <Row>
      <Col numRows={3}>
        <Text fontSize="lg" alignItems="center">
          현재 검색값
        </Text>
      </Col>
    </Row>
  );
};

export default Stat;
