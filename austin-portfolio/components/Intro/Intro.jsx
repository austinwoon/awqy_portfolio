import React from 'react';
import {Box, Flex, Heading, Center, Icon, Divider, Img, Link, Stack, Text, VStack} from "@chakra-ui/react";
import NavBar from "../Navbar/NavBar";
import {introduction} from "../../constants/introduction";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

export const Intro = () => {
  return (
    <Box
      width={"100vw"}
      backgroundColor={"brand.bgWhite"}
      padding={"24px"}
    >
      <Flex justify={"center"}>
        <NavBar/>
      </Flex>

      <Box margin={"48px"}>
        <Flex justify={"center"}>
          <Box
            boxShadow={"0px 5px 5px rgba(0,0,0,0.15)"}
            padding={"16px"}
            borderRadius={"16px"}
            transition={"top ease-in-out 0.3s"}
            top={0}
            position={"relative"}
            _hover={{
              top: "-4px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}
          >
            <Box
              boxShadow={"inner"}
            >
              <Img
                src={"/profile_pic.jpeg"}
                alt={"me"}
                maxWidth={"240px"}
                borderRadius={"16px"}
              />
            </Box>
          </Box>
        </Flex>

        <Flex paddingTop="48px" justify={"center"}>
          <VStack align={"flex-end"} marginRight = "50px">
            <Heading size={"4xl"}>
              AUSTIN
            </Heading>

            <Heading size={"4xl"}>
              WOON
            </Heading>
          </VStack>

          <VStack align={"flex-start"}>
            <Heading size={"xl"}>
              Introduction
            </Heading>

            <Text maxWidth={"25em"} align={"justify"}>
              { introduction }
            </Text>
          </VStack>
        </Flex>

        <Center>
          <Divider padding={"12px"} maxWidth="10%"/>
        </Center>


        <Stack
          spacing={16}
          direction="row"
          justify="center"
          paddingTop={"24px"}
        >
          <Link
            isExternal
            href={"https://linkedin.com/in/awqy"}
            transition={"top ease-in-out 0.3s"}
            color={"blue.900"}
            top={0}
            position={"relative"}
            _hover={{
              top: "-4px"
            }}
          >
            <Icon as={FaLinkedinIn} w={"8"} h={"8"}/>
          </Link>

          <Link
            isExternal
            href={"https://github.com/austinwoon"}
            transition={"top ease-in-out 0.3s"}
            color={"blue.900"}
            top={0}
            position={"relative"}
            _hover={{
              top: "-4px"
            }}
          >
            <Icon as={FaGithub} w={"8"} h={"8"}/>
          </Link>
        </Stack>
      </Box>
    </Box>
  )
}

export default Intro;