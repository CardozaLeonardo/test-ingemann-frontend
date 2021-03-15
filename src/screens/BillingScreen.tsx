import { Button, IconButton } from '@chakra-ui/button';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/layout';
import React, { FC, useEffect } from 'react';
import { Layout } from '../components/common';
import { InvoiceViewForm, SearchItemForm } from '../components/forms';
import { DataTable } from '../components/ui';
import { InvoiceApi, InvoiceDetail } from '../models';
import moment from 'moment';
import * as service from '../components/util/service';
import { Api } from '../components/util/api';

interface RowSpecial {
    row: Original;
}

interface Original {
    original: InvoiceDetail;
}

//const columns =

const getHeader = (action: any) => {
    return [
        {
            Header: 'Descripcion',
            accessor: 'item.description'
        },
        {
            Header: 'Precio',
            accessor: 'item.price'
        },
        {
            Header: 'Cantidad',
            accessor: 'quantity'
        },
        {
            Header: 'Subtotal',
            accessor: 'item.id',
            Cell: (e: RowSpecial) => {
                return (
                    <>
                        {e.row.original.item ? (
                            <>
                                $
                                {parseFloat(
                                    (e.row.original.quantity * e.row.original.item.price).toFixed(2)
                                )}
                            </>
                        ) : null}
                    </>
                );
            }
        },
        {
            Header: 'Opción',
            accessor: 'item.cost',
            Cell: (e: RowSpecial) => {
                return (
                    <>
                        {e.row.original.item ? (
                            <>
                                <Button
                                    onClick={() => action(e.row.original.item.id)}
                                    size="xs"
                                    colorScheme="red">
                                    Eliminar
                                </Button>
                            </>
                        ) : null}
                    </>
                );
            }
        }
    ];
};

const BillingScreen: FC = () => {
    const [details, setDetails] = React.useState<InvoiceDetail[]>([]);
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [invoice, setInvoice] = React.useState<InvoiceApi>({
        subTotal: 0,
        total: 0,
        tax: 0,
        invoiceDetails: []
    });

    const calculateValues = () => {
        var data: InvoiceApi = {
            subTotal: 0,
            total: 0,
            tax: 0,
            invoiceDetails: []
        };

        details.map((item) => {
            data.subTotal += parseFloat((item.item.price * item.quantity).toFixed(2));
            data.invoiceDetails = [
                ...data.invoiceDetails,
                { itemId: item.item.id, quantity: item.quantity }
            ];
        });
        data.tax = parseFloat((data.subTotal * 0.15).toFixed(2));
        data.total = data.tax + data.subTotal;
        setInvoice(data);
    };

    useEffect(() => {
        calculateValues();
    }, [details]);

    const removeDetail = (itemId: number) => {
        var newList = details.filter((i) => {
            return i.item?.id !== itemId;
        });
        setDetails(newList);
    };

    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            await service.post(Api.INVOICES_ENDPOINT, invoice);
            window.location.replace('./finished');
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <Text fontWeight="bold" fontSize="4xl">
                Factura
            </Text>
            <Text>
                <strong>Fecha: </strong> {moment().format('MMM Do YY')}
            </Text>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={2} mt="6">
                    <SearchItemForm detailsList={details} setList={setDetails} />
                    <Box mt="14">
                        <form onSubmit={onFormSubmit}>
                            <Flex>
                                <Button
                                    type="submit"
                                    colorScheme="green"
                                    size="lg"
                                    isLoading={isLoading}
                                    disabled={details.length < 1}>
                                    Guardar
                                </Button>
                            </Flex>
                        </form>
                    </Box>
                </GridItem>
                <GridItem colSpan={3}>
                    <Box height="230px" overflowY="scroll">
                        <DataTable columns={getHeader(removeDetail)} data={details} />
                    </Box>
                    <Box>
                        <InvoiceViewForm invoice={invoice} />
                    </Box>
                </GridItem>
            </Grid>
        </Layout>
    );
};

export default BillingScreen;
