import React from 'react';
import HoverLink from '../HoverLink/HoverLink';
import Logo from '../Logo/Logo';
import MotionBox from '../FramerMotion/MotionBox';
import { hoverStyle, tapBounceStyle } from '../../utils/framerMotionStyles';
import { Icon, Link, Box, Flex, Stack, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MediaQueryContext } from '../../contexts/MediaQueryContext';
import { scroller } from 'react-scroll';
import { AnimatePresence } from 'framer-motion';

const fontStyles = {
    color: 'blue.900',
    fontWeight: 'medium',
    fontSize: ['lg', 'xl', '2xl', '2xl'],
};
const mobileMenuFontStyles = {
    color: 'blue.900',
    fontWeight: 'light',
    fontSize: ['4xl', '4xl', '4xl', '4xl'],
};
const boxStyles = {
    pl: ['2', '3', '7', '10'],
    pr: ['2', '3', '7', '10'],
    pb: '1',
    pt: '1',
};
const portfolioOffsetScroll = -70;
const Navbar = ({ refs }) => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
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

    const toggleMenu = () => {
        setMenuOpen((m) => !m);
    };

    return (
        <Flex
            align={'center'}
            justify={'space-between'}
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

            <Box>
                {!isMobile ? (
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
                            scrollOffset={portfolioOffsetScroll}
                        />

                        <HoverLink
                            boxStyles={boxStyles}
                            fontStyles={fontStyles}
                            content={'Contact'}
                            href={'mailto:austinwoonquanyi@gmail.com'}
                        />
                    </Stack>
                ) : (
                    <HamburgerMenu
                        refs={refs}
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                    />
                )}
            </Box>
        </Flex>
    );
};

const HamburgerMenu = ({ refs, isMenuOpen, toggleMenu }) => {
    const scrollToAbout = () => {
        toggleMenu();
        scroller.scrollTo('about', {
            smooth: true,
            duration: 500,
        });
    };

    const scrollToPortfolio = () => {
        toggleMenu();
        scroller.scrollTo('portfolio', {
            smooth: true,
            duration: 500,
            offset: portfolioOffsetScroll,
        });
    };

    const colSpacing = [4, 4, 7, 7];

    const variants = {
        active: {
            left: 0,
        },
    };

    return (
        <Box>
            <IconButton
                as={HamburgerIcon}
                bgColor={'transparent'}
                size={'sm'}
                mr={5}
                onClick={toggleMenu}
            />
            <AnimatePresence>
                {isMenuOpen && (
                    <MotionBox
                        bgColor={'brand.bgWhite'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        display={'flex'}
                        flexDirection={'column'}
                        h={'100vh'}
                        w="100vw"
                        animate={isMenuOpen && 'active'}
                        initial={{
                            top: 0,
                        }}
                        exit={{
                            x: 1000,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        variants={variants}
                        position={'fixed'}
                        zIndex={300}
                    >
                        <IconButton
                            as={CloseIcon}
                            bgColor="transparent"
                            onClick={toggleMenu}
                            boxSize={'45px'}
                            _hover={{
                                bgColor: 'transparent',
                            }}
                            m={colSpacing}
                        />

                        <Box m={colSpacing}>
                            <HoverLink
                                onClick={toggleMenu}
                                fontStyles={mobileMenuFontStyles}
                                content={'About'}
                                onClick={scrollToAbout}
                                hoverHeight={'0.5em'}
                            />
                        </Box>

                        <Box m={colSpacing}>
                            <HoverLink
                                fontStyles={mobileMenuFontStyles}
                                content={'Portfolio'}
                                hoverHeight={'0.5em'}
                                onClick={scrollToPortfolio}
                                scrollOffset={portfolioOffsetScroll}
                            />
                        </Box>

                        <Box m={colSpacing}>
                            <HoverLink
                                fontStyles={mobileMenuFontStyles}
                                content={'Contact'}
                                hoverHeight={'0.5em'}
                                href={'mailto:austinwoonquanyi@gmail.com'}
                            />
                        </Box>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Box>
    );
};
export default Navbar;
