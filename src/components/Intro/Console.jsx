import React from 'react';
import { Flex, Text, Box, Code, Stack, Link } from '@chakra-ui/react';
import MotionBox from '../FramerMotion/MotionBox';
import { cursorBlinkTimeInterval } from '../../constants/introduction';
import { v4 as uuidv4 } from 'uuid';
import { loadingEntryStyle } from '../../utils/framerMotionStyles';

const terminalText = [
    {
        uuid: uuidv4(),
        header: '> Austin.education',
        string:
            'B.Sc. Information Systems, Software Development Major - Singapore Management University',
    },
    {
        uuid: uuidv4(),
        header: '> Austin.country',
        string: 'Singapore',
    },
    {
        uuid: uuidv4(),
        header: '> Austin.resume',
        link: {
            text: 'austin_resume.pdf',
            link:
                'https://smu-my.sharepoint.com/:b:/g/personal/austinwoon_2017_sis_smu_edu_sg/EVaZY1gW19tDozQQ0Kzj2ewB3q7qVwqn-vot9NwnrblHfQ?e=Qs6idU',
        },
    },
    {
        uuid: uuidv4(),
        header: '> Austin.interests',
        arr: [
            'coffee',
            'food hunting',
            'hitting the gym',
            'hiking',
            'sports',
            'poker',
        ],
    },
    {
        uuid: uuidv4(),
        header: '> Austin.skills',
        arr: [
            'Javascript',
            'Typescript',
            'Python',
            'Java',
            'React',
            'Node',
            'GraphQL',
            'AWS',
        ],
    },
    {
        uuid: uuidv4(),
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
    fontSize: ['xs', 'sm', 'md', 'md'],
};
const codeSpacing = [3, 5, 7, 7];
const consoleBorderRadius = [8, 8, 12, 12];

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
            {...loadingEntryStyle}
            maxW={['90vw', '90vw', '80vw', '80vw']}
            boxShadow={'xl'}
            position={'relative'}
        >
            <Flex
                h={[6, 6, 9, 9]}
                borderTopLeftRadius={consoleBorderRadius}
                borderTopRightRadius={consoleBorderRadius}
                bgColor={'#e4e3e5'}
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
                pr={[3, 4, 5, 7]}
                pl={[3, 4, 5, 7]}
                overflow={'auto'}
                maxH={props.height}
                borderBottomLeftRadius={consoleBorderRadius}
                borderBottomRightRadius={consoleBorderRadius}
            >
                {terminalText.map((content) => {
                    if (content.end) {
                        return (
                            <Flex
                                pb={codeSpacing}
                                align="center"
                                key={content.uuid + 'terminalText'}
                            >
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
                        <Stack
                            spacing={0}
                            pb={codeSpacing}
                            key={content.uuid + 'terminalText'}
                        >
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
                                            return (
                                                <span key={str}>
                                                    {'[' + str + ', '}
                                                </span>
                                            );
                                        } else if (
                                            i ===
                                            content.arr.length - 1
                                        ) {
                                            return (
                                                <span key={str}>
                                                    {str + ']'}
                                                </span>
                                            );
                                        }
                                        return (
                                            <span key={str}>{str + ', '}</span>
                                        );
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
