import { Link, Flex, Text, Box } from '@chakra-ui/layout';
import React from 'react';
import MotionBox from '../FramerMotion/MotionBox';
import { Link as LinkSmoothScroll } from 'react-scroll';

const hoverWidth = 115;
const variants = {
    hidden: {
        opacity: 0,
        width: '0%',
    },
    active: {
        opacity: 1,
        width: `${hoverWidth}%`,
    },
};

const HoverLink = ({
    fontStyles,
    boxStyles,
    onClick,
    content,
    scrollId = '',
    scrollOffset = 0,
    ...props
}) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Box {...boxStyles}>
            {scrollId ? (
                <LinkSmoothScroll
                    offset={scrollOffset}
                    to={scrollId}
                    smooth={true}
                    duration={500}
                >
                    <LinkContents
                        fontStyles={fontStyles}
                        hovered={hovered}
                        setHovered={setHovered}
                        content={content}
                    />
                </LinkSmoothScroll>
            ) : (
                <LinkContents
                    fontStyles={fontStyles}
                    hovered={hovered}
                    setHovered={setHovered}
                    content={content}
                />
            )}
        </Box>
    );
};

const LinkContents = ({ fontStyles, hovered, setHovered, content }) => {
    return (
        <React.Fragment>
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
                transform={`translateX(-${(hoverWidth - 100) / 2}%)`}
                initial={{
                    opacity: 0,
                    width: '0%',
                }}
                animate={hovered ? 'active' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.4 }}
            />
        </React.Fragment>
    );
};

export default HoverLink;
