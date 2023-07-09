import { AntDesign, Feather, FontAwesome, FontAwesome5, SimpleLineIcons, Fontisto } from '@expo/vector-icons';
import { Box, Flex, Heading, IconButton, ScrollView, Stack, Text } from 'native-base';
import * as React from 'react';
import { useAppSelector } from "../../State/hooks";
import JobPerksWithTag from './JobPerksWithTag';
import { CurrencySalaryPerMonth } from '../../Components/CompaniesList/CurrencySalaryPerMonth';
import { useGetCompanyInfoJobOfferQuery } from '../../Services/CompaniesList.services';
import CompaniesTask from './CompaniesTask';

export default function CompaniesInfo() {
    const companyJobOffer = useAppSelector((state) => state.selectedCompany);
    const { error, isLoading, data } = useGetCompanyInfoJobOfferQuery({ companyId: companyJobOffer.companyId, jobOfferId: companyJobOffer.id })

    return (
        <Box w={{
            base: "100%",
            sm: "90%",
            md: "80%",
            lg: "70%",
            xl: "60%",
        }} h={'100%'} backgroundColor={'white'} mx="auto">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <ScrollView>
                    <Heading pl={{
                        base: 6,
                        sm: 12,
                        md: 12,
                        lg: 12,
                        xl: 12,
                    }} pt={12} size="xl">
                        {companyJobOffer.companyName}
                    </Heading>
                    <Text pl={{
                        base: 6,
                        sm: 12,
                        md: 12,
                        lg: 12,
                        xl: 12,
                    }} mt={1} fontSize="lg" _light={{
                        color: "violet.500"
                    }} _dark={{
                        color: "violet.400"
                    }} fontWeight="500">
                        {companyJobOffer.jobTitle}
                    </Text>
                    <Box pl={{
                        base: 6,
                        sm: 12,
                        md: 12,
                        lg: 12,
                        xl: 12,
                    }} mt={20} pr={4} backgroundColor={'white'} borderWidth={1} paddingBottom={5} borderTopLeftRadius={'30px'} borderTopRightRadius={'30px'}>
                        <Heading mb={5} mt={5} size="md">
                            {`This is ${companyJobOffer.companyName}`}
                        </Heading>
                        <Text fontSize="md">
                            {data.companyInfo}
                        </Text>
                        <Heading mb={5} mt={5} size="md">
                            {companyJobOffer.jobTitle}
                        </Heading>
                        <Text fontSize="md">
                          {data.jobInfo}
                        </Text>

                        <Box>
                            <Stack mt={10} direction="row">
                                <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                    as: Feather,
                                    name: "user",
                                    color: "black"
                                }} />
                                <Heading ml="-4" alignSelf="center" size={'sm'}>What you’ll do</Heading>
                            </Stack>
                            <CompaniesTask tasks={data.undertake} />
                        </Box>

                        <Box>
                            <Heading mt={10} size={'sm'}>Who you are</Heading>
                            <Flex mt={2} direction={'row'} flexWrap={"wrap"}>
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '20%',
                                        xl: '20%',
                                    }} 
                                    mr={5}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }}>
                                    <Stack direction={'row'}
                                        mt={{
                                            base: 'none',
                                            sm: 'none',
                                            md: -3,
                                            lg: 'none'
                                        }}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: FontAwesome,
                                            name: "code",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Code</Heading>
                                    </Stack>
                                    <Stack direction={'row'} flexWrap={'wrap'}>
                                        {companyJobOffer.codeStack.map((codestack, index) => (
                                            <Text key={index} mt={1} mr={1} fontSize={'md'}>{codestack.codeName}</Text>
                                        ))}
                                    </Stack>
                                </Stack>
                                <Stack
                                    w={{
                                        base: '30%',
                                        sm: '30%',
                                        md: '30%',
                                        lg: '15%',
                                        xl: '15%',
                                    }} mr={5}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 'none'
                                    }}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: SimpleLineIcons,
                                            name: "trophy",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Work experience</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{`${data.role} years`}</Text>
                                </Stack>
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '20%',
                                        xl: '20%',
                                    }}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }} mr={5}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: Feather,
                                            name: "users",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Team effort</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{data.teamEffort}</Text>
                                </Stack>
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '20%',
                                        xl: '20%',
                                    }}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }}
                                    mr={5}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: Feather,
                                            name: "target",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Target</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{data.target}</Text>
                                </Stack>
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '20%',
                                        xl: '20%',
                                    }}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }} mr={5}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: AntDesign,
                                            name: "like2",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Like</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{data.like}</Text>
                                </Stack>
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '20%',
                                        xl: '20%',
                                    }}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }}
                                    mr={5}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: FontAwesome,
                                            name: "graduation-cap",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Graduation</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{`You have a ${data.graduation.degreeTitle}`}</Text>
                                </Stack>
                            </Flex>
                        </Box>

                        <Box>
                            <Stack mt={10} direction="row">
                                <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                    as: FontAwesome5,
                                    name: "building",
                                    color: "black"
                                }} />
                                <Heading ml="-4" alignSelf="center" size={'sm'}>What we offer</Heading>
                            </Stack>
                            <Flex mt={2} direction={'row'} flexWrap={"wrap"}>
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '20%',
                                        xl: '20%',
                                    }}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }} mr={5}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: Fontisto,
                                            name: "money-symbol",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Salary</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{`${CurrencySalaryPerMonth(companyJobOffer.currencyCode)}${companyJobOffer.minSalaryPerMonth}-${companyJobOffer.maxSalaryPerMonth} each month`}</Text>
                                </Stack>
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '40%',
                                        md: '40%',
                                        lg: '20%',
                                        xl: '20%',
                                    }}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }}
                                    mr={5}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: Feather,
                                            name: "users",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Team</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{`A development department of ${data.teamSize} people working on our product`}</Text>
                                </Stack>
                                <Stack
                                    w={{
                                        base: '70%',
                                        sm: '70%',
                                        md: '50%',
                                        lg: '40%',
                                        xl: '40%',
                                    }}
                                    mt={{
                                        base: 3,
                                        sm: 3,
                                        md: 3,
                                        lg: 'none'
                                    }}
                                    mr={5}>
                                    <Stack direction={'row'}>
                                        <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                            as: FontAwesome5,
                                            name: "building",
                                            color: "violet.500"
                                        }} />
                                        <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>{`Office in ${companyJobOffer.city}`}</Heading>
                                    </Stack>
                                    <Text mt={1} fontSize={'md'}>{data.officeInfo}</Text>
                                </Stack>
                            </Flex>

                        </Box>
                        <Box>
                            <Heading mt={10} size={'sm'}>Extra's</Heading>
                            <JobPerksWithTag jobPerks={companyJobOffer.jobPerk} />
                        </Box>
                    </Box>
                </ScrollView >
            ) : null}
        </Box >
    )
}