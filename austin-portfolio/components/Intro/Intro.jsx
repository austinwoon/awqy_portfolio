import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Center,
    Icon,
    Divider,
    Img,
    Link,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import NavBar from '../Navbar/NavBar';
import { introduction } from '../../constants/introduction';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import MotionBox from '../FramerMotion/MotionBox';
import Console from './Console';
import Name from './Name';

export const Intro = () => {
    return (
        <Box width={'100vw'} padding={'24px'}>
            <Flex justify={'center'}>
                <NavBar />
            </Flex>

            <Box margin={'48px'}>
                <Flex justify={'center'}>
                    <MotionBox
                        boxShadow={'0px 5px 5px rgba(0,0,0,0.15)'}
                        padding={'16px'}
                        borderRadius={'16px'}
                        top={0}
                        position={'relative'}
                        initial={{
                            y: 100,
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            bounce: 1,
                        }}
                    >
                        <Box boxShadow={'inner'}>
                            <Img
                                src={'/profile_pic.jpeg'}
                                alt={'me'}
                                maxWidth={'240px'}
                                borderRadius={'16px'}
                            />
                        </Box>
                    </MotionBox>
                </Flex>

                <Flex pt="48px" mb={5} justify={'center'}>
                    <Name />
                </Flex>

                <Center>
                    <Divider padding={'12px'} maxWidth="10%" />
                </Center>

                <Center>
                    <Console />
                </Center>

                <Stack
                    spacing={16}
                    direction="row"
                    justify="center"
                    paddingTop={'24px'}
                >
                    <Link
                        isExternal
                        href={'https://linkedin.com/in/awqy'}
                        transition={'top ease-in-out 0.3s'}
                        color={'blue.900'}
                        top={0}
                        position={'relative'}
                        _hover={{
                            top: '-4px',
                        }}
                    >
                        <Icon as={FaLinkedinIn} w={'8'} h={'8'} />
                    </Link>

                    <Link
                        isExternal
                        href={'https://github.com/austinwoon'}
                        transition={'top ease-in-out 0.3s'}
                        color={'blue.900'}
                        top={0}
                        position={'relative'}
                        _hover={{
                            top: '-4px',
                        }}
                    >
                        <Icon as={FaGithub} w={'8'} h={'8'} />
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default Intro;
