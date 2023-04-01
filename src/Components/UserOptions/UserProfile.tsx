import { AntDesign, Feather } from '@expo/vector-icons';
import { Chip } from '@rneui/themed';
import { Box, Button, Checkbox, Divider, Flex, FormControl, Heading, Icon, IconButton, Input, ScrollView, Stack, Text, TextArea } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

export default function UserProfile() {
    return (
        <ScrollView>
            <Box
                w={{
                    base: '90%',
                    sm: '90%',
                    md: '70%',
                    lg: '60%',
                    xl: '50%',
                }}
                style={{
                    marginTop: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    marginBottom: 24
                }}>

                <Stack direction={'row'} w={'100%'} justifyContent="space-between">
                    <Heading alignSelf="center" size="xl">
                        Profile
                    </Heading>
                    <Button
                        shadow={2}
                        onPress={() => alert("hello")}
                        borderRadius={'2xl'}
                        mb={2}
                        w={24}
                        leftIcon={<Icon as={AntDesign} size="md" name="save" mr={0.5} />}
                        bg="green.600"
                        _hover={{
                            bg: "green.700",
                        }}
                        _pressed={{
                            bg: "green.700",
                        }}
                    >
                        Save
                    </Button>
                </Stack>
                <Divider alignSelf="center" thickness="2" orientation="horizontal" mb={2} />
                <Heading size="md" mb={2}>
                    General info
                </Heading>
                <FormControl>
                    <FormControl.Label>Your name</FormControl.Label>
                    <Input defaultValue='Leon' />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Birth date</FormControl.Label>
                    <Input defaultValue='15-12-1995' />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Country</FormControl.Label>
                    <Input defaultValue='The Netherlands' />
                </FormControl>
                <FormControl>
                    <FormControl.Label>City</FormControl.Label>
                    <Input defaultValue='Utrecht' />
                </FormControl>
                <Checkbox colorScheme={"purple"} value="yes" defaultIsChecked my={4} >
                    European Union citizenship
                </Checkbox>

                <Divider alignSelf="center" thickness="2" orientation="horizontal" mb={2} />
                <Stack w={'100%'} direction={'row'} alignItems="center" justifyContent="space-between">
                    <Heading size="md">
                        Work Experience
                    </Heading>
                    <IconButton onPress={() => alert(Dimensions.get("window").width)} variant="ghost" _icon={{
                        as: AntDesign,
                        name: "plus",
                        color: 'black'
                    }} />
                </Stack>
                <Box mt={3} mb={5} px={6} pb={6} pt={2} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} width={'100%'} backgroundColor={'white'}>
                    <Stack justifyContent={'end'} direction={'row'}>
                        <IconButton variant="ghost" _icon={{
                            as: Feather,
                            name: "edit",
                            color: 'black'
                        }} />
                        <IconButton onPress={() => alert(Dimensions.get("window").width)} variant="ghost" _icon={{
                            as: AntDesign,
                            name: "delete",
                            color: 'black'
                        }} />
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'column', md: 'row' }}>
                        <Stack direction={'column'} mb={{ base: 4, sm: 4, md: 'none' }}>
                            <Heading size={'sm'}>Thinkwise</Heading>
                            <Text>September 2020-Present</Text>
                            <Text>Apeldoorn, Netherlands</Text>
                        </Stack>
                        <Stack ml={{
                            md: 5,
                            lg: 6,
                            xl: 7,
                        }}
                            direction={'column'}
                            w={{
                                md: '30%',
                                lg: '35%',
                                xl: '40%',
                            }}
                            mb={{ base: 4, sm: 4, md: 'none' }}>
                            <Heading size={'sm'}>Front-end developer</Heading>
                            <Text>Working with dynamic software make develop of this software very interesting</Text>
                        </Stack>
                        <Stack
                            ml={{
                                md: 5,
                                lg: 6,
                                xl: 7,
                            }}
                            direction={'column'}
                            w={{
                                md: '30%',
                                lg: '35%',
                                xl: '40%',
                            }}>
                            <Heading size={'sm'}>Code skills</Heading>
                            <Flex mt={2} mr={{ lg: 0, xl: 7 }} direction={'row'} flexWrap={"wrap"}>
                                <Chip title="React" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Redux" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Rxjs" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="SQL" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Typescript" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Jest" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Angular" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Laravel" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Phyton" color={'#8b5cf6'} containerStyle={{ marginRight: 2, marginTop: 2 }} />
                            </Flex>
                        </Stack>
                    </Stack>
                </Box>

                <Divider alignSelf="center" thickness="2" orientation="horizontal" mb={2} />
                <Heading size="md" mb={2}>
                    Links
                </Heading>
                <FormControl>
                    <FormControl.Label>Github</FormControl.Label>
                    <Input defaultValue='Leon' />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Gitlab</FormControl.Label>
                    <Input defaultValue='Leon' />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Linkedin</FormControl.Label>
                    <Input defaultValue='Leon' />
                </FormControl>

                <Divider alignSelf="center" thickness="2" orientation="horizontal" mt={4} mb={2} />
                <Stack w={'100%'} direction={'row'} alignItems="center" justifyContent="space-between">
                    <Heading size="md">
                        Education
                    </Heading>
                    <IconButton onPress={() => alert(Dimensions.get("window").width)} variant="ghost" _icon={{
                        as: AntDesign,
                        name: "plus",
                        color: 'black'
                    }} />
                </Stack>
                <Box mt={3} mb={5} px={6} pb={6} pt={2} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} width={'100%'} backgroundColor={'white'}>
                    <Stack justifyContent={'end'} direction={'row'}>
                        <IconButton variant="ghost" _icon={{
                            as: Feather,
                            name: "edit",
                            color: 'black'
                        }} />
                        <IconButton variant="ghost" _icon={{
                            as: AntDesign,
                            name: "delete",
                            color: 'black'
                        }} />
                    </Stack>
                    <Stack direction={'column'}>
                        <Heading size={'sm'}>Avans Hogeschool</Heading>
                        <Text>September 2018-Present</Text>
                        <Text>Bachelor of science IT</Text>
                    </Stack>
                </Box>
                <Divider alignSelf="center" thickness="2" orientation="horizontal" mb={2} />
                <Heading size="md" mb={2}>
                    About
                </Heading>
                <TextArea width={'100%'} autoCompleteType={false} defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
            </Box>
        </ScrollView>
    )
}