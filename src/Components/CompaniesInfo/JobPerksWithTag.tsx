import { JobPerkFunction } from '../../Components/CompaniesList/JobPerks';
import { JobPerk } from 'Types/JobPerk.Types';
import { Flex, IconButton, Stack, Text } from 'native-base';
import * as React from 'react';

interface IOuterProps {
    jobPerks: JobPerk[];
};

export default function JobPerksWithTag(props: IOuterProps) {
    const { jobPerks } = props;

    return (
        <Flex direction={'row'} flexWrap={"wrap"}>
            {jobPerks.map((jobPerk, index) => (
                <Stack
                    key={index}
                    w={{
                        base: '30%',
                        sm: '30%',
                        md: '30%',
                        lg: '15%',
                        xl: '15%',
                    }}
                    space={4}
                    mt={{
                        base: 3,
                        sm: 3,
                        md: 3,
                        lg: 'none'
                    }}
                    textAlign="center">
                    <IconButton disabled mx={'auto'} rounded="lg" backgroundColor="white" variant="solid" shadow={5} _icon={JobPerkFunction(jobPerk.id)} />
                    <Text
                        fontSize={{
                            base: 'sm',
                            sm: 'sm',
                            md: 'md'
                        }}>{jobPerk.perkName}</Text>
                </Stack>
            ))}
        </Flex>
    )
}