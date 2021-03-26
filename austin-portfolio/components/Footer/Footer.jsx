import { Flex, Text } from '@chakra-ui/react';
const Footer = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify={'center'}
            bgColor={'transparent'}
            mt={5}
        >
            <Text fontSize={'lg'} pb={2}>
                Made by Austin Woon Quan © {new Date().getFullYear()}
            </Text>
            <Text as={'sub'}>Built With React, Chakra UI, FramerMotion</Text>
        </Flex>
    );
};

export default Footer;
