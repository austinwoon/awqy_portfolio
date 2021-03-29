import { Code, Flex, Button } from '@chakra-ui/react';
import { GoTriangleRight } from 'react-icons/go';
import { Link as LinkSmoothScroll } from 'react-scroll';
import { hoverStyle } from '../../utils/framerMotionStyles';
import MotionBox from '../FramerMotion/MotionBox';

export const Logo = () => (
    <MotionBox {...hoverStyle}>
        <LinkSmoothScroll
            offset={-70}
            to={'about'}
            smooth={true}
            duration={500}
        >
            <Button p="0" variant="subtle">
                <Flex
                    align={'center'}
                    justify={'center'}
                    border={'3px'}
                    borderStyle={'solid'}
                    borderRadius={4}
                    color={'blue.900'}
                    pb="0.5"
                    pt="0.5"
                >
                    <GoTriangleRight />
                    <Code
                        letterSpacing={3}
                        fontWeight={'bold'}
                        fontSize={'100%'}
                    >
                        {' '}
                        wQy
                    </Code>
                </Flex>
            </Button>
        </LinkSmoothScroll>
    </MotionBox>
);

export default Logo;
