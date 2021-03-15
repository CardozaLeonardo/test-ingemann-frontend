import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { Item, Response } from '../../models';
import * as service from '../util/service';

interface Props {

}



const SearchItemForm: React.FC = () => {

    const [term, setTerm] = React.useState<string>("");
    const [response, setResponse] = React.useState<Item | null>(null);
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<null|any>(null);

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTerm(e.currentTarget.value);
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(term != "") {
            try {
                setLoading(true);
                setError(null);
                const res = await service.get<Response<Item>>(`/item/${term}`);
                setResponse(res.data);

            }catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
    }

    return(
        <Box>
            <form onSubmit={onSubmit}>
                <Input placeholder="text..." value={term} onChange={onInputChange} />
                <Button isLoading={isLoading} type="submit" mt="4" isFullWidth colorScheme="green">Buscar</Button>
            </form>
            <Box>
                {
                    response && !error ? (
                        <Box mt="2" >
                            <Text mb="2" fontWeight="bold">Artículo:</Text>
                            <Text>Descripción: {response.description}</Text>
                            <Text>Precio: {response.price}</Text>
                        </Box>
                    ): null
                }

                {
                    error ? (
                        <Text color="red" mt="4" fontWeight="bold">
                            No se pudo encontrar el artículo
                        </Text>
                    ): null
                }
            </Box>
        </Box>
    )
}

export default SearchItemForm;