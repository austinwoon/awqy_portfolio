import React from 'react';
import { Box, Flex, Icon, Divider, Img, Link, Stack } from '@chakra-ui/react';
import NavBar from '../Navbar/NavBar';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import MotionBox from '../FramerMotion/MotionBox';
import Console from './Console';
import { loadingEntryProps } from '../../constants/framerMotion';
import Name from './Name';
import { hoverStyle, tapBounceStyle } from '../../utils/framerMotionStyles';

const rowMarginTop = ['2vh', '2vh', '2vh', '2vh'];

export const Intro = () => {
    return (
        <Flex
            direction="column"
            align={'center'}
            justify={'center'}
            h="100vh"
            w={'100vw'}
            padding={'24px'}
            overflow={'hidden'}
        >
            <Box mt={rowMarginTop}>
                <Flex justify={'center'}>
                    <MotionBox
                        top={0}
                        position={'relative'}
                        boxSize={['20vh']}
                        {...loadingEntryProps}
                    >
                        <Img src={'/me.png'} alt={'me'} borderRadius={'16px'} />
                    </MotionBox>
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Name height={['4vh', '4vh', '5vh', '5vh']} />
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Divider maxWidth="50vw" />
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Console height={'40vh'} />
                </Flex>

                <Stack
                    spacing={16}
                    direction="row"
                    justify="center"
                    mt={rowMarginTop}
                    height={'5vh'}
                >
                    <MotionBox {...tapBounceStyle} {...hoverStyle}>
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
                            <Icon as={FaLinkedinIn} boxSize={[6, 8, 8, 8]} />
                        </Link>
                    </MotionBox>

                    <MotionBox {...tapBounceStyle} {...hoverStyle}>
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
                            <Icon as={FaGithub} boxSize={[6, 8, 8, 8]} />
                        </Link>
                    </MotionBox>
                </Stack>
            </Box>
        </Flex>
    );
};

export default Intro;
