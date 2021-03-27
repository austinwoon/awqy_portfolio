import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { scroller } from 'react-scroll';
import MotionBox from '../FramerMotion/MotionBox';
import HoverLink from '../HoverLink/HoverLink';

const mobileMenuFontStyles = {
    color: 'blue.900',
    fontWeight: 'medium',
    fontSize: ['4xl', '4xl', '6xl', '6xl'],
};

const HamburgerMenu = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const scrollToAbout = () => {
        toggleMenuOpen();
        scroller.scrollTo('about', {
            smooth: true,
            duration: 500,
        });
    };

    const scrollToPortfolio = () => {
        toggleMenuOpen();
        scroller.scrollTo('portfolio', {
            smooth: true,
            duration: 500,
            offset: -70,
        });
    };

    const colSpacing = [4, 4, 7, 7];

    const variants = {
        active: {
            left: 0,
        },
    };

    const toggleMenuOpen = () => {
        setMenuOpen((m) => !m);
    };

    return (
        <Box>
            <IconButton
                as={HamburgerIcon}
                bgColor={'transparent'}
                size={'sm'}
                mr={5}
                onClick={toggleMenuOpen}
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
                            onClick={toggleMenuOpen}
                            boxSize={['40px', '40px', '55px', '55px']}
                            _hover={{
                                bgColor: 'transparent',
                            }}
                            m={colSpacing}
                        />

                        <Box m={colSpacing}>
                            <HoverLink
                                onClick={toggleMenuOpen}
                                fontStyles={mobileMenuFontStyles}
                                content={'About'}
                                onClick={scrollToAbout}
                                hoverHeight={'1em'}
                            />
                        </Box>

                        <Box m={colSpacing}>
                            <HoverLink
                                fontStyles={mobileMenuFontStyles}
                                content={'Portfolio'}
                                hoverHeight={'1em'}
                                onClick={scrollToPortfolio}
                                scrollOffset={-70}
                            />
                        </Box>

                        <Box m={colSpacing}>
                            <HoverLink
                                fontStyles={mobileMenuFontStyles}
                                content={'Contact'}
                                hoverHeight={'1em'}
                                href={'mailto:austinwoonquanyi@gmail.com'}
                            />
                        </Box>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default HamburgerMenu;
