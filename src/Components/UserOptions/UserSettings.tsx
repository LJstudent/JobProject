import { Button, ButtonGroup } from '@rneui/themed';
import { Box, Heading, Stack, Text, Icon, Image, Center } from 'native-base';
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
if (Platform.OS === 'web') {
    // @ts-ignore
    window._frameTimestamp = null
}

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
    const [selectedIndex, setSelectedIndex] = useState(0);
    //test value
    const jbStsTest = 'Approved';
    const offset = useSharedValue(0);

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(offset.value * 255, {
                        duration: 700,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    }),
                },
            ],
        };
    });

    return (
        <Box flex={1} alignItems={'center'} mt={10}>
            <Heading size="md" mb={2}>Filter</Heading>
            <ButtonGroup
                buttons={['Denied', 'Pending', 'Approved']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                buttonStyle={{
                    backgroundColor: 'white',
                    borderColor: '#8b5cf6',
                    borderWidth: 1,
                    borderRadius: 20,
                    width: 100,
                    marginHorizontal: 4,

                }}
                containerStyle={{
                    borderWidth: undefined,
                    borderEndWidth: undefined,

                }}
                textStyle={{ fontSize: 14, color: '#8b5cf6' }}
                innerBorderStyle={{ width: 0 }}
                selectedButtonStyle={{ backgroundColor: '#8b5cf6' }}
            />
            <Animated.View
                style={[{}, style]}
            >
                <Box mt={4} rounded={'xl'} shadow={9} backgroundColor="white" w={{ sm: '80%', md: '400px' }} maxWidth={{ sm: '400px', md: '400px' }}>
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
                        </Stack>
                    </Stack>
                    <Box ml={4} my={1}>
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
                                    onPress={() => (offset.value = Math.random())}
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
        </Box>
    );
}