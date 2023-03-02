import { Avatar } from '@rneui/themed';
import * as React from 'react';
import { View } from 'react-native';

export default function UserToolbar() {

    const _onPressButton = () => {
        console.log("Hello")
    }

    return (
        <View>
            <Avatar
                size={'medium'}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                onPress={_onPressButton}
                containerStyle={{
                    marginTop: 10,
                    marginLeft: 20,
                }}
            />
        </View>
    )
}