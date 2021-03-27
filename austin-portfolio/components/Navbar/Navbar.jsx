import React from 'react';
import { Box, Flex, Stack, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MediaQueryContext } from '../../contexts/MediaQueryContext';
import { HamburgerMenu } from './HamburgerMenu';
import { DesktopMenu } from './DesktopMenu';
import { Logo } from '../Logo/Logo';
import { tapBounceStyle, hoverStyle } from '../../utils/framerMotionStyles';
import MotionBox from '../FramerMotion/MotionBox';

const fontStyles = {
    color: 'blue.900',
    fontWeight: 'medium',
    fontSize: ['lg', 'xl', '2xl', '2xl'],
};

const Navbar = () => {
    const { isMobile } = React.useContext(MediaQueryContext);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <Flex
            align={'center'}
            justify={'space-between'}
            overflow={'hidden'}
            style={
                scrolled
                    ? {
                          backdropFilter: 'blur(17.5px)',
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          WebkitBackdropFilter: 'blur(17.5px)',
                          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                          borderBottom: '1px solid (255, 255, 255, 0.18)',
                      }
                    : {}
            }
            position={'sticky'}
            top="0"
            borderBottomLeftRadius={['8px', '8px', '10px', '10px']}
            borderBottomRightRadius={['8px', '8px', '10px', '10px']}
            pt={['0.25vh', '0.5vh', '1vh', '1vh']}
            pb={['0.25vh', '0.5vh', '1vh', '1vh']}
            w={'100%'}
            zIndex={100}
        >
            <Stack direction="row" align="center" pl={5} h={10} spacing={5}>
                <Logo />
                <Box
                    bgColor={'gray.300'}
                    w="3px"
                    opacity={0.8}
                    h={[5, 5, 6, 6]}
                />

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

            <Box>{!isMobile ? <DesktopMenu /> : <HamburgerMenu />}</Box>
        </Flex>
    );
};

export default Navbar;
