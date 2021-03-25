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
import { loadingEntryProps } from '../../constants/framerMotion';
import Name from './Name';

const rowMarginTop = ['2vh', '2vh', '2vh', '2vh'];

export const Intro = () => {
    return (
        <Box h="100vh" w={'100vw'} padding={'24px'} overflow={'hidden'}>
            <NavBar />

            <Box mt={rowMarginTop}>
                <Flex justify={'center'}>
                    <MotionBox
                        boxShadow={'0px 5px 5px rgba(0,0,0,0.15)'}
                        padding={['8px', '8px', '12px', '12px']}
                        borderRadius={'16px'}
                        top={0}
                        position={'relative'}
                        {...loadingEntryProps}
                    >
                        <Box boxShadow={'inner'}>
                            <Img
                                src={'/profile_pic.jpeg'}
                                alt={'me'}
                                maxWidth={'240px'}
                                boxSize={['140px', '160px', '200px', '200px']}
                                borderRadius={'16px'}
                            />
                        </Box>
                    </MotionBox>
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Name />
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Divider maxWidth="50vw" />
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Console />
                </Flex>

                <Stack
                    spacing={16}
                    direction="row"
                    justify="center"
                    mt={rowMarginTop}
                >
                    {/*TODO: Link Styles*/}
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
