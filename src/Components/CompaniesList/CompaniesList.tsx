import { Center, ScrollView, Stack } from "native-base";
import * as React from 'react';
import Company from './Company';

export default function CompaniesList() {
    return (
        <ScrollView>
            <Stack direction={"column"} mb={20}>
                <Center>
                    <Company />
                    <Company />
                </Center>
            </Stack>
        </ScrollView>
    )
} 