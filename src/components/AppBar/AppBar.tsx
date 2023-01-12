import { Box } from '@chakra-ui/react';
import * as React from 'react';

const AppBar = () => {
  return (
    <Box w="100%" p={5} color="white" bgGradient={'linear(to-b, teal.300, purple.300)'}>
      Everything SpaceX
    </Box>
  );
};

export default AppBar;
