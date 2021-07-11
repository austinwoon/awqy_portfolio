import React from 'react';
import { FaVuejs, FaReact, FaAws } from 'react-icons/fa';
import {
    SiGithubactions,
    SiGraphql,
    SiTerraform,
    SiSpring,
    SiPython,
    SiPostgresql,
} from 'react-icons/si';
import { Tag, TagLabel, Icon, Text, Flex, TagLeftIcon } from '@chakra-ui/react';
import { fontSizesSmall } from '../../utils/styles';

const ICON_MAPPINGS = {
    Vue: { icon: FaVuejs, color: 'green.500' },
    React: { icon: FaReact, color: 'red.500' },
    AWS: { icon: FaAws, color: 'orange.500' },
    'Github Actions': { icon: SiGithubactions, color: 'blue.500' },
    GraphQL: { icon: SiGraphql, color: 'pink.500' },
    Terraform: { icon: SiTerraform, color: 'blue.600' },
    Spring: { icon: SiSpring, color: 'green.600' },
    Python: { icon: SiPython, color: 'blue.400' },
    Postgresql: { icon: SiPostgresql, color: 'blue.400' },
};

const CustomTag = ({ tagName }) => {
    return (
        <Tag boxShadow="base" size={'sm'}>
            {ICON_MAPPINGS[tagName] ? (
                <Flex align="center" justify="center">
                    <TagLeftIcon
                        boxSize={['12px', '12px', '14px', '16px']}
                        as={ICON_MAPPINGS[tagName].icon}
                        color={ICON_MAPPINGS[tagName].color}
                    />
                    <TagLabel>
                        <Text
                            fontSize={fontSizesSmall}
                            mt={[0, 0, 0, 1]}
                            mb={[0, 0, 0, 1]}
                        >
                            {tagName}
                        </Text>
                    </TagLabel>
                </Flex>
            ) : (
                <Text
                    fontSize={fontSizesSmall}
                    mt={[0, 0, 0, 1]}
                    mb={[0, 0, 0, 1]}
                >
                    {tagName}
                </Text>
            )}
        </Tag>
    );
};

export default CustomTag;
