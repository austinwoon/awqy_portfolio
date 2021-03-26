import { Stack, Flex, Text, Box, Spacer } from '@chakra-ui/layout';
import React from 'react';
import HoverLink from '../HoverLink/HoverLink';

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
        <Stack
            w="100vw"
            justify={['center', 'center', 'flex-end', 'flex-end']}
            direction={'row'}
        >
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
    );
};

export default NavBar;
