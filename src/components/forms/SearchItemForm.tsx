import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/number-input';
import React from 'react';
import { InvoiceDetail, Item, Response } from '../../models';
import * as service from '../util/service';

interface Props {
    detailsList: InvoiceDetail[];
    setList: (...args: any[]) => any;
}

const SearchItemForm: React.FC<Props> = ({ detailsList, setList }) => {
    const [term, setTerm] = React.useState<string>('');
    const [quantity, setQuantity] = React.useState<number>(0);
    const [response, setResponse] = React.useState<Item | null>(null);
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<null | any>(null);

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTerm(e.currentTarget.value);
    };

    const onNumberInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setQuantity(parseInt(e.currentTarget.value));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (term !== '') {
            try {
                setLoading(true);
                setError(null);
                const res = await service.get<Response<Item>>(`/item/${term}`);
                setResponse(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
    };

    const addItemToList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (quantity <= 0) {
            return;
        }

        var detail: InvoiceDetail = {
            item: response,
            quantity: quantity
        };

        setList([...detailsList, detail]);

        setResponse(null);
        setQuantity(0);
        setTerm('');
    };

    const existItem = () => {
        var found = false;

        detailsList.map((e) => {
            if (e.item.id === response.id) {
                found = true;
            }
        });

        return found;
    };

    return (
        <Box>
            <form onSubmit={onSubmit}>
                <Input
                    size="md"
                    placeholder="Escriba el código..."
                    value={term}
                    onChange={onInputChange}
                />
                <Button isLoading={isLoading} type="submit" mt="4" isFullWidth colorScheme="green">
                    Buscar
                </Button>
            </form>
            <Box>
                {response && !error ? (
                    <Box mt="12">
                        <Text mb="2" fontWeight="bold">
                            Artículo:
                        </Text>
                        <Text>Descripción: {response.description}</Text>
                        <Text>Precio: ${response.price}</Text>
                        {!existItem() ? (
                            <Box mt="2">
                                <form onSubmit={addItemToList}>
                                    <NumberInput
                                        min={0}
                                        max={20}
                                        inputMode="numeric"
                                        onChange={(e) => setQuantity(parseInt(e))}
                                        value={quantity}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <Button type="submit" size="sm" mt="2" colorScheme="blue">
                                        Agregar
                                    </Button>
                                </form>
                            </Box>
                        ) : null}
                    </Box>
                ) : null}

                {error ? (
                    <Text color="red" mt="4" fontWeight="bold">
                        No se pudo encontrar el artículo
                    </Text>
                ) : null}
            </Box>
        </Box>
    );
};

export default SearchItemForm;
