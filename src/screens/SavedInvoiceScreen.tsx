import { Text } from '@chakra-ui/layout';
import React from 'react';
import { Layout } from '../components/common';

const SavedInvoiceScreen: React.FC = () => {
    return (
        <Layout>
            <Text fontWeight="bold" fontSize="xl">
                La factura ha sido guardada
            </Text>
            <Text mt="4">
                Seleccione una opción del menú de navegación para salir de esta página
            </Text>
        </Layout>
    );
};

export default SavedInvoiceScreen;
