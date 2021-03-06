import { Link, Flex, Text, Box } from '@chakra-ui/layout';
import React from 'react';
import MotionBox from '../FramerMotion/MotionBox';
import { Link as LinkSmoothScroll } from 'react-scroll';
import { SiBluetooth } from 'react-icons/si';
import { themeBlue900 } from '../../utils/styles';

const hoverWidth = 100;

const HoverLink = ({
    fontStyles,
    boxStyles,
    onClick = () => {},
    content,
    scrollId = '',
    scrollOffset = 0,
    hoverHeight = '20%',
    href,
    ...props
}) => {
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
                        onClick={onClick}
                        content={content}
                        hoverHeight={hoverHeight}
                    />
                </LinkSmoothScroll>
            ) : (
                <LinkContents
                    fontStyles={fontStyles}
                    hoverHeight={hoverHeight}
                    content={content}
                    onClick={onClick}
                    href={href}
                />
            )}
        </Box>
    );
};

const LinkContents = ({
    fontStyles,
    content,
    href = '',
    hoverHeight,
    activeFontColor = 'blue.900',
    onClick = () => {},
}) => {
    const [hovered, setHovered] = React.useState(false);
    const variants = {
        hidden: {
            opacity: 0,
            width: '0%',
        },
        active: {
            opacity: 1,
            backgroundColor: '#1A365D',
            width: `${hoverWidth}%`,
        },
    };
    // TODO: Fix  hover animation to use MotionBox instead of ChakraUI _hover prop

    const LinkContentProps = {
        ...fontStyles,
        onClick,
        href: href && href,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        _hover: {
            color: activeFontColor,
            underline: false,
            cursor: 'pointer',
        },
    };

    return (
        <React.Fragment>
            {href ? (
                <Link {...LinkContentProps}>{content}</Link>
            ) : (
                <Text {...LinkContentProps}>{content}</Text>
            )}
            <MotionBox
                h={hoverHeight}
                width={'100%'}
                // transform={`translateX(-${(hoverWidth - 100) / 2}%)`}
                animate={hovered ? 'active' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.4 }}
            />
        </React.Fragment>
    );
};

export default HoverLink;
