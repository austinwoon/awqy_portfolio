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
};
const NavBar = () => {
    return (
        <Flex w="100%">
            <Spacer />
            <Link {...LinkStyles}>About</Link>
            <Spacer />
            <Link {...LinkStyles}>Portfolio</Link>
            <Spacer />
            <Link {...LinkStyles}>Contact</Link>
            <Spacer />
        </Flex>
    );
};

export default NavBar;
