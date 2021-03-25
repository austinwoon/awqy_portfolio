import { Box, Code, Flex } from '@chakra-ui/layout';
import React from 'react';
import { cursorBlinkTimeInterval } from '../../constants/introduction';

const name = 'Austin Woon';
const Name = () => {
    const typeWriterTimer = React.useRef(null);
    const cursorTimer = React.useRef(null);
    const [showNameIndex, setShowNameIndex] = React.useState(0);
    const [showCursor, setShowCursor] = React.useState(true);
    const [wait, setWait] = React.useState(true);
    // const timer = React.useRef(null);

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
        <Flex align="center" h={['45px', '54px', '72px', '90px']}>
            <Code color="blue.800" fontSize={['3xl', '4xl', '5xl', '6xl']}>
                {name.slice(0, showNameIndex)}
            </Code>
            <Box
                bgColor={showCursor && 'blue.800'}
                w={['8px', '8px', '12px', '15px']}
                h={['35px', '35px', '50px', '60px']}
            />
        </Flex>
    );
};

export default Name;
