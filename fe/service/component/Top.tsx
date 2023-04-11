import * as React from 'react';
import {Col, Row} from './Grid';
import {Text, Menu, HamburgerIcon, Box, Pressable, VStack} from 'native-base';
const Top = () => {
  return (
    <Row>
      <>
        <Col numRows={2}>
          <Box w="100%" alignItems="flex-start">
            <Menu
              shadow={2}
              w="190"
              trigger={triggerProps => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}>
                    <HamburgerIcon />
                  </Pressable>
                );
              }}>
              <Menu.Item>Arial</Menu.Item>
              <Menu.Item>Nunito Sans</Menu.Item>
              <Menu.Item>Roboto</Menu.Item>
              <Menu.Item>Poppins</Menu.Item>
              <Menu.Item>SF Pro</Menu.Item>
              <Menu.Item>Helvetica</Menu.Item>
              <Menu.Item isDisabled>Sofia</Menu.Item>
              <Menu.Item>Cookie</Menu.Item>
            </Menu>
          </Box>
        </Col>
        <Col numRows={2}>
          <VStack alignItems="center" space={1}>
            <Text fontSize="lg" alignItems="center">
              리빙펫
            </Text>
          </VStack>
        </Col>
        <Col numRows={2} />
      </>
    </Row>
  );
};

export default Top;
