import React from 'react';
import {Heading, VStack, Box, Img, useStyleConfig} from '@chakra-ui/react'

const PortfolioCard = ({title, img, description, technologies}) => {
  const styles = useStyleConfig("WorkGalleryBox")

  return (
    <VStack
      align={"start"}
      padding={"5%"}
      boxShadow={"base"}
    >
      <Box>
        <Img
          src={img}
          maxWidth={"300px"}
        />
      </Box>

      <Box>
        <Heading size={"md"}>
          {title}
        </Heading>
      </Box>

    </VStack>
  )
}

export default PortfolioCard