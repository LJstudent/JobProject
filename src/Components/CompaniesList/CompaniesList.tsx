import { Center, ScrollView, Stack } from "native-base";
import * as React from 'react';
import Company from './Company';
import { useGetJobOffersQuery } from "../../Services/CompaniesList.services";
import FilterCompanies from "./FilterCompanies";

export default function CompaniesList() {
    const { data, error, isLoading } = useGetJobOffersQuery();

    return (
        <>
            {data && 
            <FilterCompanies jobTitle={Array.from(new Set(data.map((item) => item.jobTitle)))} />
            }
            <ScrollView>
                <Stack direction={"column"} mb={20}>
                    <Center>
                        {error ? (
                            <>Oh no, there was an error</>
                        ) : isLoading ? (
                            <>Loading...</>
                        ) : data ? (
                            data.map((companyJobOffer, index) => (
                                <Company key={index} companyJobOffer={companyJobOffer} />
                            ))
                        ) : null}
                    </Center>
                </Stack>
            </ScrollView>
        </>
    )
} 