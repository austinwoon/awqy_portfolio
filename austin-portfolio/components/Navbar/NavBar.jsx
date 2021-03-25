import { Link, Flex, Heading, Box, Spacer } from '@chakra-ui/layout';
import React from 'react';

const LinkStyles = {
    color: 'blue.900',
    fontSize: ['lg', '2xl', '3xl', '3xl'],
    pl: ['2', '3', '3', '3'],
    pr: ['2', '3', '3', '3'],
    pb: '1',
    pt: '1',
    fontWeight: 'bold',
    borderRadius: '8px',
    _hover: {
        backgroundColor: 'blue.900',
        color: 'white',
        transition: '0.35s ease',
    },
    transition: '0.1s ease-in-out',
};
const NavBar = () => {
    return (
        <Flex w="100%">
            <Spacer />
            <Link {...LinkStyles} href={'#about'}>About</Link>
            <Spacer />
            <Link {...LinkStyles} href={'#portfolio'}>Portfolio</Link>
            <Spacer />
            <Link {...LinkStyles}>Contact</Link>
            <Spacer />
        </Flex>
    );
};

export default NavBar;
