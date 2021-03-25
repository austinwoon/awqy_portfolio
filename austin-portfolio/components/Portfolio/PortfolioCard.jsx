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
import { fontSizes } from '../../utils/fontSizes';
import MotionBox from '../FramerMotion/MotionBox';
import { tapBounceStyle, hoverStyle } from '../../utils/framerMotionStyles';
import {v4 as uuidv4} from "uuid";

const PortfolioCard = ({
    title,
    img,
    summary,
    technologies,
    onOpen,
    ...props
}) => {
    const techKeys = technologies.map((t) => ({name: t, key: uuidv4()}))
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
                boxShadow={'base'}
                borderRadius={6}
                transition={'0.3s ease-in-out'}
                _hover={{ boxShadow: 'lg', border: '1px solid lightgray' }}
                style={{
                    cursor: 'pointer',
                }}
                bgColor={'brand.bgWhite'}
            >
                <Box margin={'auto'} pb={'1'} pt={'1'}>
                    <Img src={img} maxWidth={'100%'} />
                </Box>

                <Wrap direction={'row'} wrap={'wrap'} pb={'1'} pt={'1'}>
                    {techKeys.map(({name, key}) => (
                        <WrapItem key={key}>
                            <CustomTag tagName={name} />
                        </WrapItem>
                    ))}
                </Wrap>

                <Box mb={'2%'} mt={'2%'}>
                    <Heading fontSize={['xl', 'xl', '3xl', '3xl']}>
                        {title}
                    </Heading>
                </Box>

                <Box mb={'2%'} mt={'2%'}>
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
