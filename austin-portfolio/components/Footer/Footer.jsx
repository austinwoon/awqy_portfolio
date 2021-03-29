import { Stack, Text, Flex, Box, Divider, Heading } from '@chakra-ui/react';
import Contact from '../Contact/Contact';
import { h3Sizes } from '../../utils/styles';

const Footer = () => {
    return (
        <Flex direction="column" align="center" mb="10">
            <Stack direction="column" align="center" justify="center">
                <Box mb="2vh">
                    <Divider w="75vw" />
                </Box>

                <Box mb="1vh">
                    <Heading fontSize={h3Sizes} fontWeight="normal">
                        Contact Me
                    </Heading>
                </Box>
                <Box mb="1vh">
                    <Contact />
                </Box>

                <Flex align="center" justify="center" direction="column">
                    <Box>
                        <Text fontSize={['xs', 'sm']} textAlign="center">
                            Made by Austin Woon Quan ©{' '}
                            {new Date().getFullYear()}
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize={['xs', 'sm']} textAlign="center">
                            Built With React, Chakra UI, FramerMotion
                        </Text>
                    </Box>
                </Flex>
            </Stack>

            {/* <Box>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    width="100vw"
                    style={{ display: 'block' }}
                >
                    <path
                        fill="#7A73FF"
                        fill-opacity="0.4"
                        d="M0,288L60,266.7C120,245,240,203,360,202.7C480,203,600,245,720,250.7C840,256,960,224,1080,181.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>

                    <path
                        fill="#000b76"
                        fill-opacity="0.4"
                        d="M0,320L60,266.7C120,213,240,107,360,101.3C480,96,600,192,720,229.3C840,267,960,245,1080,234.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </Box> */}
        </Flex>
    );
    // );
};

export default Footer;
