import React from 'react';
import {
  Box,
  Heading,
  Spacer,
  Flex,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react"
import PortfolioCard from "./PortfolioCard";
import {works} from "../../constants/work"

const Work = () => {
  return (
    <Box>
      <Flex m={"0% 10% 0% 10%"} direction={"column"}>
        <Heading size={"2xl"}>
          Work
        </Heading>

        <Stack maxWidth={"500px"}>
          {
            works.map(work => (
              <PortfolioCard
                img={work.img}
                title={work.title}
                description={work.description}
                technologies={work.technologies}
              />
            ))
          }
        </Stack>
      </Flex>
    </Box>
  )
}

export default Work;