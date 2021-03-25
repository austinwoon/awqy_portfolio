import { Flex, Text } from '@chakra-ui/react';
const Footer = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify={'center'}
            bgColor={'transparent'}
        >
            <Text fontSize={'lg'} pb={2}>
                Made by Austin Woon © {new Date().getFullYear()}
            </Text>
            <Text as={'sub'}>React, Chakra UI, FramerMotion</Text>
        </Flex>
    );
};

export default Footer;
