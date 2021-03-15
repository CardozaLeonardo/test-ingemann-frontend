import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { FC, ReactNode } from 'react';
import { BiErrorAlt } from 'react-icons/bi';

interface Props {
  children?: ReactNode | any;
}

const TextError: FC<Props> = ({ children }) => {
  return (
    <Box display="block" width="full">
      <Flex alignItems="center">
        <BiErrorAlt color="#E53E3E" />
        <Text fontSize="sm" color="red.500" marginLeft="1">
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

export default TextError;
