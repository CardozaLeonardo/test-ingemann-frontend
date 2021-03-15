import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { InvoiceApi } from '../../models';

interface Props {
    invoice: InvoiceApi;
}

const InvoiceViewForm: React.FC<Props> = ({ invoice }) => {
    return (
        <Box>
            <Text fontSize="xl" fontWeight="bold">
                Valores
            </Text>
            <Flex align="center" justify="space-between">
                <Text mr="2">Subtotal: </Text>
                <InputGroup w="75%">
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children="$"
                    />
                    <Input readOnly={true} value={invoice.subTotal} />
                </InputGroup>
            </Flex>
            <Flex align="center" justify="space-between" mt="2">
                <Text mr="2">Impuesto: </Text>
                <InputGroup w="75%">
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children="$"
                    />
                    <Input readOnly={true} value={invoice.tax} />
                </InputGroup>
            </Flex>
            <Flex align="center" justify="space-between" mt="2">
                <Text mr="2">Total: </Text>
                <InputGroup w="75%">
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children="$"
                    />
                    <Input readOnly={true} value={invoice.total} />
                </InputGroup>
            </Flex>
        </Box>
    );
};

export default InvoiceViewForm;
