import { AntDesign } from '@expo/vector-icons';
import { Undertake } from 'Types/Undertake.Types';
import { IconButton, Stack, Text } from 'native-base';
import * as React from 'react';

interface IOuterProps {
    tasks: Undertake[];
};

export default function CompaniesTask(props: IOuterProps) {
    const { tasks } = props;

    return (
        <>
            {
                tasks.map((task, index) => (
                    <Stack key={index} mt={{ base: 2, xl: 1 }} direction="row">
                        <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                            as: AntDesign,
                            name: "check",
                            color: "green.500"
                        }} />
                        <Text ml="-4" mr={{ base: "40px", sm: 'none' }} _web={{ marginRight: 'none' }} alignSelf="center" fontSize={'md'}>{task.task}</Text>
                    </Stack>
                ))
            }
        </>
    )
}