import React from 'react';
import { Box, Text, Flex, Icon, Link, Stack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { glassMorphism } from '../../utils/styles';
import { hoverStyle } from '../../utils/framerMotionStyles';
import MotionBox from '../FramerMotion/MotionBox';

export const Contact = () => {
    return (
        <Flex align="center">
            <MotionBox {...hoverStyle}>
                <Link
                    isExternal
                    href={'mailto:austinwoonquanyi@gmail.com'}
                    color={'blue.900'}
                    mr={5}
                    ml={5}
                >
                    <Icon as={FaGithub} boxSize={['25px', '40px']} />
                </Link>
            </MotionBox>

            <MotionBox {...hoverStyle}>
                <Link
                    isExternal
                    href={'mailto:austinwoonquanyi@gmail.com'}
                    color={'blue.900'}
                    mr={5}
                    ml={5}
                >
                    <Icon as={EmailIcon} boxSize={['25px', '40px']} />
                </Link>
            </MotionBox>

            <MotionBox {...hoverStyle}>
                <Link
                    isExternal
                    href={'https://linkedin.com/in/awqy'}
                    color={'blue.900'}
                    mr={5}
                    ml={5}
                >
                    <Icon as={FaLinkedin} boxSize={['25px', '40px']} />
                </Link>
            </MotionBox>
        </Flex>
    );
};

export default Contact;
