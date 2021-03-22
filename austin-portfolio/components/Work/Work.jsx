import React from 'react';
import {
  Box,
  Heading,
  Spacer,
  Flex,
  Grid,
  GridItem,
  Stack, useDisclosure,
} from "@chakra-ui/react"
import PortfolioCard from "./PortfolioCard";
import {works} from "../../constants/work"
import WorkModal from "./WorkModal";
import { WorkSelectedContext } from "./WorkSelectedContext";

const Work = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [workSelected, setWorkSelected] = React.useState(works[0])

  const handleViewMoreClick = (work) => {
    setWorkSelected(work)
    onOpen()
  }

  return (
    <WorkSelectedContext.Provider value={{
      workSelected,
      setWork: setWorkSelected,
    }}>
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
                  onOpen={() => handleViewMoreClick(work)}
                />
              ))
            }
          </Stack>
        </Flex>
      </Box>

      <WorkModal
        workSelected={workSelected}
        onClose={onClose}
        isOpen={isOpen}
      />
    </WorkSelectedContext.Provider>
  )
}

export default Work;