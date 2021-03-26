import React from 'react';
import HoverLink from '../HoverLink/HoverLink';
import Logo from '../Logo/Logo';
import MotionBox from '../FramerMotion/MotionBox';
import { hoverStyle, tapBounceStyle } from '../../utils/framerMotionStyles';
import { Icon, Link, Box, Flex, Stack, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MediaQueryContext } from '../Contexts/MediaQueryContext';
import { animateScroll as scroll } from 'react-scroll';

const fontStyles = {
    color: 'blue.900',
    fontWeight: 'bold',
    fontSize: ['lg', 'xl', '2xl', '2xl'],
};
const mobileMenuFontStyles = {
    color: 'blue.900',
    fontWeight: 'bold',
    fontSize: '6xl',
};
const boxStyles = {
    pl: ['2', '3', '7', '10'],
    pr: ['2', '3', '7', '10'],
    pb: '1',
    pt: '1',
};
const NavBar = ({ refs }) => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const { isMobile } = React.useContext(MediaQueryContext);
    const toggleMenuOpen = () => {
        setMenuOpen((m) => !m);
    };

    return (
        <Flex
            align={'center'}
            justify={[
                'space-between',
                'space-between',
                'space-between',
                'space-between',
            ]}
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
                            scrollOffset={-70}
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
                        toggleMenuOpen={toggleMenuOpen}
                    />
                )}
            </Box>
        </Flex>
    );
};

const HamburgerMenu = ({ refs, isMenuOpen, toggleMenuOpen }) => {
    const scrollToAbout = () => {
        toggleMenuOpen();
        scroll.scrollTo(refs.aboutRef.current.getBoundingClientRect().y, {
            smooth: true,
            duration: 500,
        });
    };

    const scrollToPortfolio = () => {
        toggleMenuOpen();
        scroll.scrollTo(refs.portfolioRef.current.getBoundingClientRect().y, {
            smooth: true,
            duration: 500,
        });
    };

    return (
        <Box>
            <IconButton
                as={HamburgerIcon}
                bgColor={'transparent'}
                border={'0.5px'}
                borderColor={'gray.200'}
                boxShadow={'xs'}
                size={'sm'}
                mr={5}
                onClick={toggleMenuOpen}
            />
            {isMenuOpen && (
                <Stack
                    bgColor={'brand.bgWhite'}
                    align={'center'}
                    justify={'center'}
                    h={'100vh'}
                    w="100vw"
                    top={0}
                    left={0}
                    position={'fixed'}
                    zIndex={300}
                    spacing={['10', '10', '20']}
                >
                    <IconButton
                        as={CloseIcon}
                        bgColor="transparent"
                        onClick={toggleMenuOpen}
                        boxSize={'75px'}
                        _hover={{
                            bgColor: 'transparent',
                        }}
                    />

                    <HoverLink
                        onClick={toggleMenuOpen}
                        fontStyles={mobileMenuFontStyles}
                        content={'About'}
                        onClick={scrollToAbout}
                    />

                    <HoverLink
                        fontStyles={mobileMenuFontStyles}
                        content={'Portfolio'}
                        onClick={scrollToPortfolio}
                        scrollOffset={-70}
                    />

                    <HoverLink
                        fontStyles={mobileMenuFontStyles}
                        content={'Contact'}
                        href={'mailto:austinwoonquanyi@gmail.com'}
                    />
                </Stack>
            )}
        </Box>
    );
};
export default NavBar;
