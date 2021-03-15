import { Text, Wrap } from '@chakra-ui/layout';
import React, { FC } from 'react';
import { Card, Layout } from '../components/common';
import { LinkTo } from '../components/ui';

interface Props {}

const HomeScreen: FC<Props> = () => {
    const cardItems = [
        {
            title: 'Artículos',
            description: '',
            src: `${process.env.PUBLIC_URL}/assets/images/cacao.jpg`,
            route: '/items'
        },
        {
            title: 'Facturación',
            description: '',
            src: `${process.env.PUBLIC_URL}/assets/images/calculator.jpg`,
            route: '/billing'
        }
    ];

    return (
        <Layout>
            <Text as="h1" fontSize="2xl" fontWeight="bold" color="gray.600" marginBottom="4">
                Secciones
            </Text>
            <Wrap spacing="6">
                {cardItems.map((item, index) => (
                    <LinkTo to={item.route} key={index}>
                        <Card title={item.title} description={item.description} src={item.src} />
                    </LinkTo>
                ))}
            </Wrap>
        </Layout>
    );
};

export default HomeScreen;
