import Head from 'next/head';
import { Box, useMediaQuery, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer/Footer';
import { MediaQueryContext } from '../contexts/MediaQueryContext';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';
import Contact from '../components/Contact/Contact';

const DynamicIntro = dynamic(() => import('../components/Intro/Intro'));
const DynamicNavbar = dynamic(() => import('../components/Navbar/Navbar'));
const DynamicPortfolioSection = dynamic(() =>
    import('../components/Portfolio/Portfolio')
);

export default function Home() {
    const [isMobile] = useMediaQuery(['(max-width: 900px)']);

    return (
        <MediaQueryContext.Provider value={{ isMobile }}>
            <Head>
                <title>Austin Woon Quan Portfolio</title>
            </Head>
            <Box bgColor="brand.bgPrimary">
                <DynamicNavbar />

                <Element id={'about'}>
                    <DynamicIntro />
                </Element>

                <Element id={'portfolio'}>
                    <DynamicPortfolioSection />
                </Element>

                <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    position="relative"
                    mt={5}
                >
                    <Element id={'contact'}>
                        <Footer />
                    </Element>
                </Flex>
            </Box>
        </MediaQueryContext.Provider>
    );
}
