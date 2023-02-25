import { Box, Flex, Heading, IconButton, ScrollView, Stack, Text } from 'native-base';
import * as React from 'react';
import { Feather, FontAwesome, AntDesign, SimpleLineIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function CompaniesInfo() {
    return (
        <Box w={{
            base: "100%",
            sm: "90%",
            md: "80%",
            lg: "70%",
            xl: "60%",
        }} h={'100%'} backgroundColor={'white'} mx="auto">
            <ScrollView>
                <Heading pl={{
                    base: 6,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                }} pt={12} size="xl">
                    MARS
                </Heading>
                <Text pl={{
                    base: 6,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                }} mt={1} fontSize="lg" _light={{
                    color: "violet.500"
                }} _dark={{
                    color: "violet.400"
                }} fontWeight="500">
                    Front-end developer
                </Text>
                <Box pl={{
                    base: 6,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                }} mt={20} pr={4} backgroundColor={'white'} borderWidth={1} paddingBottom={5} borderTopLeftRadius={'30px'} borderTopRightRadius={'30px'}>
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

                    <Box>
                        <Stack mt={10} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: Feather,
                                name: "user",
                                color: "black"
                            }} />
                            <Heading ml="-4" alignSelf="center" size={'sm'}>What you’ll do</Heading>
                        </Stack>
                        <Stack mt={{ base: 2, xl: 1 }} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>You will be part of one of our many multidisciplinary streams, creating or enhancing the user interface for both internal users and our merchants.</Text>
                        </Stack>
                        <Stack mt={{ base: 2, xl: 1 }} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>You will be responsible for the full life cycle of your developments. This includes communicating with stakeholders (product owners, product designers, account managers, merchants e.g.), testing, iterating purposefully, and monitoring the impact of your projects.</Text>
                        </Stack>
                        <Stack mt={{ base: 2, xl: 1 }} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>You will have the freedom to identify and improve parts of the platform to make it more consistent, robust and scalable.</Text>
                        </Stack>
                        <Stack mt={{ base: 2, xl: 1 }} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: AntDesign,
                                name: "check",
                                color: "green.500"
                            }} />
                            <Text ml="-4" alignSelf="center" fontSize={'md'}>There are Frontend developers in many teams and keeping in sync with this group is important for maintaining our scalability. You will collaborate across streams and time zones to make things happen.</Text>
                        </Stack>
                    </Box>

                    <Box>
                        <Heading mt={10} size={'sm'}>Who you are</Heading>
                        <Flex mt={2} direction={'row'} flexWrap={"wrap"}>
                            <Stack
                                w={{
                                    base: '40%',
                                    sm: '40%',
                                    md: '40%',
                                    lg: '20%',
                                    xl: '20%',
                                }} mr={5}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: FontAwesome,
                                        name: "code",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Code</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>React, SQL, Redux, Typescript, Jest and Enzyme</Text>
                            </Stack>
                            <Stack w={'15%'} mr={5}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 'none'
                                }}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: SimpleLineIcons,
                                        name: "trophy",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Work experience</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>0-2 years</Text>
                            </Stack>
                            <Stack
                                w={{
                                    base: '40%',
                                    sm: '40%',
                                    md: '40%',
                                    lg: '20%',
                                    xl: '20%',
                                }}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }} mr={5}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: Feather,
                                        name: "users",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Team effort</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>You are interested in growing the team with us and mentor new joiners</Text>
                            </Stack>
                            <Stack
                                w={{
                                    base: '40%',
                                    sm: '40%',
                                    md: '40%',
                                    lg: '20%',
                                    xl: '20%',
                                }}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }}
                                mr={5}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: Feather,
                                        name: "target",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Target</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>You always trying to make it work while keeping the bigger picture in mind.</Text>
                            </Stack>
                            <Stack
                                w={{
                                    base: '40%',
                                    sm: '40%',
                                    md: '40%',
                                    lg: '20%',
                                    xl: '20%',
                                }}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }} mr={5}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: AntDesign,
                                        name: "like2",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Like</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>You actively share your knowledge and enthusiasm to develop yourself and your team.</Text>
                            </Stack>
                            <Stack
                                w={{
                                    base: '40%',
                                    sm: '40%',
                                    md: '40%',
                                    lg: '20%',
                                    xl: '20%',
                                }}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }}
                                mr={5}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: FontAwesome,
                                        name: "graduation-cap",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Graduation</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>You have a BSc or MSc in Computer Science</Text>
                            </Stack>
                        </Flex>
                    </Box>

                    <Box>
                        <Stack mt={10} direction="row">
                            <IconButton disabled variant="ghost" width={20} ml="-8" _icon={{
                                as: FontAwesome5,
                                name: "building",
                                color: "black"
                            }} />
                            <Heading ml="-4" alignSelf="center" size={'sm'}>What we offer</Heading>
                        </Stack>
                        <Flex mt={2} direction={'row'} flexWrap={"wrap"}>
                            <Stack
                                w={{
                                    base: '40%',
                                    sm: '40%',
                                    md: '40%',
                                    lg: '20%',
                                    xl: '20%',
                                }}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }} mr={5}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: FontAwesome,
                                        name: "euro",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Salary</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>10000-20000 euro each month</Text>
                            </Stack>
                            <Stack
                                w={{
                                    base: '40%',
                                    sm: '40%',
                                    md: '40%',
                                    lg: '20%',
                                    xl: '20%',
                                }}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }}
                                mr={5}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: Feather,
                                        name: "users",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Team</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>A development department of 250 people working on our product</Text>
                            </Stack>
                            <Stack
                                w={{
                                    base: '70%',
                                    sm: '70%',
                                    md: '50%',
                                    lg: '40%',
                                    xl: '40%',
                                }}
                                mt={{
                                    base: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 'none'
                                }}
                                mr={5}>
                                <Stack direction={'row'}>
                                    <IconButton disabled variant="ghost" justifyContent={'flex-start'} pl={0} _icon={{
                                        as: FontAwesome5,
                                        name: "building",
                                        color: "violet.500"
                                    }} />
                                    <Heading alignSelf="center" size={"sm"} color={'violet.500'} fontWeight='medium'>Office in Amsterdam</Heading>
                                </Stack>
                                <Text mt={1} fontSize={'md'}>A office where you can relax, and we have a flexible work culture so only once in the two weeks we are expecting you at the office</Text>
                            </Stack>
                        </Flex>

                    </Box>

                    <Box>
                        <Heading mt={10} size={'sm'}>Extra's</Heading>
                        <Flex direction={'row'} flexWrap={"wrap"}>
                            <Stack
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
                                <IconButton disabled mx={'auto'} rounded="lg" backgroundColor="white" variant="solid" shadow={5} _icon={{
                                    as: AntDesign,
                                    name: "car",
                                    color: "violet.400",
                                    size: 8
                                }} />
                                <Text
                                    fontSize={{
                                        base: 'sm',
                                        sm: 'sm',
                                        md: 'md'
                                    }}>Tesla model 3</Text>
                            </Stack>
                            <Stack
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
                                <IconButton disabled mx={'auto'} rounded="lg" backgroundColor="white" variant="solid" shadow={5} _icon={{
                                    as: MaterialIcons,
                                    name: "fitness-center",
                                    color: "violet.400",
                                    size: 8
                                }} />
                                <Text
                                    fontSize={{
                                        base: 'sm',
                                        sm: 'sm',
                                        md: 'md'
                                    }}>In house Gym</Text>
                            </Stack>
                            <Stack
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
                                <IconButton disabled mx={'auto'} rounded="lg" backgroundColor="white" variant="solid" shadow={5} _icon={{
                                    as: AntDesign,
                                    name: "areachart",
                                    color: "violet.400",
                                    size: 8
                                }} />
                                <Text
                                    fontSize={{
                                        base: 'sm',
                                        sm: 'sm',
                                        md: 'md'
                                    }}>Annually growing salary</Text>
                            </Stack>
                            <Stack
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
                                <IconButton disabled mx={'auto'} rounded="lg" backgroundColor="white" variant="solid" shadow={5} _icon={{
                                    as: AntDesign,
                                    name: "rocket1",
                                    color: "violet.400",
                                    size: 8
                                }} />
                                <Text
                                    fontSize={{
                                        base: 'sm',
                                        sm: 'sm',
                                        md: 'md'
                                    }}>Startup</Text>
                            </Stack>
                            <Stack
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
                                <IconButton disabled mx={'auto'} rounded="lg" backgroundColor="white" variant="solid" shadow={5} _icon={{
                                    as: MaterialIcons,
                                    name: "flight",
                                    color: "violet.400",
                                    size: 8
                                }} />
                                <Text
                                    fontSize={{
                                        base: 'sm',
                                        sm: 'sm',
                                        md: 'md'
                                    }}>Possibility to work abroad</Text>
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </ScrollView>
        </Box >
    )
}