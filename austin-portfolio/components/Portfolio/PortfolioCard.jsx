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
            <Wrap
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
                spacing={[2, 2, 3, 3]}
                pl="5"
                pr="5"
            >
                <Flex justify="center">
                    <Img
                        src={img}
                        width={['400px', '400px', '400px', '500px']}
                        height={[
                            `${400 * 0.5}px`,
                            `${400 * 0.5}px`,
                            `${400 * 0.5}px`,
                            `${500 * 0.5}px`,
                        ]}
                        objectFit="cover"
                        boxShadow="lg"
                    />
                </Flex>

                <Wrap direction={'row'} wrap={'wrap'}>
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

                <Box>
                    <Text align={'justify'} fontSize={fontSizes}>
                        {summary}
                    </Text>
                </Box>

                <Flex justify={'flex-end'} align="center">
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
            </Wrap>
        </MotionBox>
    );
};

export default PortfolioCard;
