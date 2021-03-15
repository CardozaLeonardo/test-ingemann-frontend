import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import AppRouter from './router/AppRouter';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRouter />
  </ChakraProvider>
);
