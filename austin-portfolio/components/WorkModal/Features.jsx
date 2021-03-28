import {
    Box,
    Heading,
    Icon,
    Flex,
    Text,
    Stack,
    Wrap,
    Grid,
    WrapItem,
    Divider,
} from '@chakra-ui/react';
import React from 'react';
import { FaLock } from 'react-icons/fa';
import {
    AiFillCustomerService,
    AiFillLock,
    AiFillNotification,
} from 'react-icons/Ai';
import { BsPeopleFill } from 'react-icons/bs';
import {
    h2Sizes,
    h3Sizes,
    fontSizesSmall,
    glassMorphism,
} from '../../utils/styles';

export const Features = ({ features }) => {
    return (
        <Grid templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gap={10}>
            {features.map((f) => (
                <Flex key={f.header}>
                    <Box overflow="hidden" mr={[5, 5, 8, 8]}>
                        <Box
                            h="20px"
                            borderWidth="1px"
                            borderColor="brand.purple"
                        ></Box>
                        <Divider orientation="vertical" />
                    </Box>

                    <Stack direction="column" spacing={2}>
                        <Icon
                            as={f.icon}
                            boxSize={'20px'}
                            color="brand.purple"
                        />
                        <Heading fontSize={h3Sizes} fontWeight="medium">
                            {f.header}
                        </Heading>
                        <Text fontSize={fontSizesSmall}>{f.description}</Text>
                    </Stack>
                </Flex>
            ))}
        </Grid>
    );
};

export default Features;
