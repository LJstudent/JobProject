import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ListProps, RootBottomParamList } from 'Components/Navigation/RootStackParamList';
import { Box, Button, Icon, Text, useMediaQuery } from 'native-base';
import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import Animated, {
    Easing, useAnimatedStyle, useSharedValue, withTiming
} from 'react-native-reanimated';
import UserJobApplyings from './UserJobApplyings';
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';

// FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
if (Platform.OS === 'web') {
    // @ts-ignore
    window._frameTimestamp = null
}
// get screenwidth
const SCREENWIDTH = Dimensions.get("window").width;

// create tab for bottom tab navigator
const Tab = createBottomTabNavigator<RootBottomParamList>();

// create tab for list tab navigator
const Stack = createStackNavigator<RootBottomParamList>();

function MyStackUserOptions() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}>
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
            <Stack.Screen name="JobApplyings" component={UserJobApplyings} />
        </Stack.Navigator>
    );
}



export default function UserOptions({ navigation }: ListProps) {
    const [isBigScreen] = useMediaQuery({
        minWidth: 870,
    });
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
        <View style={{ flex: 1 }}>
            {isBigScreen ?
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View
                        style={{
                            marginTop: 20,
                            alignItems: "flex-start",
                            flexDirection: 'column',
                        }}>
                        <Animated.View
                            style={[{ width: '100%' }, style]}
                        >
                            <Button onPress={() => navigation.navigate('UserProfile')}
                                mt={2} paddingLeft={5}
                                justifyContent={'flex-start'}
                                borderRadius={'2xl'}
                                variant={'ghost'}
                                mb={2} leftIcon={<Icon as={Feather} color={"violet.500"} size='md' name="user" marginRight={4} />}
                                _text={{
                                    color: "violet.500",
                                    fontSize: {
                                        base: 'none',
                                        sm: 'sm',
                                        md: 'sm',
                                        lg: 'md',
                                        xl: 'lg',
                                    }
                                }}
                                _hover={{
                                    bg: "violet.100",
                                }}
                                _pressed={{
                                    bg: "violet.200",
                                }}
                            >
                                Profile
                            </Button>
                        </Animated.View>
                        <Animated.View
                            style={[{ width: '100%' }, style1]}
                        >
                            <Button
                                onPress={() => navigation.navigate('UserSettings')}
                                paddingLeft={5}
                                justifyContent={'flex-start'}
                                borderRadius={'2xl'}
                                variant={'ghost'}
                                mb={2}
                                leftIcon={<Icon as={Feather} color={"violet.500"} size='md' name="settings" marginRight={4} />}
                                _text={{
                                    color: "violet.500",
                                    fontSize: {
                                        base: 'none',
                                        sm: 'sm',
                                        md: 'sm',
                                        lg: 'md',
                                        xl: 'lg',
                                    }
                                }}
                                _hover={{
                                    bg: "violet.100",
                                }}
                                _pressed={{
                                    bg: "violet.200",
                                }}
                            >
                                Settings
                            </Button>
                        </Animated.View>
                        <Animated.View
                            style={[{ width: '100%' }, style2]}
                        >
                            <Button
                                onPress={() => navigation.navigate('JobApplyings')}
                                paddingLeft={5}
                                justifyContent={'flex-start'}
                                borderRadius={'2xl'}
                                variant={'ghost'}
                                mb={2}
                                leftIcon={<Icon as={Feather} color={"violet.500"} size='md' name="inbox" marginRight={4} />}
                                _text={{
                                    color: "violet.500",
                                    fontSize: {
                                        base: 'none',
                                        sm: 'sm',
                                        md: 'sm',
                                        lg: 'md',
                                        xl: 'lg',
                                    }
                                }}
                                _hover={{
                                    bg: "violet.100",
                                }}
                                _pressed={{
                                    bg: "violet.200",
                                }}
                            >
                                Job Applyings
                            </Button>
                        </Animated.View>
                    </View>
                    <MyStackUserOptions />
                </View>
                :
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarStyle: {
                            position: 'absolute',
                            bottom: 25,
                            left: 20,
                            right: 20,
                            backgroundColor: '#ffffff',
                            borderRadius: 15,
                            height: 65,
                            ...styles.shadow
                        }

                    }}
                    sceneContainerStyle={{ backgroundColor: 'white' }}>
                    <Tab.Screen name="UserProfile" component={UserProfile} options={{
                        tabBarIcon: ({ focused }) => (
                            <Box _web={{ top: 0 }} top={5} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Icon as={Feather} name="user" size={'lg'} color={focused ? 'violet.500' : '#748c94'} />
                                <Text fontSize={12} color={focused ? 'violet.500' : '#748c94'}>
                                    Profile
                                </Text>
                            </Box>
                        ),
                    }} />
                    <Tab.Screen name="UserSettings" component={UserSettings} options={{
                        tabBarIcon: ({ focused }) => (
                            <Box _web={{ top: 0 }} top={5} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Icon as={Feather} name="settings" size={'lg'} color={focused ? 'violet.500' : '#748c94'} />
                                <Text fontSize={12} color={focused ? 'violet.500' : '#748c94'}>
                                    Settings
                                </Text>
                            </Box>
                        ),
                    }} />
                    <Tab.Screen name="JobApplyings" component={UserJobApplyings} options={{
                        tabBarIcon: ({ focused }) => (
                            <Box _web={{ top: 0 }} top={5} style={{ alignItems: 'center', justifyContent: 'center', width: 100 }}>
                                <Icon as={Feather} name="inbox" size={'lg'} color={focused ? 'violet.500' : '#748c94'} />
                                <Text fontSize={12} color={focused ? 'violet.500' : '#748c94'}>
                                    Job applyings
                                </Text>
                            </Box>
                        ),
                    }} />
                </Tab.Navigator>}
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});