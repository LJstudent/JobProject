import { CodeStack } from 'Types/CodeStack.Types';
import { Button, Flex } from 'native-base';
import * as React from 'react';

interface IOuterProps {
    codeStacks: CodeStack[];
};

export default function CodeStacks(props: IOuterProps) {
    const { codeStacks } = props;

    return (
        <Flex w={"100%"} direction="row" flexWrap={'wrap'}>
            {codeStacks.map((codeStack, index) => {
                if (index < 3) {
                    return (
                        <Button key={codeStack.id} mr={{ base: 1, sm: 2 }} mt={{ base: 1, sm: 2 }} rounded="full" disabled backgroundColor="violet.500" >{codeStack.codeName}</Button>
                    )
                } else {
                    return null;
                }
            })}
            {codeStacks.length > 3 && <Button mr={{ base: 1, sm: 2 }} mt={{ base: 1, sm: 2 }} rounded="full" disabled backgroundColor="violet.500" >{`+${codeStacks.length - 3}`}</Button>}
        </Flex>
    )
}