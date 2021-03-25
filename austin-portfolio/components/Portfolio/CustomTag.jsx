import React from 'react';
import { FaVuejs, FaReact, FaAws } from 'react-icons/fa';
import { SiGithubactions, SiGraphql, SiTerraform } from 'react-icons/si';
import { Tag, TagLabel, Icon } from '@chakra-ui/react';

const ICON_MAPPINGS = {
    Vue: { icon: FaVuejs, color: 'green.500' },
    React: { icon: FaReact, color: 'red.500' },
    AWS: { icon: FaAws, color: 'orange.500' },
    'Github Actions': { icon: SiGithubactions, color: 'blue.500' },
    GraphQL: { icon: SiGraphql, color: 'pink.500' },
    Terraform: { icon: SiTerraform, color: 'blue.600' },
};

const CustomTag = ({ tagName }) => {
    return (
        <React.Fragment>
            {ICON_MAPPINGS[tagName] ? (
                <Tag>
                    <Icon
                        mr={1}
                        as={ICON_MAPPINGS[tagName].icon}
                        color={ICON_MAPPINGS[tagName].color}
                    />
                    <TagLabel>{tagName}</TagLabel>
                </Tag>
            ) : (
                <Tag>{tagName}</Tag>
            )}
        </React.Fragment>
    );
};

export default CustomTag;
