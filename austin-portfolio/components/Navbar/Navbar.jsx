import React from 'react';
import { Box, Flex, Stack, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MediaQueryContext } from '../../contexts/MediaQueryContext';
import { HamburgerMenu } from './HamburgerMenu';
import { DesktopMenu } from './DesktopMenu';
import { Logo } from '../Logo/Logo';
import { tapBounceStyle, hoverStyle } from '../../utils/framerMotionStyles';
import MotionBox from '../FramerMotion/MotionBox';
import { glassMorphism, landingPageSideMargins } from '../../utils/styles';
import Contact from '../Contact/Contact';

const fontStyles = {
    color: 'blue.900',
    fontWeight: 'medium',
    fontSize: ['lg', 'xl', '2xl', '2xl'],
};

const Navbar = () => {
    const { isTablet } = React.useContext(MediaQueryContext);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const offset = window.pageYOffset;
        if (offset > 50 || scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <Flex
            align={'center'}
            justify={'space-between'}
            style={
                scrolled
                    ? {
                          ...glassMorphism(false),
                      }
                    : {}
            }
            position={'fixed'}
            top="0"
            borderBottomLeftRadius={['8px', '8px', '10px', '10px']}
            borderBottomRightRadius={['8px', '8px', '10px', '10px']}
            pt={['0.25vh', '0.5vh', '1vh', '1vh']}
            pb={['0.25vh', '0.5vh', '1vh', '1vh']}
            w={'100%'}
            zIndex={100}
        >
            <Stack
                direction="row"
                align="center"
                h={10}
                spacing={[4, 4, 6, 6]}
                pl={landingPageSideMargins}
            >
                <Logo />
                <Box
                    bgColor={'gray.300'}
                    w="1px"
                    opacity={0.8}
                    h={[5, 5, 6, 6]}
                />

                <Contact
                    iconBoxSizes={['18px', '18px', '22px', '22px']}
                    mr={[2, 2, 3, 3]}
                    ml={[2, 2, 3, 3]}
                    iconColor={['blue.900', 'blue.900', 'gray.500', 'gray.500']}
                />
            </Stack>

            {isTablet ? (
                <HamburgerMenu />
            ) : (
                <Box overflow="hidden">
                    <DesktopMenu />
                </Box>
            )}
        </Flex>
    );
};

export default Navbar;
