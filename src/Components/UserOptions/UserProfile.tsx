import { AntDesign, Feather } from '@expo/vector-icons';
import { Chip } from '@rneui/themed';
import { Box, Checkbox, Divider, Flex, FormControl, Heading, IconButton, Input, ScrollView, Stack, Text } from 'native-base';
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
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    marginBottom: 24
                }}>
                <Heading size="xl">
                    Profile
                </Heading>

                <Divider alignSelf="center" thickness="2" orientation="horizontal" />
                <Heading size="md">
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
                <Checkbox value="yes" defaultIsChecked>
                    European Union citizenship
                </Checkbox>

                <Divider alignSelf="center" thickness="2" orientation="horizontal" />
                <Heading size="md">
                    Work Experience
                </Heading>
                <Box my={5} px={6} pb={6} pt={2} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3}>
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
                    <Stack mt={5} direction={{ base: 'column', sm: 'column', md: 'row' }}>
                        <Stack direction={'column'} mb={{ base: 2, sm: 2, md: 'none' }}>
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
                            mb={{ base: 2, sm: 2, md: 'none' }}>
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
                                <Chip title="React" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Redux" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Rxjs" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="SQL" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Typescript" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Jest" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Angular" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Laravel" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                                <Chip title="Phyton" containerStyle={{ marginRight: 2, marginTop: 2 }} />
                            </Flex>
                        </Stack>
                    </Stack>
                </Box>

                <Divider alignSelf="center" thickness="2" orientation="horizontal" />
                <Heading size="md">
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

                <Divider alignSelf="center" thickness="2" orientation="horizontal" />
                <Heading size="md">
                    Education
                </Heading>
                <Box my={5} px={6} pb={6} pt={2} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} backgroundColor="white" width={'100%'}>
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
                <Divider alignSelf="center" thickness="2" orientation="horizontal" />
                <Heading size="md">
                    About
                </Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Box>
        </ScrollView>
    )
}