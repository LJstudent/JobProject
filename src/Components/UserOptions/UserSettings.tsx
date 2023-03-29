import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Avatar, Button, ButtonGroup } from '@rneui/themed';
import { Box, Heading, Icon, IconButton, Image, ScrollView, Stack, Text } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import Animated, { Easing, JumpingTransition, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

// FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
if (Platform.OS === 'web') {
    // @ts-ignore
    window._frameTimestamp = null
}

// get screenheight
const SCREENHEIGHT = Dimensions.get("window").height;

export enum JobStatus {
    Denied = 'Denied',
    Pending = 'Pending',
    Approved = 'Approved'
}

function GetJobStatus({ status }: any) {

    if (status === JobStatus.Denied) {
        return <Icon as={MaterialIcons} name="highlight-off" size={'lg'} color={"danger.800"} />
    }

    if (status === JobStatus.Approved) {
        return <Icon as={MaterialIcons} name="check-circle-outline" size={'lg'} color={"tertiary.500"} />
    }

    return <Icon as={MaterialIcons} name="hourglass-empty" size={'lg'} color={"violet.500"} />;
}

export default function UserSettings() {
    const [disableBtn] = useState(false);
    const [openScreen, setOpenScreen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    //test value
    const jbStsTest = 'Approved';
    const randomHeightNumber = useSharedValue(375); //375
    const translateY = useSharedValue(0); //0
    const marginTopValue = useSharedValue(40); //40
    const messageY = useSharedValue(SCREENHEIGHT+100)

    const style = useAnimatedStyle(() => {
        return {
            height: withTiming(randomHeightNumber.value, {
                duration: 900,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
        };
    });

    const styleFilter = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withTiming(translateY.value, {
                        duration: 1500,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    }),
                },
            ],
        };
    });

    const styleMoveViewUp = useAnimatedStyle(() => {
        return {
            marginTop: withTiming(marginTopValue.value, {
                duration: 700,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
        };
    });

    const styleMessage = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withTiming(messageY.value, {
                        duration: 1200,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    }),
                },
            ],
        };
    });

    return (
        <Box flex={1} alignItems={'center'}>
            <Animated.View style={[{}, styleMoveViewUp]}>
                <Animated.View
                    style={[{ alignItems: 'center' }, styleFilter]}
                >
                    <Heading size="md" mb={2}>Filter</Heading>
                    <ButtonGroup
                        disabled={openScreen}
                        buttons={['Denied', 'Pending', 'Approved']}
                        selectedIndex={selectedIndex}
                        onPress={(value) => {
                            setSelectedIndex(value);
                        }}
                        buttonStyle={{
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderColor: '#8b5cf6',
                            borderWidth: 1,
                            borderRadius: 20,
                            width: 100,

                        }}
                        containerStyle={{
                            width: 330,
                            borderWidth: undefined,
                        }}
                        textStyle={{ fontSize: 14, color: '#8b5cf6' }}
                        innerBorderStyle={{ width: 0 }}
                        selectedButtonStyle={{ backgroundColor: '#8b5cf6' }}
                    />
                </Animated.View>
                <Animated.View
                    style={[{}, style]}
                >
                    <Box mt={4} overflow='hidden' rounded={'xl'} shadow={3} borderColor="coolGray.200" borderWidth="1" backgroundColor="white" w={{ sm: '100%', md: '400px' }} maxWidth={{ sm: '400px', md: '400px' }} h={'100%'}>
                        <Stack direction={'row'} m={4}>
                            <Box w={'100px'} height={'100px'} shadow={3} rounded='xl' backgroundColor={'white'} justifyContent='center' alignItems='center'>
                                <Image rounded={'xl'} source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }} alt="Alternate Text" size="lg" />
                            </Box>
                            <Stack ml={4} direction={'column'}>
                                <Heading>
                                    Mars
                                </Heading>
                                <Text mt={1} fontSize="lg" _light={{
                                    color: "violet.500"
                                }} fontWeight="500">
                                    Front-end developer
                                </Text>
                                <Text mt={1} fontSize="lg" _light={{
                                    color: "violet.500"
                                }} fontWeight="500">
                                    (Junior)
                                </Text>
                            </Stack>
                        </Stack>
                        <Box ml={4} mb={1}>
                            <Text fontWeight={500}>Date of applying:</Text>
                            <Text mt={1}>25-03-2023</Text>
                        </Box>
                        <Box ml={4} my={1}>
                            <Text fontWeight={500}>Status of your job apply:</Text>
                            <GetJobStatus
                                status={jbStsTest}
                            />
                        </Box>
                        <Box justifyContent='center' alignItems='center'>
                            <Stack direction={'row'} h={16} w={275} rounded="xl" shadow={3} backgroundColor="#FCF7FE">
                                <Text m={4} fontWeight={'bold'} alignSelf='center'>Check the vacancy</Text>
                                <Button
                                    title="Open"
                                    buttonStyle={{
                                        backgroundColor: '#8b5cf6',
                                        borderWidth: 1,
                                        borderColor: 'white',
                                        borderRadius: 10,
                                    }}
                                    containerStyle={{
                                        width: 100,
                                        alignSelf: 'center'
                                    }}
                                    titleStyle={{ fontSize: 14 }}
                                />
                            </Stack>
                            <Stack m={4}>
                                {jbStsTest !== JobStatus.Denied &&
                                    <Button
                                        disabled={disableBtn}
                                        onPress={() => { setOpenScreen(true), randomHeightNumber.value = 135, translateY.value = -200, marginTopValue.value = -70, messageY.value = 0 }}
                                        buttonStyle={{
                                            backgroundColor: '#8b5cf6',
                                            borderWidth: 2,
                                            borderColor: 'white',
                                            borderRadius: 20,
                                        }}
                                        containerStyle={{
                                            width: 300,
                                        }}
                                        titleStyle={{ fontSize: 14 }} >
                                        {disableBtn ? 'Waiting for response...' : 'They are interesed!'}
                                        {disableBtn ?
                                            <Icon as={FontAwesome} ml={2} size={5} name="lock" color="muted.400" />
                                            :
                                            <Icon as={FontAwesome} ml={2} size={5} name="unlock" color="white" />
                                        }
                                    </Button>
                                }
                            </Stack>
                        </Box>
                    </Box>
                </Animated.View>
            </Animated.View>
            {openScreen &&
                <Animated.View style={[{ flex: 1, alignItems: 'center', width: '100%' }, styleMessage]}>
                    <ScrollView
                        h={'100%'}
                        mt={10}
                        w={{
                            base: "90%",
                            sm: "90%",
                            md: "90%",
                            lg: "800px",
                            xl: "800px",
                        }}
                        borderColor="coolGray.200"
                        borderWidth="1"
                        shadow={3}
                        backgroundColor="white"
                        borderTopLeftRadius={'30px'}
                        borderTopRightRadius={'30px'}
                        px={{
                            base: 6,
                            sm: 12,
                            md: 12,
                            lg: 12,
                            xl: 12,
                        }}
                    >
                        <Stack mt={1} direction={'row'} justifyContent={'flex-end'}>
                            <IconButton
                                variant="ghost"
                                borderRadius="full"
                                icon={<Icon as={AntDesign} name="down" />}
                                onPress={() => { setOpenScreen(false), randomHeightNumber.value = 375, translateY.value = 0, marginTopValue.value = 40, messageY.value=SCREENHEIGHT+100 }}
                                _icon={{
                                    size: 'lg',
                                    color: "gray.400"
                                }}
                                _hover={{
                                    bg: "gray.100",
                                }}
                                _pressed={{
                                    bg: "gray.200"
                                }}
                                _focusVisible={{
                                    borderWidth: 0
                                }} />
                        </Stack>
                        <Heading mt={5} size="md" color={"coolGray.500"}>
                            Hey there I am .....
                        </Heading>
                        <Box mt={5} px={6} py={4} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} width={'100%'} backgroundColor={'white'}>
                            <Stack direction={'row'}>
                                <Avatar
                                    size={'large'}
                                    rounded
                                    source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
                                    containerStyle={{

                                    }}
                                />
                                <Stack ml={4} direction={'column'}>
                                    <Heading>
                                        Sophie Annette
                                    </Heading>
                                    <Text
                                        mt={1}
                                        w={{
                                            base: '75%',
                                            sm: '75%',
                                            md: '100%',
                                        }}
                                        fontSize="lg"
                                        _light={{
                                            color: "violet.500"
                                        }}
                                        fontWeight="500">
                                        Corporate recruiter at Mars
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack mt={2} direction={'row'}>
                                <IconButton
                                    mr={4}
                                    icon={<Icon as={AntDesign} name="linkedin-square" />}
                                    borderRadius="full"
                                    onPress={() => alert('hello')}
                                    _icon={{
                                        color: "blue.500",
                                        size: "lg"
                                    }}
                                    _hover={{
                                        bg: "blue.100",
                                    }}
                                    _pressed={{
                                        bg: "blue.200"
                                    }}
                                    _focusVisible={{
                                        borderWidth: 0
                                    }}
                                />
                                <IconButton
                                    mr={4}
                                    icon={<Icon as={AntDesign} name="mail" />}
                                    borderRadius="full"
                                    onPress={() => alert('hello')}
                                    _icon={{
                                        color: "violet.500",
                                        size: "lg"
                                    }}
                                    _hover={{
                                        bg: "violet.100",
                                    }}
                                    _pressed={{
                                        bg: "violet.200"
                                    }}
                                    _focusVisible={{
                                        borderWidth: 0
                                    }}
                                />
                                <IconButton
                                    icon={<Icon as={AntDesign} name="phone" />}
                                    borderRadius="full"
                                    onPress={() => alert('hello')}
                                    _icon={{
                                        color: "violet.500",
                                        size: "lg"
                                    }}
                                    _hover={{
                                        bg: "violet.100",
                                    }}
                                    _pressed={{
                                        bg: "violet.200"
                                    }}
                                    _focusVisible={{
                                        borderWidth: 0
                                    }}
                                />

                            </Stack>
                        </Box>
                        <Heading mt={5} size="md" color={"coolGray.500"}>
                            Our message to you:
                        </Heading>
                        <Text mt={2}>
                            Hoi Leon,
                            {"\n"}{"\n"}
                            Ik heb jouw profiel met de aanvullingen vanuit ons gesprek hier voorgelegd, en er is zeker interesse om je te spreken! We zouden je daarom graag uitnodigen voor een eerste gesprek.
                            {"\n"}{"\n"}
                            Ik hoor heel graag van je of je interesse hebt voor een kennismakingsgesprek.
                            {"\n"}{"\n"}
                            Met vriendelijke groet,
                            {"\n"}{"\n"}
                            Sophie Annette
                        </Text>
                        <Heading mt={5} size="md" color={"coolGray.500"}>
                            Your answer.....
                        </Heading>
                        <Box mt={5} px={6} py={4} rounded="3xl" borderColor="coolGray.200" borderWidth="1" shadow={3} width={'100%'} backgroundColor={'white'} marginBottom={24}
                            _web={{
                                marginBottom: { base: 24, sm: 24, md: 10 }
                            }}>
                            <Stack direction={'row'} justifyContent="space-between">
                                <IconButton
                                    ml={20}
                                    icon={<Icon as={AntDesign} name="checkcircle" />}
                                    borderRadius="full"
                                    onPress={() => alert('hello')}
                                    _icon={{
                                        color: "green.500",
                                        size: "lg"
                                    }}
                                    _hover={{
                                        bg: "green.100",
                                    }}
                                    _pressed={{
                                        bg: "green.200"
                                    }}
                                    _focusVisible={{
                                        borderWidth: 0
                                    }}
                                />
                                <IconButton
                                    mr={20}
                                    icon={<Icon as={AntDesign} name="closecircle" />}
                                    borderRadius="full"
                                    onPress={() => alert('hello')}
                                    _icon={{
                                        color: "red.500",
                                        size: "lg"
                                    }}
                                    _hover={{
                                        bg: "red.100",
                                    }}
                                    _pressed={{
                                        bg: "red.200"
                                    }}
                                    _focusVisible={{
                                        borderWidth: 0
                                    }}
                                />
                            </Stack>
                        </Box>
                    </ScrollView>
                </Animated.View>
            }
        </Box >
    );
}