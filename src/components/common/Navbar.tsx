import React, { FC } from 'react';
import { Box, Flex, Spacer, Text, Wrap } from '@chakra-ui/layout';
import { Container, LinkTo, Logo } from '../ui';

const Navbar: FC = () => {
  const routes = [
    {
      name: 'Inicio',
      route: '/',
    },
    {
      name: ' Artículos',
      route: '/items',
    },
    {
      name: 'Facturación',
      route: '/billing',
    },
  ];

  return (
    <Box
      borderBottom="1px"
      borderColor="gray.100"
      bg="white"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Container>
        <Flex alignItems="center" paddingY="4">
          <Box>
            <LinkTo to="/">
              <Logo />
            </LinkTo>
          </Box>
          <Spacer />
          <Wrap spacing="4">
            {routes.map(({ name, route }, index) => (
              <LinkTo to={route} key={index}>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  _hover={{ color: 'gray.700' }}
                  transition=".2s ease-in all"
                >
                  {name}
                </Text>
              </LinkTo>
            ))}
          </Wrap>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
