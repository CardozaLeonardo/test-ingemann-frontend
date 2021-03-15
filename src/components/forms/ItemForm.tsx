import { Button } from '@chakra-ui/button';
import { Box, Text, Wrap } from '@chakra-ui/layout';
import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useFetch } from '../../hooks/useFetch';
import { FormikFormControl } from '../ui';
import { Api } from '../util/api';
import { create } from '../util/service';

const ItemForm = () => {
  const { isValidating, mutate } = useFetch(Api.ITEMS_ENDPOINT);
  interface ItemForm {
    code: string;
    description: string;
    price: string;
    cost: string;
    active: boolean;
  }

  const initialValues: ItemForm = {
    code: '',
    description: '',
    price: '',
    cost: '',
    active: true,
  };

  const validationSchema = Yup.object({
    code: Yup.string().required('Requerido'),
    description: Yup.string().required('Requerido'),
    price: Yup.number()
      .required('Requerido')
      .moreThan(0, 'Debe ser mayor que 0'),
    cost: Yup.number()
      .required('Requerido')
      .moreThan(0, 'Debe ser mayor que 0'),
    active: Yup.bool().required('Requerido'),
  });

  const onSubmit: any = (values: ItemForm, actions: any) => {
    mutate(create<ItemForm>(values, Api.ITEMS_ENDPOINT));
    actions.resetForm();
  };

  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.100"
      width="full"
      maxWidth={{ base: 'full', md: 'sm' }}
      padding="4"
      borderRadius="16px"
      marginRight="4"
      height="auto"
    >
      <Text fontWeight="bold" marginBottom="4">
        Nuevo artículo
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }: FormikProps<any>) => (
          <Form>
            <Wrap spacing="12px">
              <FormikFormControl
                control="input"
                label="Código"
                type="text"
                name="code"
                placeholder="Ingrese el código del artículo"
                isInvalid={Boolean(errors.code && touched.code)}
              />
              <FormikFormControl
                control="textarea"
                label="Description"
                type="text"
                name="description"
                placeholder="Ingrese la descripción del artículo"
                isInvalid={Boolean(errors.description && touched.description)}
              />
              <FormikFormControl
                control="input"
                label="Precio"
                type="number"
                name="price"
                placeholder="Ingrese el precio del artículo"
                isInvalid={Boolean(errors.price && touched.price)}
              />
              <FormikFormControl
                control="input"
                label="Costo"
                type="number"
                name="cost"
                placeholder="Ingrese el costo del artículo"
                isInvalid={Boolean(errors.cost && touched.cost)}
              />
              <Button
                width="full"
                type="submit"
                colorScheme="blue"
                isLoading={isValidating}
              >
                Registrar
              </Button>
            </Wrap>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ItemForm;
