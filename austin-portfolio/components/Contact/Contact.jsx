import React from 'react';
import { Box, Text, Flex, Icon, Link, Stack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { glassMorphism } from '../../utils/styles';
import { hoverStyle } from '../../utils/framerMotionStyles';
import MotionBox from '../FramerMotion/MotionBox';

export const Contact = ({
    iconBoxSizes = ['20px', '40px'],
    mr = 5,
    ml = 5,
}) => {
    return (
        <Flex align="center">
            <MotionBox {...hoverStyle}>
                <Link
                    isExternal
                    href={'mailto:austinwoonquanyi@gmail.com'}
                    color={'blue.900'}
                    mr={mr}
                    ml={ml}
                >
                    <Icon as={FaGithub} boxSize={iconBoxSizes} />
                </Link>
            </MotionBox>

            <MotionBox {...hoverStyle}>
                <Link
                    isExternal
                    href={'mailto:austinwoonquanyi@gmail.com'}
                    color={'blue.900'}
                    mr={mr}
                    ml={ml}
                >
                    <Icon as={EmailIcon} boxSize={iconBoxSizes} />
                </Link>
            </MotionBox>

            <MotionBox {...hoverStyle}>
                <Link
                    isExternal
                    href={'https://linkedin.com/in/awqy'}
                    color={'blue.900'}
                    mr={mr}
                    ml={ml}
                >
                    <Icon as={FaLinkedin} boxSize={iconBoxSizes} />
                </Link>
            </MotionBox>
        </Flex>
    );
};

export default Contact;
