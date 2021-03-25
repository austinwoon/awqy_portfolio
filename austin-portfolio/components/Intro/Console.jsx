import React from 'react';
import { Flex, Text, Box, Code, Stack, Link } from '@chakra-ui/react';
import MotionBox from '../FramerMotion/MotionBox';
import { cursorBlinkTimeInterval } from '../../constants/introduction';
import { loadingEntryProps } from '../../constants/framerMotion';

const terminalText = [
    {
        header: '> Austin.country',
        string: 'Singapore',
    },
    {
        header: '> Austin.interests',
        arr: [
            'coffee',
            'food hunting',
            'hitting the gym',
            'hiking',
            'tennis',
            'ultimate frisbee',
            'drinking?',
        ],
    },
    {
        header: '> Austin.education',
        string:
            'B.Sc. Information Systems, Software Development Major - Singapore Management University',
    },
    {
        header: '> Austin.resume',
        link: {
            text: 'austin_resume.pdf',
            link: '/austin_resume.pdf',
        },
    },
    {
        header: '> Austin.skills',
        arr: [
            'React',
            'Redux',
            'Vue',
            'Node',
            'GraphQL',
            'Javascript',
            'AWS',
            'Python',
            'Java',
        ],
    },
    {
        header: '>',
        end: true,
    },
];
const consoleButtonStyles = {
    display: 'inline-block',
    h: ['10px', '10px', '12px', '12px'],
    w: ['10px', '10px', '12px', '12px'],
    margin: 1,
    ml: [1, 1, 3, 3],
    borderRadius: '50%',
};
const codeStyles = {
    fontSize: ['xs', 'sm', 'md', 'lg'],
};
const codeSpacing = [3, 5, 7, 7];

const Console = ({ ...props }) => {
    const timer = React.useRef(null);
    const [showCursor, setCursor] = React.useState(true);

    const clearInterval = () => {
        window.clearInterval(timer.current);
    };

    React.useEffect(() => {
        timer.current = window.setInterval(() => {
            setCursor((prevState) => !prevState);
        }, cursorBlinkTimeInterval);

        return clearInterval;
    }, []);

    return (
        <MotionBox
            {...loadingEntryProps}
            maxW={['100vw', '100vw', '60vw', '75vw']}
            boxShadow={'xl'}
            position={'relative'}
        >
            <Flex
                h={[6, 6, 9, 9]}
                borderTopLeftRadius={7}
                borderTopRightRadius={7}
                bgColor={'gray.200'}
                align={'center'}
                position={'absolute'}
                w={'100%'}
            >
                <Box {...consoleButtonStyles} bgColor={'#FF605C'} />
                <Box {...consoleButtonStyles} bgColor={'#FFBD44'} />
                <Box {...consoleButtonStyles} bgColor={'#00CA4E'} />
            </Flex>

            <Flex
                direction={'column'}
                bgColor={'#282a36'}
                zIndex={100}
                mt={[6, 6, 9, 9]}
                pt={[3, 3, 5, 5]}
                pr={[5, 5, 10, 10]}
                pl={[5, 5, 10, 10]}
                overflow={'auto'}
                maxH={props.height}
            >
                {terminalText.map((content) => {
                    if (content.end) {
                        return (
                            <Flex pb={codeSpacing} align="center">
                                <Code {...codeStyles} color={'#f8f8f2'} mr={2}>
                                    {content.header}
                                </Code>
                                <Box
                                    bgColor={showCursor && '#f8f8f2'}
                                    w={['5px', '5px', '9px', '9px']}
                                    h={['18px', '20px', '25px', '25px']}
                                />
                            </Flex>
                        );
                    }
                    return (
                        <Stack spacing={0} pb={codeSpacing}>
                            <Code {...codeStyles} color={'#f8f8f2'}>
                                {content.header}
                            </Code>

                            <Code {...codeStyles} color={'#f1fa8c'}>
                                {content?.string && (
                                    <Box>{`"${content.string}"`}</Box>
                                )}
                                {content?.arr &&
                                    content.arr.map((item, i) => {
                                        let str = `"${item}"`;
                                        if (i === 0) {
                                            return '[' + str + ', ';
                                        } else if (
                                            i ===
                                            content.arr.length - 1
                                        ) {
                                            return str + ']';
                                        }
                                        return str + ', ';
                                    })}
                                {content?.link && (
                                    <MotionBox
                                        position={'relative'}
                                        whileHover={{ top: -3 }}
                                        transition={{
                                            duration: 0.3,
                                            bounce: 0.1,
                                        }}
                                    >
                                        <Link
                                            href={content.link.link}
                                            isExternal
                                        >
                                            <Code
                                                {...codeStyles}
                                                color="#8be9fd"
                                            >
                                                {`"${content.link.text}"`}
                                            </Code>
                                        </Link>
                                    </MotionBox>
                                )}
                            </Code>
                        </Stack>
                    );
                })}
            </Flex>
        </MotionBox>
    );
};

export default Console;
