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
        }, 1200);

        return clearInterval;
    }, []);

    React.useEffect(() => {
        cursorTimer.current = window.setInterval(() => {
            setShowCursor((prevState) => !prevState);
        }, cursorBlinkTimeInterval);

        return clearInterval;
    }, []);

    React.useEffect(() => {
        if (showNameIndex === name.length - 1) {
            clearInterval(cursorTimer.current);
            setShowCursor(false);
        }
    }, [showNameIndex]);

    return (
        <Flex align="center" height={['28px', '32px', '36px', '40px']}>
            <Code color="blue.900" fontSize={['28px', '32px', '36px', '40px']}>
                {'>'} {name.slice(0, showNameIndex)}
            </Code>
            <Box
                bgColor={showCursor && 'blue.900'}
                w={['8px', '8px', '12px', '15px']}
                h={['28px', '32px', '36px', '40px']}
            />
        </Flex>
    );
};

export default Name;
