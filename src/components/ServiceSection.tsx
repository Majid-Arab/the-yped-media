"use client"

import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Group,
    useMantineTheme,
} from '@mantine/core';
import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
    IconReceipt,
    IconReceiptTax,
    IconReport,
    IconCoin,
} from '@tabler/icons-react';
import classes from './ServiceSection.module.css';

const mockdata = [
    { title: 'Portfolio Website', icon: IconCreditCard, color: 'violet' },
    { title: '3D Website', icon: IconBuildingBank, color: 'indigo' },
    { title: 'UI / UX', icon: IconRepeat, color: 'blue' },
    { title: 'Interactive Website', icon: IconReceiptRefund, color: 'green' },
    { title: 'landing pages', icon: IconReceipt, color: 'teal' },
    { title: 'Agency Website', icon: IconReceiptTax, color: 'cyan' },
    { title: 'Product Website', icon: IconReport, color: 'pink' },
    { title: 'Ecommerce', icon: IconCoin, color: 'red' },
    // { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
];

export function ServiceSection() {
    const theme = useMantineTheme();

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size="6rem" />
            <Text size="xs" mt={7} className={classes.text}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Group mb={50}>
                <Text className={classes.title}>Project Types we Specialize in</Text>
            </Group>
            <SimpleGrid cols={3} mt="md" spacing="xl" verticalSpacing="xl">
                {items}
            </SimpleGrid>
        </Card>
    );
}