import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomParamList } from 'Components/Navigation/RootStackParamList';
import { Button, Icon, useMediaQuery, Text } from 'native-base';
import React from 'react';
import { Dimensions, Platform, View, StyleSheet } from 'react-native';
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


export default function UserOptions() {
    const [isSmallScreen] = useMediaQuery({
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
            {isSmallScreen ?
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            alignItems: "flex-start",
                            flexDirection: 'column',
                        }}>
                        <Animated.View
                            style={[{ width: '100%' }, style]}
                        >
                            <Button onPress={() => alert("hello")} mt={2} paddingLeft={5} justifyContent={'flex-start'} borderRadius={'2xl'} variant={'ghost'} mb={2} leftIcon={<Icon as={Feather} size='md' name="user" marginRight={4} />} _text={{
                                fontSize: {
                                    base: 'none',
                                    sm: 'sm',
                                    md: 'sm',
                                    lg: 'md',
                                    xl: 'lg',
                                }
                            }}>
                                Profile
                            </Button>
                        </Animated.View>
                        <Animated.View
                            style={[{ width: '100%' }, style1]}
                        >
                            <Button paddingLeft={5} justifyContent={'flex-start'} borderRadius={'2xl'} variant={'ghost'} mb={2} leftIcon={<Icon as={Feather} size='md' name="settings" marginRight={4} />} _text={{
                                fontSize: {
                                    base: 'none',
                                    sm: 'sm',
                                    md: 'sm',
                                    lg: 'md',
                                    xl: 'lg',
                                }
                            }}>
                                Settings
                            </Button>
                        </Animated.View>
                        <Animated.View
                            style={[{ width: '100%' }, style2]}
                        >
                            <Button paddingLeft={5} justifyContent={'flex-start'} borderRadius={'2xl'} variant={'ghost'} mb={2} leftIcon={<Icon as={Feather} size='md' name="inbox" marginRight={4} />} _text={{
                                fontSize: {
                                    base: 'none',
                                    sm: 'sm',
                                    md: 'sm',
                                    lg: 'md',
                                    xl: 'lg',
                                }
                            }}>
                                Job Applyings
                            </Button>
                        </Animated.View>
                    </View>
                    <UserProfile />
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
                            height: 90,
                            ...styles.shadow
                        }

                    }}
                    sceneContainerStyle={{ backgroundColor: 'white' }}>
                    <Tab.Screen name="UserProfile" component={UserProfile} options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Icon as={Feather} name="user" size={'lg'} color={focused ? 'violet.500' : '#748c94'} />
                                <Text fontSize={12} color={focused ? 'violet.500' : '#748c94'}>
                                    Profile
                                </Text>
                            </View>
                        ),
                    }} />
                    <Tab.Screen name="UserSettings" component={UserSettings} options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Icon as={Feather} name="settings" size={'lg'} color={focused ? 'violet.500' : '#748c94'} />
                                <Text fontSize={12} color={focused ? 'violet.500' : '#748c94'}>
                                    Settings
                                </Text>
                            </View>
                        ),
                    }} />
                    <Tab.Screen name="JobApplyings" component={UserJobApplyings} options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, width: 100 }}>
                                <Icon as={Feather} name="inbox" size={'lg'} color={focused ? 'violet.500' : '#748c94'} />
                                <Text fontSize={12} color={focused ? 'violet.500' : '#748c94'}>
                                    Job applyings
                                </Text>
                            </View>
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