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
    Link,
    Box,
    Icon,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { WorkSelectedContext } from '../../contexts/WorkSelectedContext';
import { FaGithub } from 'react-icons/fa';
import MotionBox from '../FramerMotion/MotionBox';
import { fontSizes, h1Sizes, h2Sizes, h3Sizes } from '../../utils/styles';
import { hoverStyle, tapBounceStyle } from '../../utils/framerMotionStyles';
import Features from './Features';

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
                        <Heading color="blue.700" mb={'2vh'} fontSize={h1Sizes}>
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

                        <Box
                            ml={['1vw', '1vw', '15vw', '20vw']}
                            mr={['1vw', '1vw', '15vw', '20vw']}
                        >
                            <Divider mt="2vh" mb="2vh" />
                            {workSelected.description.map((desc) => (
                                <Description
                                    key={desc.header + workSelected.uuid}
                                    header={desc.header}
                                    content={desc.content}
                                />
                            ))}

                            <Heading fontSize={h2Sizes} mb="5">
                                Highlighted Features
                            </Heading>
                            <Box mb="5">
                                <Features features={workSelected.features} />
                            </Box>
                        </Box>
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

const Description = ({ header, content }) => {
    return (
        <Flex mb="5" direction={'column'} justify={'center'}>
            <Heading mb={'5'} fontSize={h2Sizes}>
                {header}
            </Heading>
            {content.map((line) => (
                <Text
                    key={line}
                    fontSize={fontSizes}
                    align={'left'}
                    mb={[3, 3, 4, 4]}
                >
                    {line}
                </Text>
            ))}
        </Flex>
    );
};

export default WorkModal;
