import { Box, Text } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import { Layout } from '../components/common';
import { SearchItemForm } from '../components/forms';
import { FormikFormControl } from '../components/ui';
import { Api } from '../components/util/api';

interface Props {}

interface InvoiceDetail {
  quantity: number;
  itemId: number;
}

interface Invoice {
  total: number;
  subTotal: number;
}

const BillingScreen: FC<Props> = () => {

  const [details, setDetails] = React.useState<any>();
  

  return (
    <Layout>
      <Text fontWeight="bold" fontSize="4xl">
        Factura
      </Text>
      <Text>
        <strong>Fecha: </strong> {Date.now()}
      </Text>
      <Box mt="6">
        <SearchItemForm />
      </Box>
    </Layout>
  );
};

export default BillingScreen;
