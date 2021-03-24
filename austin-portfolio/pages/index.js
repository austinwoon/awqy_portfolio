import Head from 'next/head';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import Intro from '../components/Intro/Intro';
import Work from '../components/Work/Work';
import React from 'react';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <Box bgGradient="linear-gradient(190deg, blue.50, hsla(0,0%,45%,0) 100%)">
            <Intro />
            <Work />
            <Footer />
        </Box>
    );
}
