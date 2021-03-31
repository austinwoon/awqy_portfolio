import Head from 'next/head';
import { Box, useMediaQuery, Flex, Divider } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer/Footer';
import { MediaQueryContext } from '../contexts/MediaQueryContext';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';
import { landingPageSideMargins } from '../utils/styles';

const DynamicIntro = dynamic(() => import('../components/Intro/Intro'));
const DynamicNavbar = dynamic(() => import('../components/Navbar/Navbar'));
const DynamicPortfolioSection = dynamic(() =>
    import('../components/Portfolio/Portfolio')
);

export default function Home() {
    const [isTablet, isMobile] = useMediaQuery([
        '(max-width: 900px)',
        '(max-width: 500px)',
    ]);

    return (
        <MediaQueryContext.Provider value={{ isTablet, isMobile }}>
            <Head>
                <title>Austin Woon Quan Portfolio</title>

                <meta
                    property="og:title"
                    content="Austin Woon Portfolio"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="Austin Woon Portfolio"
                    key="description"
                />

                <meta name="og:author" content="Austin Woon" key="author" />
            </Head>
            <Box bgColor="brand.bgPrimary">
                <DynamicNavbar />

                <Element id={'about'}>
                    <DynamicIntro />
                </Element>

                <Element id={'portfolio'}>
                    <Box
                        ml={landingPageSideMargins}
                        mr={landingPageSideMargins}
                    >
                        <Divider />
                        <DynamicPortfolioSection />
                    </Box>
                </Element>

                <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    position="relative"
                    mt={5}
                    ml={landingPageSideMargins}
                    mr={landingPageSideMargins}
                    overflow="hidden"
                >
                    <Divider />
                    <Element id={'contact'}>
                        <Footer />
                    </Element>
                </Flex>
            </Box>
        </MediaQueryContext.Provider>
    );
}
