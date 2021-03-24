import React from 'react';
import { Flex, Text, Box, Code, Stack, Link } from '@chakra-ui/react';
import MotionBox from '../FramerMotion/MotionBox';
import { cursorBlinkTimeInterval } from '../../constants/introduction';

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

const Console = () => {
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
        <Box maxWidth="50vw" boxShadow={'xl'}>
            <Flex
                h={9}
                borderTopLeftRadius={7}
                borderTopRightRadius={7}
                bgColor={'gray.100'}
                align={'center'}
            >
                <Box
                    display={'inline-block'}
                    h={'12px'}
                    w={'12px'}
                    margin={1}
                    ml={3}
                    borderRadius={'50%'}
                    bgColor={'#FF605C'}
                />
                <Box
                    display={'inline-block'}
                    h={'12px'}
                    w={'12px'}
                    margin={1}
                    borderRadius={'50%'}
                    bgColor={'#FFBD44'}
                />
                <Box
                    display={'inline-block'}
                    h={'12px'}
                    w={'12px'}
                    margin={1}
                    borderRadius={'50%'}
                    bgColor={'#00CA4E'}
                />
            </Flex>

            <Flex
                direction={'column'}
                bgColor={'#282a36'}
                pt={5}
                pl={10}
                pr={10}
                borderBottomLeftRadius={7}
                borderBottomRightRadius={7}
            >
                {terminalText.map((content) => {
                    if (content.end) {
                        return (
                            <Flex pb={7} align="center">
                                <Code color={'#f8f8f2'} mr={2}>
                                    {content.header}
                                </Code>
                                <Box
                                    bgColor={showCursor && '#f8f8f2'}
                                    w="9px"
                                    h="20px"
                                />
                            </Flex>
                        );
                    }
                    return (
                        <Stack spacing={0} pb={7}>
                            <Code color={'#f8f8f2'}>{content.header}</Code>

                            <Code color={'#f1fa8c'}>
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
                                            <Code color="#8be9fd">
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
        </Box>
    );
};

export default Console;
