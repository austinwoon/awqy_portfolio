import { Link, Flex, Text, Box } from '@chakra-ui/layout';
import React from 'react';
import MotionBox from "../FramerMotion/MotionBox";
import HoverLink from "../HoverLink/HoverLink";

const linkStyles = {
    color: 'blue.900',
    fontSize: ['lg', '2xl', '2xl', '2xl'],
    pl: ['2', '3', '7', '10'],
    pr: ['2', '3', '7', '10'],
    pb: '1',
    pt: '1',
    borderRadius: '8px',
    transition: '0.1s ease-in-out',
};

const NavBar = () => {
    const [hovered, setHovered] = React.useState(false)
    return (
        <Flex w='100vw' justify={'flex-end'}>
            <HoverLink linkStyles={linkStyles} content={'About'} href={'#about'} />
            <HoverLink linkStyles={linkStyles} content={'Portfolio'} href={'#portfolio'} />
            <HoverLink linkStyles={linkStyles} content={'Contact'}/>
        </Flex>
    );
};

export default NavBar;
