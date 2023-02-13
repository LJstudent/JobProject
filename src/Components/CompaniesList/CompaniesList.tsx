import { Box, Button, Center, Divider, Flex, Heading, Stack, Text } from "native-base";
import * as React from 'react';

export default function CompaniesList() {
    return (
        <Center flex={1} my="4">
            <Box w="30%" h="40%" position="relative">
                <Box w="100%" h="100%" mt="10" overflow="hidden" rounded="3xl" backgroundColor="amber.100" position="absolute">
                    <Stack space={1} mt="10" ml="5" textAlign="center">
                        <Heading size="xl">
                            MARS
                        </Heading>
                        <Text fontSize="lg" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500">
                            Milkway Galaxy
                        </Text>
                    </Stack>
                    <Box mt="12" mx="10" textAlign="center">
                        <Stack space={1} >
                            <Text fontSize="lg">
                                Explore stange places on Mars and experience the great time in your life time
                            </Text>
                            <Flex mt="5" direction="row" justifyContent="center">
                                <Stack space={0.5}>
                                    <Text fontSize="md" fontWeight="bold">$4000-5000</Text>
                                    <Text>Per month</Text>
                                </Stack>
                                <Divider h="6" alignSelf="center" thickness="2" mx="10" orientation="vertical" />
                                <Stack space={0}>
                                    <Text fontSize="md" fontWeight="bold">8-10</Text>
                                    <Text>Employees</Text>
                                    <Text fontSize="xs">at this department</Text>
                                </Stack>
                                <Divider h="6" alignSelf="center" thickness="2" mx="10" orientation="vertical" />
                                <Stack space={0.5}>
                                    <Text fontSize="md" fontWeight="bold">Utrecht</Text>
                                    <Text>Location</Text>
                                </Stack>
                            </Flex>
                        </Stack>
                        <Divider my="2" thickness="1" orientation="horizontal" />
                        <Stack direction="row">
                            <Stack direction="row" space={0.5}>
                                <Button w="100px" rounded="full" disabled>React</Button>
                                <Button w="100px" rounded="full" disabled>Typescript</Button>
                                <Button w="100px" rounded="full" disabled>Redux</Button>
                                <Button w="50px" rounded="full" disabled>+6</Button>
                            </Stack>
                            <Stack direction="row" space={1} flex="1" justifyContent="flex-end">
                                <Button w="40px" disabled>1</Button>
                                <Button w="40px" disabled>2</Button>
                                <Button w="40px" disabled>3</Button>
                                <Button w="40px" disabled>+2</Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box w="30%" h="50%" rounded="lg" ml="8" borderColor="coolGray.200" borderWidth="1" position="absolute"
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
        </Center >
    )
} 