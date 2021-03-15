import React, { FC, useMemo } from 'react';
import { Layout } from '../components/common';
import { useFetch } from '../hooks/useFetch';
import { ItemForm } from '../components/forms';
import { DataTable } from '../components/ui';
import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { Api } from '../components/util/api';

const ItemsScreen: FC = () => {
  const { data, isLoading } = useFetch(Api.ITEMS_ENDPOINT);

  const columns = useMemo(
    () => [
      {
        Header: 'Id Artículo',
        accessor: 'id',
      },
      {
        Header: 'Código',
        accessor: 'code',
      },
      {
        Header: 'Descripción',
        accessor: 'description',
      },
      {
        Header: 'Precio ($)',
        accessor: 'price',
      },
      {
        Header: 'Costo ($)',
        accessor: 'cost',
      },
    ],
    []
  );

  return (
    <Layout>
      <Text fontWeight="bold" fontSize="xl">
        Gestión de Artículos
      </Text>
      <Grid
        marginY="4"
        templateColumns={{ base: 'repeat(1, auto)', md: 'auto 1fr' }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <ItemForm />
        </GridItem>
        <GridItem width="full">
          <Box>
            {isLoading ? (
              <Center>
                <Spinner />
              </Center>
            ) : (
              <DataTable columns={columns} data={data.data} />
            )}
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default ItemsScreen;
