import { Avatar } from '@rneui/themed';
import { Props } from 'Components/Navigation/RootStackParamList';
import * as React from 'react';
import { View } from 'react-native';

export default function UserToolbar({ navigation }: Props) {
    return (
        <View>
            <Avatar
                size={'medium'}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                onPress={() => navigation.navigate('UserOptions')}
                containerStyle={{
                    marginTop: 10,
                    marginLeft: 20,
                }}
            />
        </View>
    )
}