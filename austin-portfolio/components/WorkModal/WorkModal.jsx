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
import { fontSizes, h1Sizes, h2Sizes } from '../../utils/styles';
import Features from './Features';
import CustomTag from '../Portfolio/CustomTag';
import LinkIcon from '../LinkIcon/LinkIcon';

const marginBetweenSections = [8, 9, 10, 12];
const marginInterSection = [3, 4, 4, 5];
const WorkModal = ({ onClose, isOpen }) => {
    const { workSelected } = React.useContext(WorkSelectedContext);

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
            <ModalOverlay />
            <ModalContent bgColor="brand.bgWhite">
                <ModalHeader>
                    <Flex
                        align={'center'}
                        direction={'column'}
                        mt={marginBetweenSections}
                    >
                        <Heading color="blue.700" fontSize={h1Sizes}>
                            {workSelected.title}
                        </Heading>

                        <Box mt={marginInterSection}>
                            <LinksToWork
                                links={workSelected.links}
                                ml={5}
                                mr={5}
                            />
                        </Box>
                    </Flex>
                </ModalHeader>

                <ModalCloseButton size={'lg'} />

                <ModalBody>
                    <Flex direction={'column'} mb={'5vh'} align="center">
                        <ImageCarousel images={workSelected.images} />

                        <Box
                            ml={['1vw', '1vw', '15vw', '20vw']}
                            mr={['1vw', '1vw', '15vw', '20vw']}
                        >
                            <Divider
                                mt={marginBetweenSections}
                                mb={marginBetweenSections}
                            />

                            <Box mb={marginBetweenSections}>
                                {workSelected.description.map((desc, i) => (
                                    <Box
                                        mb={i !== desc.length - 1 ? 5 : 0}
                                        key={desc}
                                    >
                                        <Box mb={marginInterSection}>
                                            <Heading
                                                fontWeight="semibold"
                                                fontSize={h2Sizes}
                                            >
                                                {desc.header}
                                            </Heading>
                                        </Box>

                                        {desc.header === 'About' && (
                                            <Wrap
                                                direction={'row'}
                                                wrap={'wrap'}
                                                mb={marginInterSection}
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
                                                                tagSize={[
                                                                    'md',
                                                                    'lg',
                                                                ]}
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
                                            content={desc.content}
                                        />
                                    </Box>
                                ))}
                            </Box>

                            <Heading
                                fontSize={h2Sizes}
                                mb={marginInterSection}
                                fontWeight="semibold"
                            >
                                Highlighted Features
                            </Heading>
                            <Box mb={marginBetweenSections}>
                                <Features features={workSelected.features} />
                            </Box>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const Description = ({ content }) => {
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

const LinksToWork = ({ links, ml, mr }) => {
    return (
        <Flex justify={'center'} align={'center'}>
            {links.map((linkInfo, i) => (
                <Box
                    key={linkInfo.link + i}
                    ml={ml}
                    mr={mr}
                    color="brand.purple"
                >
                    <LinkIcon {...linkInfo} />
                </Box>
            ))}
        </Flex>
    );
};

export default WorkModal;
