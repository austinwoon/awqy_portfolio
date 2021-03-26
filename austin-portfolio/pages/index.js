import Head from 'next/head';
import { Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/NavBar';
import { MediaQueryContext } from '../components/Contexts/MediaQueryContext';
import dynamic from 'next/dynamic';

const DynamicIntro = dynamic(() => import('../components/Intro/Intro'));
const DynamicPortfolioSection = dynamic(() =>
    import('../components/Portfolio/PortfolioSection')
);

export default function Home() {
    const [isMobile] = useMediaQuery(['(max-width: 900px)']);
    const [scrolled, setScrolled] = React.useState(false);
    const aboutRef = React.useRef();
    const portfolioRef = React.useRef();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <MediaQueryContext.Provider value={{ isMobile }}>
            <Box>
                <Head>
                    <title>Austin Portfolio</title>
                </Head>
                <Box bgGradient="linear-gradient(190deg, blue.50, hsla(0,0%,45%,0) 100%)">
                    <Box
                        zIndex={5}
                        className={scrolled && 'glassMorphism'}
                        position={'fixed'}
                        borderRadius={['8px', '8px', '10px', '10px']}
                        pt={['0.25vh', '0.5vh', '1vh', '1vh']}
                        pb={['0.25vh', '0.5vh', '1vh', '1vh']}
                        w={'100%'}
                    >
                        <NavBar refs={{ aboutRef, portfolioRef }} />
                    </Box>

                    <Box id={'about'} ref={aboutRef}>
                        <DynamicIntro />
                    </Box>

                    <Box id={'portfolio'} ref={portfolioRef}>
                        <DynamicPortfolioSection />
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </MediaQueryContext.Provider>
    );
}
