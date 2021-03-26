import { Box, Code, Flex } from '@chakra-ui/layout';
import React from 'react';
import { cursorBlinkTimeInterval } from '../../constants/introduction';

const name = 'Austin Woon';
const Name = ({ ...props }) => {
    const typeWriterTimer = React.useRef(null);
    const cursorTimer = React.useRef(null);
    const [showNameIndex, setShowNameIndex] = React.useState(0);
    const [showCursor, setShowCursor] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            typeWriterTimer.current = window.setInterval(() => {
                if (showNameIndex < name.length) {
                    setShowNameIndex((i) => i + 1);
                }
            }, 100);
        }, 1500);

        return clearInterval;
    }, []);

    React.useEffect(() => {
        cursorTimer.current = window.setInterval(() => {
            setShowCursor((prevState) => !prevState);
        }, cursorBlinkTimeInterval);

        return clearInterval;
    }, []);

    return (
        <Flex align="center" height={props.height}>
            <Code color="blue.800" fontSize={props.height}>
                > {name.slice(0, showNameIndex)}
            </Code>
            <Box
                bgColor={showCursor && 'blue.800'}
                w={['8px', '8px', '12px', '15px']}
                h={props.height}
            />
        </Flex>
    );
};

export default Name;
