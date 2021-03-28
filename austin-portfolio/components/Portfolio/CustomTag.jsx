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
import { Tag, TagLabel, Icon, Text, Flex } from '@chakra-ui/react';

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
        <Tag boxShadow="base">
            {ICON_MAPPINGS[tagName] ? (
                <Flex>
                    <Icon
                        mr={1}
                        as={ICON_MAPPINGS[tagName].icon}
                        color={ICON_MAPPINGS[tagName].color}
                    />
                    <TagLabel>
                        <Text>{tagName}</Text>
                    </TagLabel>
                </Flex>
            ) : (
                <Text>{tagName}</Text>
            )}
        </Tag>
    );
};

export default CustomTag;
