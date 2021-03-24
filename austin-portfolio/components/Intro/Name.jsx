import { Box, Code, Flex } from '@chakra-ui/layout';
import React from 'react';
import { cursorBlinkTimeInterval } from '../../constants/introduction'

const name = "Austin Woon"
const Name = () => {
    const typeWriterTimer = React.useRef(null);
    const cursorTimer = React.useRef(null);
    const [showNameIndex, setShowNameIndex] = React.useState(0)
    const [showCursor, setShowCursor] = React.useState(true)
    // const timer = React.useRef(null);

    React.useEffect(() => {
        typeWriterTimer.current = window.setInterval(() => {
            if (showNameIndex < name.length) {
                setShowNameIndex((i) => i + 1);
            }
        }, 100);

        return clearInterval;
    }, []);

    React.useEffect(() => {
        cursorTimer.current = window.setInterval(() => {
            setShowCursor((prevState) => !prevState)
        }, cursorBlinkTimeInterval);

        return clearInterval;
    }, []);

    return (
        <Flex>
            <Code color='blue.800'>{name.slice(0, showNameIndex)}</Code>
            <Box
                bgColor={showCursor && 'blue.800'}
                w="9px"
                h="20px"
            />
        </Flex>
    )
}

export default Name;