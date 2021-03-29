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
import { h3Sizes, fontSizesSmall } from '../../utils/styles';

export const Features = ({ features }) => {
    return (
        <Grid templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'} gap={10}>
            {features.map((f) => (
                <Flex key={f.header}>
                    <Box mr={[5, 5, 8, 8]}>
                        <Box
                            left={0}
                            top={0}
                            h="20px"
                            borderLeftWidth="1px"
                            borderColor="brand.purple"
                        />
                        <Divider orientation="vertical" borderLeftWidth="1px" />
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
