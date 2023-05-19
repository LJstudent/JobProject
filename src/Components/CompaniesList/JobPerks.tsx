import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { JobPerk } from 'Types/JobPerk.Types';
import { EJobPerk } from "../../Types/enums/JobPerk.Enums";
import { Button, IconButton, Stack } from 'native-base';
import * as React from 'react';

interface IOuterProps {
    jobPerks: JobPerk[];
};

export function JobPerkFunction(jobPerk: EJobPerk) {

    let result: {};

    const StylingProperties = {
        color: "violet.500",
        size: 7,
    };

    switch (jobPerk) {
        case EJobPerk.None:
            result = {}
            break;
        case EJobPerk.RemoteWorkOptions:
            result = {
                as: MaterialIcons,
                name: "flight",
                ...StylingProperties
            }
            break;
        case EJobPerk.GymMembership:
            result = {
                as: MaterialIcons,
                name: "fitness-center",
                ...StylingProperties
            }
            break;
        case EJobPerk.StockOptions:
            result = {
                as: FontAwesome,
                name: "handshake-o",
                ...StylingProperties
            }
            break;
        case EJobPerk.CompanyCar:
            result = {
                as: AntDesign,
                name: "car",
                ...StylingProperties
            }
            break;
        case EJobPerk.AnnuallyGrowingSalary:
            result = {
                as: AntDesign,
                name: "areachart",
                ...StylingProperties
            }
            break;
        case EJobPerk.StartupEnvironment:
            result = {
                as: AntDesign,
                name: "rocket1",
                ...StylingProperties
            }
            break;
    }

    return result;
}



export default function JobPerks(props: IOuterProps) {
    const { jobPerks } = props;

    return (
        <Stack direction="row" space={1} mt={2} flex="1" justifyContent={{ base: undefined, sm: undefined, md: "flex-end" }}>
            {jobPerks.map((jobPerk, index) => {
                if (index < 3) {
                    return (
                        <IconButton disabled backgroundColor="white" variant="solid" shadow={3} _icon={JobPerkFunction(jobPerk.id)} />
                    )
                } else {
                    return null;
                }
            })}
            {jobPerks.length > 3 && <Button w="50px" backgroundColor="white" disabled shadow={3} _text={{ color: "violet.500" }}>{`+${jobPerks.length - 3}`}</Button>}
        </Stack>
    )
}