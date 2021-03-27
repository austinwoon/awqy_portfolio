import React from 'react';
import { Box, Flex, Divider, Img, Code } from '@chakra-ui/react';
import MotionBox from '../FramerMotion/MotionBox';
import Console from './Console';
import { loadingEntryProps } from '../../constants/framerMotion';
import Name from './Name';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { Link as LinkSmoothScroll } from 'react-scroll';

const rowMarginTop = ['2vh', '2vh', '2vh', '2vh'];

export const Intro = () => {
    return (
        <Flex
            direction="column"
            align={'center'}
            justify={'center'}
            h="100vh"
            padding={'24px'}
            overflow={'hidden'}
        >
            <Box mt={rowMarginTop}>
                <Flex justify={'center'}>
                    <MotionBox
                        top={0}
                        position={'relative'}
                        boxSize={['180px', '250px']}
                        {...loadingEntryProps}
                    >
                        <Img src={'/me.png'} alt={'me'} borderRadius={'16px'} />
                    </MotionBox>
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Name height={['3.5vh', '3.5vh', '5vh', '5vh']} />
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Divider maxWidth="50vw" />
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <Console height={'45vh'} />
                </Flex>

                <Flex mt={rowMarginTop} justify={'center'}>
                    <MotionBox
                        whileHover={{
                            y: 10,
                        }}
                        _hover={{
                            cursor: 'pointer',
                        }}
                        transition={{
                            duration: 1,
                            stiffness: 100,
                            repeat: 1,
                            repeatType: 'reverse',
                        }}
                    >
                        <LinkSmoothScroll
                            offset={-70}
                            to={'portfolio'}
                            smooth={true}
                            duration={500}
                        >
                            <Flex direction={'column'} align={'center'}>
                                <Code
                                    fontSize={['md', 'md', 'xl', 'xl']}
                                    letterSpacing={2}
                                >
                                    View My Work
                                </Code>

                                <ArrowDownIcon fontSize={'3vh'} />
                            </Flex>
                        </LinkSmoothScroll>
                    </MotionBox>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Intro;
