import { Flex, Text } from '@chakra-ui/react';
const Footer = () => {
    return (
        <Flex justify={'center'} bgColor={'transparent'}>
            <Text>Made by Austin Woon © {new Date().getFullYear()}</Text>
        </Flex>
    );
};

export default Footer;
