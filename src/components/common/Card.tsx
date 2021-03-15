import { Image } from '@chakra-ui/image';
import { Box, Text, Wrap } from '@chakra-ui/layout';
import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  src: string;
}

const Card: FC<Props> = ({ title, description, src }) => {
  return (
    <Box
      bg="gray.50"
      minHeight="180px"
      width={{ base: '100%', md: '320px' }}
      borderRadius="16px"
      transition=".3s ease-in"
      cursor="pointer"
      _hover={{ shadow: 'md' }}
    >
      <Image src={src} alt={title} borderRadius="16px" shadow="lg" />
      <Wrap direction="column" spacing="0.5" padding="4">
        <Text fontSize="lg" fontWeight="bold" color="gray.700">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {description}
        </Text>
      </Wrap>
    </Box>
  );
};

export default Card;
