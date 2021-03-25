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
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ImageCarousel from './ImageCarousel';
import { WorkSelectedContext } from '../Portfolio/WorkSelectedContext';
import { works } from '../../constants/work';
import { FaGithub } from 'react-icons/fa';
import MotionBox from '../FramerMotion/MotionBox';

const WorkModal = ({ onClose, isOpen }) => {
    const { workSelected } = React.useContext(WorkSelectedContext);

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
            <ModalOverlay />
            <ModalContent bgGradient="linear-gradient(190deg, blue.50, hsla(0,0%,45%,0) 100%)">
                <ModalHeader margin={'auto'}>
                    <Box mt={'5vh'}>
                        <Heading color="blue.700" mb={'2vh'} fontSize={'6xl'}>
                            {workSelected.title}
                        </Heading>
                        <Flex justify={'center'}>
                            {workSelected.links.map((linkInfo) => (
                                <LinkIcon {...linkInfo} />
                            ))}
                        </Flex>
                    </Box>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <Flex direction={'column'}>
                        <ImageCarousel images={workSelected.images} />
                        <Divider
                            margin="30px auto 30px auto"
                            maxWidth={'50vw'}
                        />
                        {workSelected.description.map((desc) => (
                            <Description
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

const LinkIcon = ({ logo, link }) => {
    const getButton = (logo) => {
        if (logo === 'Github') {
            return <Icon color="blue.400" boxSize="50px" as={FaGithub} />;
        }
        return <ExternalLinkIcon color="blue.400" boxSize={'50px'} />;
    };
    // TODO: Sep this into a component to standardize animation
    return (
        <Link
            isExternal
            _focus={{
                border: '0px',
            }}
            href={link}
        >
            <MotionBox
                whileHover={{
                    y: '-15%',
                    scale: 1.05,
                }}
                transition={{
                    duration: 0.3,
                    stiffness: 20,
                }}
                whileTap={{
                    y: '-10%',
                    scale: 0.8,
                    transition: {
                        duration: 0.1,
                    },
                }}
                ml={'50px'}
            >
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
                fontSize="xl"
                margin={'auto'}
                maxWidth={'50vw'}
                align={'justify'}
            >
                {desc}
            </Text>
        </Flex>
    );
};

export default WorkModal;
