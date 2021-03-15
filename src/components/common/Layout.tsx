import { Box } from '@chakra-ui/layout';
import React, { FC, ReactNode } from 'react';
import { Container } from '../ui';
import Navbar from './Navbar';

interface Props {
  children?: ReactNode | any;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box as="main" paddingY="4">
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
