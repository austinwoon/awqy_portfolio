import MotionBox from '../FramerMotion/MotionBox';
import { FaGithub, FaBitbucket } from 'react-icons/fa';
import { AiFillVideoCamera } from 'react-icons/ai';
import { hoverStyle, tapBounceStyle } from '../../utils/framerMotionStyles';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link, Icon } from '@chakra-ui/react';

const iconMappings = {
    Github: FaGithub,
    Bitbucket: FaBitbucket,
    Video: AiFillVideoCamera,
};
export const LinkIcon = ({ logo, link }) => {
    const getButton = (logo) => {
        return (
            <Icon
                boxSize={['25px', '25px', '25px', '30px']}
                as={iconMappings[logo]}
            />
        );
    };
    return (
        <Link
            isExternal
            _focus={{
                border: '0px',
            }}
            href={link}
        >
            <MotionBox {...hoverStyle} {...tapBounceStyle}>
                {getButton(logo)}
            </MotionBox>
        </Link>
    );
};

export default LinkIcon;
