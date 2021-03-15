import { Box } from '@chakra-ui/layout';
import React, { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode | any;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <Box maxWidth="1280px" mx="auto" paddingX="4">
      {children}
    </Box>
  );
};

export default Container;
