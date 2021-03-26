import { Stack, Flex, Text, Box, Spacer } from '@chakra-ui/layout';
import React from 'react';
import HoverLink from '../HoverLink/HoverLink';


const NavBar = ({refs}) => {


    const handleClickAbout = () => {
        console.log('hello')
        refs.aboutRef.current.scrollIntoView({behavior: 'smooth'})
    }

    const handleClickPortfolio = () => {
        refs.portfolioRef.current.scrollIntoView()
    }

    const linkProps = {
        color: 'blue.900',
        fontSize: ['lg', 'xl', '2xl', '2xl'],
        pl: ['2', '3', '7', '10'],
        pr: ['2', '3', '7', '10'],
        pb: '1',
        pt: '1',
        borderRadius: '8px',
        transition: '0.1s ease-in-out',
        onClick: handleClickAbout,
    };

    return (
        <Stack
            w="100vw"
            justify={['center', 'center', 'flex-end', 'flex-end']}
            direction={'row'}
        >
            <HoverLink
                linkProps={linkProps}
                content={'About'}
                href={'#about'}
            />

            <HoverLink
                linkProps={linkProps}
                content={'Portfolio'}
                href={'#portfolio'}
            />

            <HoverLink linkProps={linkProps} content={'Contact'} />
        </Stack>
    );
};

export default NavBar;
