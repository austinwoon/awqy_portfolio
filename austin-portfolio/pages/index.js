import Head from 'next/head';
import { Grid, GridItem, Box, Flex, Link } from '@chakra-ui/react';
import Intro from '../components/Intro/Intro';
import PortfolioSection from '../components/Portfolio/PortfolioSection';
import React from 'react';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Austin Portfolio</title>
            </Head>
            <Box bgGradient="linear-gradient(190deg, blue.50, hsla(0,0%,45%,0) 100%)">
                <Box id={'about'}>
                    <Intro />
                </Box>
                <Box id={'portfolio'}>
                    <PortfolioSection />
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
