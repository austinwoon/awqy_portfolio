import Head from 'next/head';
import { Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer/Footer';
import { MediaQueryContext } from '../contexts/MediaQueryContext';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';

const DynamicIntro = dynamic(() => import('../components/Intro/Intro'));
const DynamicNavbar = dynamic(() => import('../components/Navbar/Navbar'), {
    ssr: false,
});
const DynamicPortfolioSection = dynamic(() =>
    import('../components/Portfolio/Portfolio')
);

export default function Home() {
    const [isMobile] = useMediaQuery(['(max-width: 900px)']);

    const aboutRef = React.useRef();
    const portfolioRef = React.useRef();

    return (
        <MediaQueryContext.Provider value={{ isMobile }}>
            <Head>
                <title>Austin Portfolio</title>
            </Head>
            <Box bgGradient="linear-gradient(190deg, brand.bgWhite, hsla(0,0%,45%,0) 80%)">
                <DynamicNavbar refs={{ aboutRef, portfolioRef }} />

                <Element id={'about'} ref={aboutRef}>
                    <DynamicIntro />
                </Element>

                <Element id={'portfolio'} ref={portfolioRef}>
                    <DynamicPortfolioSection />
                </Element>
                <Footer />
            </Box>
        </MediaQueryContext.Provider>
    );
}
