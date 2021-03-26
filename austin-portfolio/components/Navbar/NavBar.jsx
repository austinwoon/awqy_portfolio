import { Stack, Flex, Text, Box, Spacer, Divider } from '@chakra-ui/layout';
import React from 'react';
import HoverLink from '../HoverLink/HoverLink';
import Logo from '../Logo/Logo';
import MotionBox from '../FramerMotion/MotionBox';
import { hoverStyle, tapBounceStyle } from '../../utils/framerMotionStyles';
import { Icon, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const NavBar = ({ refs }) => {
    const boxStyles = {
        pl: ['2', '3', '7', '10'],
        pr: ['2', '3', '7', '10'],
        pb: '1',
        pt: '1',
    };
    const fontStyles = {
        color: 'blue.900',
        fontWeight: 'bold',
        fontSize: ['lg', 'xl', '2xl', '2xl'],
    };

    return (
        <Flex
            w={'100vw'}
            align={'center'}
            justify={['center', 'center', 'space-between', 'space-between']}
        >
            <Stack direction="row" pl={5} h={10} spacing={5}>
                <Logo />
                <Box bgColor={'gray.300'} w="3px" opacity={0.8} />

                <Flex align={'center'}>
                    <MotionBox {...tapBounceStyle} {...hoverStyle}>
                        <Link
                            isExternal
                            href={'https://linkedin.com/in/awqy'}
                            color={'blue.900'}
                        >
                            <Icon
                                as={FaLinkedinIn}
                                fontSize={fontStyles.fontSize}
                            />
                        </Link>
                    </MotionBox>
                </Flex>

                <Flex align={'center'}>
                    <MotionBox {...tapBounceStyle} {...hoverStyle}>
                        <Link
                            isExternal
                            href={'https://github.com/austinwoon'}
                            color={'blue.900'}
                        >
                            <Icon
                                as={FaGithub}
                                fontSize={fontStyles.fontSize}
                            />
                        </Link>
                    </MotionBox>
                </Flex>
            </Stack>

            <Stack direction={'row'}>
                <HoverLink
                    boxStyles={boxStyles}
                    fontStyles={fontStyles}
                    content={'About'}
                    scrollId={'about'}
                />

                <HoverLink
                    boxStyles={boxStyles}
                    fontStyles={fontStyles}
                    content={'Portfolio'}
                    scrollId={'portfolio'}
                    scrollOffset={-70}
                />

                <HoverLink
                    boxStyles={boxStyles}
                    fontStyles={fontStyles}
                    content={'Contact'}
                />
            </Stack>
        </Flex>
    );
};

export default NavBar;
