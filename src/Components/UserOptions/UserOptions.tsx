import { Feather } from '@expo/vector-icons';
import { Button, Icon } from 'native-base';
import React from 'react';
import { Dimensions, Platform, View } from 'react-native';
import Animated, {
    Easing, useAnimatedStyle, useSharedValue, withTiming
} from 'react-native-reanimated';
import UserProfile from './UserProfile';

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
                }}>
                <Animated.View
                    style={[{ width: '100%' }, style]}
                >
                    <Button onPress={() => alert("hello")} mt={2} paddingLeft={5} justifyContent={'flex-start'} borderRadius={'2xl'} variant={'ghost'} mb={2} leftIcon={<Icon as={Feather} size='md' name="user" marginRight={4} />} _text={{
                        fontSize: {
                            base: 'none',
                            sm: 'sm',
                            md: 'md',
                            lg: 'lg',
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
                            md: 'md',
                            lg: 'lg',
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
                            md: 'md',
                            lg: 'lg',
                            xl: 'lg',
                        }
                    }}>
                        Job Applyings
                    </Button>
                </Animated.View>
            </View>
            <UserProfile />
        </View>
    );
}