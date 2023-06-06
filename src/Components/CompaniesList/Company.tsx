import { CompaniesList } from "Types/CompaniesList.Types";
import { Box, Divider, Flex, Heading, Stack, Text } from "native-base";
import * as React from 'react';
import CodeStacks from "./CodeStacks";
import { CurrencySalaryPerMonth } from "./CurrencySalaryPerMonth";
import JobPerks from "./JobPerks";
import { useDispatch } from "react-redux";
import { selectCompany } from "../../State/slices/company/companySlice";
import { TouchableOpacity } from "react-native";

interface IOuterProps {
    companyJobOffer: CompaniesList;
};

export default function Company(props: IOuterProps) {
    const dispatch = useDispatch();
    const { companyName, jobTitle, titleText, city, typeProject, minEmployees, maxEmployees, currencyCode, minSalaryPerMonth, maxSalaryPerMonth, codeStack, jobPerk } = props.companyJobOffer;


    return (
        <Box mt="10" w={{
            base: "90%",
            sm: "80%",
            md: "800px",
            lg: "800px",
            xl: "800px",
        }}>
            <TouchableOpacity onPress={() => dispatch(selectCompany(props.companyJobOffer))}>
                <Box p={{ base: 2, sm: 5 }} mt="10" overflow="hidden" rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} backgroundColor="white">
                    <Stack space={1}
                        mt={{
                            base: "5",
                            sm: "10",
                            md: "10",
                            lg: "10",
                            xl: "10",
                        }}
                        ml={{
                            base: '140px',
                            sm: undefined,
                        }}
                        textAlign={{ base: undefined, sm: "center" }}>
                        <Heading size="xl">
                            {companyName}
                        </Heading>
                        <Text fontSize="lg" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500">
                            {jobTitle}
                        </Text>
                    </Stack>
                    <Box mt="2" mx={{ base: 6, sm: 8, md: 10 }}>
                        <Stack space={1} >
                            <Text fontSize="lg" textAlign={{ base: undefined, sm: 'center' }}>
                                {titleText}
                            </Text>
                            <Flex mt={{
                                base: "-2",
                                sm: "2",
                            }}
                                textAlign={{
                                    base: undefined,
                                    sm: "center"
                                }}
                                direction="row"
                                alignItems="center"
                                flexWrap={{
                                    base: "wrap",
                                    sm: "wrap",
                                }}
                                justifyContent="space-between"
                            >
                                <Stack
                                    w={{
                                        base: '60%',
                                        sm: '50%',
                                        md: undefined
                                    }}
                                    mt={{
                                        base: 4,
                                        sm: undefined,
                                        md: undefined
                                    }}
                                    space={0.5}>
                                    <Text fontSize="md" fontWeight="bold">{`${CurrencySalaryPerMonth(currencyCode)} ${minSalaryPerMonth}-${maxSalaryPerMonth}`}</Text>
                                    <Text>Per month</Text>
                                </Stack>
                                <Divider display={{ base: 'none', sm: 'none', md: undefined }} h="6" alignSelf="center" thickness="2" mx={{
                                    base: "2",
                                    sm: "4",
                                    md: "10",
                                    lg: "10",
                                    xl: "10",
                                }} orientation="vertical" />
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '50%',
                                        md: undefined
                                    }}
                                    mt={{
                                        base: 4,
                                        sm: undefined,
                                        md: undefined
                                    }}
                                    space={0.5}>
                                    <Text fontSize="md" fontWeight="bold">{minEmployees >= 250 ? '250+' : `${minEmployees}-${maxEmployees}`}</Text>
                                    <Text>Employees</Text>
                                    <Text fontSize="xs">at this department</Text>
                                </Stack>
                                <Divider display={{ base: 'none', sm: 'none', md: undefined }} h="6" alignSelf="center" thickness="2" mx={{
                                    base: "2",
                                    sm: "4",
                                    md: "10",
                                    lg: "10",
                                    xl: "10",
                                }} orientation="vertical" />
                                <Stack
                                    w={{
                                        base: '60%',
                                        sm: '50%',
                                        md: undefined
                                    }}
                                    mt={{
                                        base: 4,
                                        sm: 2,
                                        md: undefined
                                    }}
                                    space={0.5}>
                                    <Text fontSize="md" fontWeight="bold">{city}</Text>
                                    <Text>Location</Text>
                                </Stack>
                                <Divider display={{ base: 'none', sm: 'none', md: undefined }} h="6" alignSelf="center" thickness="2" mx={{
                                    base: "2",
                                    sm: "4",
                                    md: "10",
                                    lg: "10",
                                    xl: "10",
                                }} orientation="vertical" />
                                <Stack
                                    w={{
                                        base: '40%',
                                        sm: '50%',
                                        md: undefined
                                    }}
                                    alignContent={'flex-end'}
                                    mt={{
                                        base: 4,
                                        sm: 2,
                                        md: undefined
                                    }}
                                    space={0.5}>
                                    <Text fontSize="md" fontWeight="bold">{typeProject}</Text>
                                    <Text>Project</Text>
                                </Stack>
                            </Flex>
                        </Stack>
                        <Divider mt="2" thickness="1" orientation="horizontal" />
                        <Stack mb={{ base: 2, sm: undefined }} direction={{ base: "column", sm: "column", md: "row" }}>
                            <CodeStacks codeStacks={codeStack} />
                            <JobPerks jobPerks={jobPerk} />
                        </Stack>
                    </Box>
                </Box>
                <Box
                    w={{
                        base: "115px",
                        sm: "150px"
                    }}
                    h={'125px'} rounded="lg" ml={{
                        base: "5",
                        sm: "8",
                        md: "8",
                        lg: "8",
                        xl: "8",
                    }}
                    borderColor="coolGray.200" backgroundColor={'amber.100'} borderWidth="1" position="absolute"
                    _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 9,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}