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
import { fontSizes, h2Sizes, themeBlue900 } from '../../utils/styles';
import MotionBox from '../FramerMotion/MotionBox';
import { tapBounceStyle, hoverStyle } from '../../utils/framerMotionStyles';
import ExpansionIcon from '../SvgIcons/ExpansionIcon';

const PortfolioCard = ({
    title,
    img,
    summary,
    technologies,
    onOpen,
    ...props
}) => {
    const [cardHovered, setCardHovered] = React.useState(false);
    return (
        <MotionBox
            {...props}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
            whileHover={{
                scale: 1.02,
            }}
            transition={{
                duration: 0.4,
            }}
            onClick={onOpen}
        >
            <Flex
                direction={'column'}
                padding={'5%'}
                boxShadow={'xl'}
                borderRadius={6}
                border="1px solid rgba(211, 211, 211, 0.5)"
                transition={'0.3s ease-in-out'}
                style={{
                    cursor: 'pointer',
                }}
                bgColor={'white'}
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

                <Flex justify={'flex-end'} pt={'1'} align="center">
                    <Box>
                        <ExpansionIcon
                            isHovered={cardHovered}
                            onClick={onOpen}
                            color={themeBlue900}
                        />
                    </Box>
                    {/* <Box>
                        <Link onClick={onOpen} fontSize={fontSizes}>
                            View More
                        </Link>
                    </Box> */}
                </Flex>
            </Flex>
        </MotionBox>
    );
};

export default PortfolioCard;
