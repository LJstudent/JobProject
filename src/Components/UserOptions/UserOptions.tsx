import React from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { Box, Checkbox, Divider, Flex, FormControl, Heading, IconButton, Input, Stack, Text } from 'native-base';
import Animated, {
    Easing, useAnimatedStyle, useSharedValue, withTiming
} from 'react-native-reanimated';
import { Chip } from '@rneui/themed';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
if (Platform.OS === 'web') {
    // @ts-ignore
    window._frameTimestamp = null
}
// get screenwidth
const SCREENWIDTH = Dimensions.get("window").width;


export default function UserOptions() {
    const translateX = useSharedValue(-SCREENWIDTH);


    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(translateX.value, {
                        duration: 700,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    }),
                },
            ],
        };
    });

    const style1 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(translateX.value, {
                        duration: 800,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    }),
                },
            ],
        };
    });

    const style2 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(translateX.value, {
                        duration: 900,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    }),
                },
            ],
        };
    });

    translateX.value = 0
    return (
        <View
            style={{
                flexDirection: 'row',

            }}>
            <View
                style={{
                    alignItems: "flex-start",
                    flexDirection: 'column',
                    marginLeft: '2%',
                    width: 100
                }}>
                <Animated.View
                    style={[{}, style]}
                >
                    <Text>Profile</Text>
                </Animated.View>
                <Animated.View
                    style={[{}, style1]}
                >
                    <Text>Settings</Text>
                </Animated.View>
                <Animated.View
                    style={[{}, style2]}
                >
                    <Text>Job applyings</Text>
                </Animated.View>
            </View>
            <View
                style={{
                    marginLeft:'auto',
                    marginRight:'auto',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '40%',
                    flexDirection: 'column',
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
                <Box my={5} px={10} pb={10} pt={5} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} backgroundColor="white">
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
                    <Stack mt={5} direction={'row'}>
                        <Stack direction={'column'}>
                            <Heading size={'sm'}>Thinkwise</Heading>
                            <Text>September 2020-Present</Text>
                            <Text>Apeldoorn, Netherlands</Text>
                        </Stack>
                        <Stack ml={10} direction={'column'} width={'40%'}>
                            <Heading size={'sm'}>Front-end developer</Heading>
                            <Text>Working with dynamic software make develop of this software very interesting</Text>
                        </Stack>
                        <Stack ml={10} direction={'column'} width={'40%'}>
                            <Heading size={'sm'}>Code skills</Heading>
                            <Flex mt={2} direction={'row'} flexWrap={"wrap"}>
                                <Chip title="React" containerStyle={{ marginRight: 5, marginTop: 2 }} />
                                <Chip title="Redux" containerStyle={{ marginRight: 5, marginTop: 2 }} />
                                <Chip title="Rxjs" containerStyle={{ marginRight: 5, marginTop: 2 }} />
                                <Chip title="SQL" containerStyle={{ marginRight: 5, marginTop: 2 }} />
                                <Chip title="Typescript" containerStyle={{ marginRight: 5, marginTop: 2 }} />
                                <Chip title="Jest" containerStyle={{ marginRight: 5, marginTop: 2 }} />
                                <Chip title="Enzyme" containerStyle={{ marginRight: 5, marginTop: 2 }} />
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
                <Box my={5} px={10} pb={10} pt={5} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} backgroundColor="white" width={'100%'}>
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
            </View>
        </View>
    );
}