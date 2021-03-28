import React from 'react';
import {
    Heading,
    VStack,
    Box,
    Img,
    Flex,
    Wrap,
    Text,
    Link,
    WrapItem,
} from '@chakra-ui/react';
import CustomTag from './CustomTag';
import { fontSizes, h2Sizes } from '../../utils/styles';
import MotionBox from '../FramerMotion/MotionBox';
import { tapBounceStyle, hoverStyle } from '../../utils/framerMotionStyles';

const PortfolioCard = ({
    title,
    img,
    summary,
    technologies,
    onOpen,
    ...props
}) => {
    return (
        <MotionBox
            {...props}
            {...tapBounceStyle}
            {...hoverStyle}
            onClick={onOpen}
        >
            <Flex
                direction={'column'}
                padding={'5%'}
                boxShadow={'xl'}
                borderRadius={6}
                border="1px solid rgba(211, 211, 211, 0.5)"
                transition={'0.3s ease-in-out'}
                _hover={{
                    boxShadow: '2xl',
                    border: '3px solid lightblue',
                    zIndex: 100,
                }}
                style={{
                    cursor: 'pointer',
                }}
                bgColor={'brand.bgWhite'}
            >
                <Box mb={'5%'} boxShadow="lg">
                    <Img src={img} maxWidth={'100%'} objectFit="cover" />
                </Box>

                <Wrap direction={'row'} wrap={'wrap'} pb={'2'} pt={'1'}>
                    {technologies.map((name) => (
                        <WrapItem key={name + title}>
                            <CustomTag tagName={name} />
                        </WrapItem>
                    ))}
                </Wrap>

                <Box>
                    <Heading fontSize={h2Sizes} fontWeight="semibold">
                        {title}
                    </Heading>
                </Box>

                <Box mb={'2'} mt={'2'}>
                    <Text align={'justify'} fontSize={fontSizes}>
                        {summary}
                    </Text>
                </Box>

                <Flex justify={'flex-end'} pt={'1'}>
                    <Link onClick={onOpen} fontSize={fontSizes}>
                        View More
                    </Link>
                </Flex>
            </Flex>
        </MotionBox>
    );
};

export default PortfolioCard;
