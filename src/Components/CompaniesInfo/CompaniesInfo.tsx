import { Box, Heading, IconButton, ScrollView, Stack, Text } from 'native-base';
import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function CompaniesInfo() {
    return (
        <Box w={'50%'} h={'100%'} backgroundColor={'white'} borderWidth={1} mx="auto">
            <ScrollView>
                <Heading pl={12} pt={12} size="xl">
                    MARS
                </Heading>
                <Text pl={12} mt={1} fontSize="lg" _light={{
                    color: "violet.500"
                }} _dark={{
                    color: "violet.400"
                }} fontWeight="500">
                    Front-end developer
                </Text>
                <Box pl={12} mt={20} pr={4} backgroundColor={'blue.100'} paddingBottom={5} borderTopLeftRadius={'30px'} borderTopRightRadius={'30px'}>
                    <Heading mb={5} mt={5} size="md">
                        This is Mars
                    </Heading>
                    <Text fontSize="md">
                        Adyen provides payments, data, and financial products in a single solution for customers like Facebook, Uber, H&M, and Microsoft - making us the financial technology platform of choice. At Adyen, everything we do is engineered for ambition.<br></br><br></br>
                        For our teams, we create an environment with opportunities for our people to succeed, backed by the culture and support to ensure they are enabled to truly own their careers.
                        We are motivated individuals who tackle unique technical challenges at scale and solve them as a team. Together, we deliver innovative and ethical solutions that help businesses achieve their ambitions faster.
                    </Text>
                    <Heading mb={5} mt={5} size="md">
                        Front-end developer
                    </Heading>
                    <Text fontSize="md">
                        Next to our payments offering Adyen is also building an entire suite of embedded financial services for platforms such as marketplaces, SaaS platforms, on-demand platforms or crowdfunding platforms. Our Chicago engineering hub is focusing on that!
                        <br></br><br></br>
                        We give platforms the ability to manage their global payments ecosystem in one place through API integrations or by using our hosted onboarding solution. They can run onboarding, verification and compliance processes for various markets, process payments and trigger faster payouts and bank transfers in all preferred currencies. Additionally they can enable financial services such as issuing, capital and banking.
                        <br></br><br></br>
                        We are looking for a frontend engineer that can help take our merchant onboarding experience through hosted pages to the next level. Additionally you might be involved with building shared frontend components and libraries that will allow us to efficiently operate our suite of embedded financial services.
                    </Text>
                    <Box mt={5}>
                        <Stack mt={{base: 2, xl: 1}} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: Feather,
                                name: "user",
                                color: "black"
                            }} />
                            <Heading ml="-4" alignSelf="center" size={'sm'}>What you’ll do</Heading>
                        </Stack>
                        <Stack mt={{base: 2, xl: 1}} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>You will be part of one of our many multidisciplinary streams, creating or enhancing the user interface for both internal users and our merchants.</Text>
                        </Stack>
                        <Stack mt={{base: 2, xl: 1}} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>You will be responsible for the full life cycle of your developments. This includes communicating with stakeholders (product owners, product designers, account managers, merchants e.g.), testing, iterating purposefully, and monitoring the impact of your projects.</Text>
                        </Stack>
                        <Stack mt={{base: 2, xl: 1}} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>You will have the freedom to identify and improve parts of the platform to make it more consistent, robust and scalable.</Text>
                        </Stack>
                        <Stack mt={{base: 2, xl: 1}} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>There are Frontend developers in many teams and keeping in sync with this group is important for maintaining our scalability. You will collaborate across streams and time zones to make things happen</Text>
                        </Stack>
                    </Box>
                    <p>Trefwoorden code welke talen, trophy hoeveel jaar werkervaring, team users(feather) kan, extra like , target, school graduationcap</p>
                </Box>
            </ScrollView>
        </Box >
    )
}