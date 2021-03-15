import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { LinkTo } from '../components/ui';

const NotFoundScreen = () => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize="2xl" fontWeight="bold">
        404 Not found
      </Text>
      <LinkTo to="/">
        <Text fontSize="lg" fontWeight="medium" color="blue.500">
          &#8592; Volver a inicio
        </Text>
      </LinkTo>
    </Box>
  );
};

export default NotFoundScreen;
