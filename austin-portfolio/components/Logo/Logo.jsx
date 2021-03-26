import { Code, Flex } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { GoTriangleRight } from 'react-icons/go';

const Logo = () => (
    <Flex
        align={'center'}
        justify={'center'}
        border={'5px'}
        borderStyle={'solid'}
        color={'blue.900'}
    >
        <GoTriangleRight />
        <Code letterSpacing={3} fontWeight={'bold'} fontSize={'100%'}>
            {' '}
            wQy
        </Code>
    </Flex>
);

export default Logo;
