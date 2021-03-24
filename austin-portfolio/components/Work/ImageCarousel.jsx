import React from 'react';
import {WorkSelectedContext} from "./WorkSelectedContext";
import {
  Img,
  Flex,
} from '@chakra-ui/react'

import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import {motion} from "framer-motion";



const ImageCarousel = () => {
  const {workSelected: { images }, setWork} = React.useContext(WorkSelectedContext)
  return (
    <div>

    </div>
  )
}

export default ImageCarousel