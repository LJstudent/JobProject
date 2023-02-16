import { Box, Button, Center, Divider, Flex, Heading, IconButton, Stack, Text } from "native-base";
import * as React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

export default function CompaniesList() {
    return (
        <Stack direction={"column"}>
            <Center>
                <Box my="10" w={{
                    base: "95%",
                    sm: "90%",
                    md: "800px",
                    lg: "800px",
                    xl: "800px",
                }}>
                    <Box p={{ base: 2, sm: 5 }} mt="10" overflow="hidden" rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} backgroundColor="white" position="absolute">
                        <Stack space={1} mt={{
                            base: "5",
                            sm: "10",
                            md: "10",
                            lg: "10",
                            xl: "10",
                        }} ml={{
                            base: "24",
                            sm: undefined,
                        }} textAlign="center">
                            <Heading size="xl">
                                MARS
                            </Heading>
                            <Text fontSize="lg" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="500">
                                Front-end developer
                            </Text>
                        </Stack>
                        <Box mt="2" mx="10" textAlign="center">
                            <Stack space={1} >
                                <Text fontSize="lg">
                                    Explore stange places on Mars and experience the great time in your life time
                                </Text>
                                <Flex mt={{
                                    base: "-2",
                                    sm: "2",
                                }}
                                    direction="row" alignItems="center"
                                    flexWrap={{
                                        base: "wrap",
                                        sm: undefined,
                                        md: undefined,
                                        lg: undefined,
                                        xl: undefined,
                                    }}
                                    justifyContent="center">
                                    <Stack mx={{
                                        base: 2,
                                        sm: undefined
                                    }}
                                        mt={{
                                            base: 4,
                                            sm: undefined
                                        }}
                                        space={0.5}>
                                        <Text fontSize="md" fontWeight="bold">$10000-20000</Text>
                                        <Text>Per month</Text>
                                    </Stack>
                                    <Divider display={{ base: 'none', sm: undefined }} h="6" alignSelf="center" thickness="2" mx={{
                                        base: "2",
                                        sm: "6",
                                        md: "10",
                                        lg: "10",
                                        xl: "10",
                                    }} orientation="vertical" />
                                    <Stack mx={{
                                        base: 2,
                                        sm: undefined
                                    }}
                                        mt={{
                                            base: 4,
                                            sm: undefined
                                        }}
                                        space={0}>
                                        <Text fontSize="md" fontWeight="bold">250+</Text>
                                        <Text>Employees</Text>
                                        <Text fontSize="xs">at this department</Text>
                                    </Stack>
                                    <Divider display={{ base: 'none', sm: undefined }} h="6" alignSelf="center" thickness="2" mx={{
                                        base: "2",
                                        sm: "6",
                                        md: "10",
                                        lg: "10",
                                        xl: "10",
                                    }} orientation="vertical" />
                                    <Stack mx={{
                                        base: 2,
                                        sm: undefined
                                    }}
                                        mt={{
                                            base: 4,
                                            sm: undefined
                                        }}
                                        space={0.5}>
                                        <Text fontSize="md" fontWeight="bold">Amsterdam</Text>
                                        <Text>Location</Text>
                                    </Stack>
                                    <Divider display={{ base: 'none', sm: undefined }} h="6" alignSelf="center" thickness="2" mx={{
                                        base: "2",
                                        sm: "6",
                                        md: "10",
                                        lg: "10",
                                        xl: "10",
                                    }} orientation="vertical" />
                                    <Stack
                                        mx={{
                                            base: 2,
                                            sm: undefined
                                        }}
                                        mt={{
                                            base: 4,
                                            sm: undefined
                                        }}
                                        space={0.5}>
                                        <Text fontSize="md" fontWeight="bold">In house</Text>
                                        <Text>Project</Text>
                                    </Stack>
                                </Flex>
                            </Stack>
                            <Divider mt="2" thickness="1" orientation="horizontal" />
                            <Stack direction={{ base: "column", sm: "column", md: "row" }}>
                                <Flex w={"100%"} direction="row" flexWrap={'wrap'}>
                                    <Button mr={{ base: 1, sm: 2 }} mt={{ base: 1, sm: 2 }} rounded="full" disabled backgroundColor="violet.500">React</Button>
                                    <Button mr={{ base: 1, sm: 2 }} mt={{ base: 1, sm: 2 }} rounded="full" size={"sm"} disabled backgroundColor="violet.500">Typescript</Button>
                                    <Button mr={{ base: 1, sm: 2 }} mt={{ base: 1, sm: 2 }} rounded="full" disabled backgroundColor="violet.500">Redux</Button>
                                    <Button mr={{ base: 1, sm: 2 }} mt={{ base: 1, sm: 2 }} rounded="full" disabled backgroundColor="violet.500">+6</Button>
                                </Flex>
                                <Stack direction="row" space={1} mt={2} flex="1" justifyContent={{ base: undefined, sm: undefined, md: "flex-end" }}>
                                    <IconButton disabled backgroundColor="white" variant="solid" shadow={3} _icon={{
                                        as: AntDesign,
                                        name: "car",
                                        color: "coolGray.500"
                                    }} />
                                    <IconButton disabled backgroundColor="white" variant="solid" shadow={3} _icon={{
                                        as: MaterialIcons,
                                        name: "fitness-center",
                                        color: "coolGray.500"
                                    }} />
                                    <IconButton disabled backgroundColor="white" variant="solid" shadow={3} _icon={{
                                        as: AntDesign,
                                        name: "areachart",
                                        color: "coolGray.500",
                                    }} />
                                    <Button w="40px" backgroundColor="white" disabled shadow={3} _text={{ color: "coolGray.500" }}>+2</Button>
                                </Stack>
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
                </Box>
            </Center>
        </Stack>
    )
} 