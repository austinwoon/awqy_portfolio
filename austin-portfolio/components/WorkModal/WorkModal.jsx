import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Flex,
    Divider,
    Heading,
    Box,
    Link,
    Icon,
    Spacer,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ImageCarousel from './ImageCarousel';
import { WorkSelectedContext } from '../Contexts/WorkSelectedContext';
import { FaGithub } from 'react-icons/fa';
import MotionBox from '../FramerMotion/MotionBox';
import { fontSizes, headingSizes } from '../../utils/fontSizes';
import { hoverStyle, tapBounceStyle } from '../../utils/framerMotionStyles';

const WorkModal = ({ onClose, isOpen }) => {
    const { workSelected } = React.useContext(WorkSelectedContext);

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
            <ModalOverlay />
            <ModalContent bgGradient="linear-gradient(190deg, blue.50, hsla(0,0%,45%,0) 100%)">
                <ModalHeader>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        direction={'column'}
                        mt={'5vh'}
                    >
                        <Heading
                            color="blue.700"
                            mb={'2vh'}
                            fontSize={headingSizes}
                        >
                            {workSelected.title}
                        </Heading>
                        <Flex justify={'center'} align={'center'}>
                            {workSelected.links.map((linkInfo, i) => (
                                <React.Fragment key={linkInfo.link + i}>
                                    <LinkIcon
                                        {...linkInfo}
                                        mrStyle={
                                            i !==
                                                workSelected.links.length -
                                                    1 && [
                                                '30px',
                                                '40px',
                                                '40px',
                                                '50px',
                                            ]
                                        }
                                    />
                                </React.Fragment>
                            ))}
                        </Flex>
                    </Flex>
                </ModalHeader>

                <ModalCloseButton size={'lg'} />

                <ModalBody>
                    <Flex direction={'column'}>
                        <ImageCarousel images={workSelected.images} />
                        <Divider margin="2vh auto 2vh auto" maxWidth={'50vw'} />
                        {workSelected.description.map((desc) => (
                            <Description
                                key={desc.header}
                                header={desc.header}
                                desc={desc.content}
                            />
                        ))}
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const LinkIcon = ({ logo, link, mrStyle }) => {
    const getButton = (logo) => {
        if (logo === 'Github') {
            return (
                <Icon
                    color="blue.400"
                    boxSize={['30px', '40px', '40px', '50px']}
                    as={FaGithub}
                />
            );
        }
        return (
            <ExternalLinkIcon
                color="blue.400"
                boxSize={['30px', '40px', '40px', '50px']}
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
            mr={mrStyle}
        >
            <MotionBox {...hoverStyle} {...tapBounceStyle}>
                {getButton(logo)}
            </MotionBox>
        </Link>
    );
};

const Description = ({ header, desc }) => {
    return (
        <Flex mb="5" direction={'column'} align={'center'} justify={'center'}>
            <Heading mb={'5'}>{header}</Heading>
            <Text
                fontSize={fontSizes}
                maxWidth={['100vw', '100vw', '50vw', '50vw']}
                align={'justify'}
            >
                {desc}
            </Text>
        </Flex>
    );
};

export default WorkModal;
