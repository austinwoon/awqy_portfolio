import { Link, Flex, Heading, Box, Spacer } from '@chakra-ui/layout';
import React from 'react';

const NavBar = () => {
    return (
        <Flex
            width="100vw"
            justify={'space-around'}
            padding={'24px 0px 24px 0px'}
            maxWidth={'50vw'}
        >
            <Box>
                <Link
                    color={'blue.900'}
                    fontSize={'24'}
                    fontWeight={'bold'}
                    padding={'8px'}
                    borderRadius="8px"
                    _hover={{
                        backgroundColor: 'blue.900',
                        color: 'white',
                        transition: '0.35s ease',
                    }}
                >
                    About
                </Link>
            </Box>

            {/*<Spacer />*/}

            <Box>
                <Link
                    color={'blue.900'}
                    fontSize={'24'}
                    fontWeight={'bold'}
                    padding={'8px'}
                    borderRadius="8px"
                    _hover={{
                        backgroundColor: 'blue.900',
                        color: 'white',
                        transition: '0.35s ease',
                    }}
                >
                    Works
                </Link>
            </Box>

            {/*<Spacer />*/}

            <Box>
                <Link
                    color={'blue.900'}
                    fontSize={'24'}
                    fontWeight={'bold'}
                    padding={'8px'}
                    borderRadius="8px"
                    _hover={{
                        backgroundColor: 'blue.900',
                        color: 'white',
                        transition: '0.35s ease',
                    }}
                >
                    Contact
                </Link>
            </Box>
        </Flex>
    );
};

export default NavBar;
