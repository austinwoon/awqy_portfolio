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

const PortfolioCard = ({ title, img, summary, technologies, onOpen }) => {
    return (
        <Flex direction={'column'} padding={'5%'} boxShadow={'base'}>
            <Box pb={'1'} pt={'1'}>
                <Img src={img} maxWidth={'300px'} />
            </Box>

            <Wrap direction={'row'} wrap={'wrap'} pb={'1'} pt={'1'}>
                {technologies.map((t) => (
                    <WrapItem>
                        <CustomTag tagName={t} />
                    </WrapItem>
                ))}
            </Wrap>

            <Box pb={'1'} pt={'1'}>
                <Heading size={'md'}>{title}</Heading>
            </Box>

            <Box pb={'1'} pt={'1'}>
                <Text align={'justify'}>{summary}</Text>
            </Box>

            <Flex justify={'flex-end'} pt={'1'}>
                <Link onClick={onOpen}>View More</Link>
            </Flex>
        </Flex>
    );
};

export default PortfolioCard;
