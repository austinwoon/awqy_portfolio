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
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { WorkSelectedContext } from '../../contexts/WorkSelectedContext';
import { fontSizes, h1Sizes, h2Sizes, h3Sizes } from '../../utils/styles';
import Features from './Features';
import CustomTag from '../Portfolio/CustomTag';
import LinkIcon from '../LinkIcon/LinkIcon';

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
                                <Box key={linkInfo.link + i} mr="10" ml="10">
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
                                </Box>
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
                            <Divider mt="5" mb="5" />

                            <Box mb="5">
                                {workSelected.description.map((desc, i) => (
                                    <Box
                                        mb={i !== desc.length - 1 ? 5 : 0}
                                        key={desc}
                                    >
                                        <Heading mb={'3'} fontSize={h2Sizes}>
                                            {desc.header}
                                        </Heading>

                                        {desc.header === 'About' && (
                                            <Wrap
                                                direction={'row'}
                                                wrap={'wrap'}
                                                mb={'3'}
                                            >
                                                {workSelected.technologies.map(
                                                    (name) => (
                                                        <WrapItem
                                                            key={
                                                                name +
                                                                workSelected.title
                                                            }
                                                        >
                                                            <CustomTag
                                                                tagName={name}
                                                            />
                                                        </WrapItem>
                                                    )
                                                )}
                                            </Wrap>
                                        )}

                                        <Description
                                            key={
                                                desc.header + workSelected.uuid
                                            }
                                            header={desc.header}
                                            content={desc.content}
                                        />
                                    </Box>
                                ))}
                            </Box>

                            <Heading fontSize={h2Sizes} mb="3">
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

const Description = ({ header, content }) => {
    return (
        <Flex direction={'column'} justify={'center'}>
            {content.map((line, i) => (
                <Text
                    key={line + 'description'}
                    fontSize={fontSizes}
                    align={'left'}
                    mb={i !== content.length - 1 ? 3 : 0}
                >
                    {line}
                </Text>
            ))}
        </Flex>
    );
};

export default WorkModal;
