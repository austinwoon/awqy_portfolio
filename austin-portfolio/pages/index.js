import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import {
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react'
import Intro from "../components/Intro/Intro";
import Work from "../components/Work/Work";
import React from 'react';


export default function Home() {

  return (
    <Box>
      <Intro />
      <Work />
    </Box>
  )
}
