import Head from 'next/head';
import { Grid, GridItem, Box, Flex, Link } from '@chakra-ui/react';
import Intro from '../components/Intro/Intro';
import PortfolioSection from '../components/Portfolio/PortfolioSection';
import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/NavBar';

export default function Home() {
    const [scrolled, setScrolled] = React.useState(false);
    const aboutRef = React.useRef();
    const portfolioRef = React.useRef();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <Box>
            <Head>
                <title>Austin Portfolio</title>
            </Head>
            <Box bgGradient="linear-gradient(190deg, blue.50, hsla(0,0%,45%,0) 100%)">
                <Box
                    zIndex={100}
                    className={scrolled && 'glassMorphism'}
                    borderRadius={['8px', '8px', '20px', '20px']}
                    position={'fixed'}
                    pt={['0.25vh', '0.5vh', '1vh', '1vh']}
                    pb={['0.25vh', '0.5vh', '1vh', '1vh']}
                    left={'50%'}
                    transform="translateX(-50%)"
                    w={'100vw'}
                >
                    <NavBar refs={{ aboutRef, portfolioRef }} />
                </Box>

                <Box id={'about'} ref={aboutRef}>
                    <Intro />
                </Box>
                <Box id={'portfolio'} ref={portfolioRef}>
                    <PortfolioSection />
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
