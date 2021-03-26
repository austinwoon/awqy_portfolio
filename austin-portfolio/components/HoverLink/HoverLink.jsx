import { Link, Flex, Text, Box } from '@chakra-ui/layout';
import React from 'react';
import MotionBox from '../FramerMotion/MotionBox';
import { Link as LinkSmoothScroll } from 'react-scroll';

const variants = {
    hidden: {
        opacity: 0,
        width: '0%',
    },
    active: {
        opacity: 1,
        width: '110%',
    },
};

const HoverLink = ({
    fontStyles,
    boxStyles,
    onClick,
    content,
    scrollId,
    scrollOffset,
    ...props
}) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Box {...boxStyles}>
            <LinkSmoothScroll
                offset={scrollOffset}
                to={scrollId}
                smooth={true}
                duration={500}
            >
                <Text
                    {...fontStyles}
                    _hover={{
                        underline: false,
                        cursor: 'pointer',
                    }}
                    _focus={{
                        border: '0px',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {content}
                </Text>
                <MotionBox
                    h={'20%'}
                    width={'100%'}
                    bgColor={'blue.900'}
                    initial={{
                        opacity: 0,
                        width: '0%',
                    }}
                    animate={hovered ? 'active' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 0.4 }}
                />
            </LinkSmoothScroll>
        </Box>
    );
};

export default HoverLink;
