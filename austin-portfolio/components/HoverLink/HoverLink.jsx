import { Link, Flex, Text, Box } from '@chakra-ui/layout';
import React from 'react';
import MotionBox from "../FramerMotion/MotionBox";

const variants = {
    'hidden' : {
        opacity: 0,
        width: '0%'
    },
    'active': {
        opacity: 1,
        width: '110%'
    }
}

const HoverLink = ({linkStyles, content, href, ...props }) => {
    const [hovered, setHovered] = React.useState(false)
    return (
        <Link {...linkStyles}
            _hover={{
                underline: false
            }}
              _focus={{
                  border: '0px'
              }}
              href={href}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
            <Text>{content}</Text>
            <MotionBox
                h={'20%'}
                width={'100%'}
                bgColor={'blue.500'}
                animate={hovered ? 'active' : 'hidden'}
                variants={variants}
                transition={{duration: 0.4}}
            />
        </Link>
    )
}

export default HoverLink