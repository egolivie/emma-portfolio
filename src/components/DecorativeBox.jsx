import React from 'react';
import { Box } from '@chakra-ui/react';

const DecorativeBox = ({ height = '80px' }) => (
  <Box height={height} bg="grey" borderRadius="lg" />
);

export default DecorativeBox;
