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
    Img,
    Box,
    IconButton,
    Icon,
    Wrap,
    WrapItem,
    Button,
} from '@chakra-ui/react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { WorkSelectedContext } from '../../contexts/WorkSelectedContext';
import {
    fontSizes,
    fontSizesSmall,
    glassMorphism,
    h1Sizes,
    h2Sizes,
    themeBlue900,
} from '../../utils/styles';
import Features from './Features';
import CustomTag from '../Portfolio/CustomTag';
import LinkIcon from '../LinkIcon/LinkIcon';
import MotionBox from '../FramerMotion/MotionBox';
import { AnimatePresence } from 'framer-motion';
import { TiArrowBack } from 'react-icons/ti';
import { ExpansionIcon } from '../SvgIcons/ExpansionIcon';

const marginBetweenSections = [8, 9, 10, 12];
const marginInterSection = [3, 4, 4, 5];
const WorkModal = ({ onClose, isOpen }) => {
    const { workSelected } = React.useContext(WorkSelectedContext);

    const [isImageExpanded, setIsImageExpanded] = React.useState(false);
    const toggleImageExpanded = () => {
        setIsImageExpanded((expanded) => !expanded);
    };
    const handleCloseModal = () => {
        setIsImageExpanded(false);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal} size={'full'}>
            <ModalOverlay />
            <ModalContent bgColor="brand.bgWhite">
                <ModalCloseButton size={'lg'} />
                {isImageExpanded && <ModalHeader></ModalHeader>}

                <ModalBody>
                    <Box
                        mt={['2vh', '2vh', '3vh', '3vh']}
                        mb="8vh"
                        id="modal-top"
                    >
                        <AnimatePresence>
                            {isImageExpanded && (
                                <Box>
                                    <ImageExpandedView
                                        images={workSelected.images}
                                    />

                                    <Flex
                                        position="fixed"
                                        bottom="0"
                                        left="0"
                                        w="100%"
                                        bgColor="white"
                                        justify="center"
                                        align="center"
                                        p={5}
                                        style={{
                                            ...glassMorphism,
                                            borderTop:
                                                '1px solid (255, 255, 255, 0.18)',
                                        }}
                                        zIndex={5000}
                                    >
                                        <MotionBox whileHover={{ x: -10 }}>
                                            <Button
                                                h={'5vh'}
                                                variant={'subtle'}
                                                onClick={toggleImageExpanded}
                                            >
                                                <Icon
                                                    color="blue.900"
                                                    as={TiArrowBack}
                                                    boxSize={[
                                                        '50px',
                                                        '50px',
                                                        '70px',
                                                        '80px',
                                                    ]}
                                                />
                                                <Heading
                                                    color="blue.900"
                                                    {...h2Sizes}
                                                >
                                                    Return
                                                </Heading>
                                            </Button>
                                        </MotionBox>
                                    </Flex>
                                </Box>
                            )}
                        </AnimatePresence>
                    </Box>

                    {/* // TODO :Clean up this mess */}
                    {!isImageExpanded && (
                        <MotionBox>
                            <Flex
                                align={'center'}
                                direction={'column'}
                                mt={marginBetweenSections}
                                mb={marginBetweenSections}
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
                            <Flex
                                direction={'column'}
                                mb={'5vh'}
                                align="center"
                            >
                                <MotionBox>
                                    <ImageCarousel
                                        images={workSelected.images}
                                        isImageExpanded={isImageExpanded}
                                    />
                                </MotionBox>
                                <Box mt={marginInterSection}>
                                    <ExpandImages
                                        onClick={toggleImageExpanded}
                                    />
                                </Box>
                                <Box
                                    ml={['1vw', '1vw', '15vw', '20vw']}
                                    mr={['1vw', '1vw', '15vw', '20vw']}
                                >
                                    <Divider
                                        mt={marginInterSection}
                                        mb={marginBetweenSections}
                                    />

                                    <Box mb={marginBetweenSections}>
                                        {workSelected.description.map(
                                            (desc, i) => (
                                                <Box
                                                    mb={
                                                        i !== desc.length - 1
                                                            ? 5
                                                            : 0
                                                    }
                                                    key={desc}
                                                >
                                                    <Box
                                                        mb={marginInterSection}
                                                    >
                                                        <Heading
                                                            fontWeight="semibold"
                                                            fontSize={h2Sizes}
                                                        >
                                                            {desc.header}
                                                        </Heading>
                                                    </Box>

                                                    {desc.header ===
                                                        'About' && (
                                                        <Wrap
                                                            direction={'row'}
                                                            wrap={'wrap'}
                                                            mb={
                                                                marginInterSection
                                                            }
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
                                                                            tagName={
                                                                                name
                                                                            }
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
                                                            desc.header +
                                                            workSelected.uuid
                                                        }
                                                        content={desc.content}
                                                    />
                                                </Box>
                                            )
                                        )}
                                    </Box>

                                    <Heading
                                        fontSize={h2Sizes}
                                        mb={marginInterSection}
                                        fontWeight="semibold"
                                    >
                                        Highlighted Features
                                    </Heading>
                                    <Box mb={marginBetweenSections}>
                                        <Features
                                            features={workSelected.features}
                                        />
                                    </Box>
                                </Box>
                            </Flex>
                        </MotionBox>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const ImageExpandedView = ({ images }) => {
    return (
        <Wrap
            spacing={marginBetweenSections}
            align="center"
            justify="center"
            direction="column"
        >
            {images.map((image, i) => (
                <MotionBox
                    initial={{ x: '125%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    // exit={{ x: '-125%', opacity: 1 }}
                    transition={{
                        duration: 0.3 + i * 0.06,
                        ease: 'easeInOut',
                    }}
                >
                    <WrapItem
                        key={`${image.src}+expanded_view`}
                        boxShadow={'xl'}
                    >
                        <Img src={image.src} alt={image.alt} w={'80vw'} />
                    </WrapItem>
                </MotionBox>
            ))}
        </Wrap>
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

const ExpandImages = ({ onClick }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
                cursor: 'pointer',
            }}
        >
            <Flex align="center" justify="center" direction="column">
                <ExpansionIcon
                    onClick={onClick}
                    color={themeBlue900}
                    isHovered={isHovered}
                />
                {/* <Text variant="sub" onClick={onClick} fontSize={fontSizesSmall}>
                    Expand Images
                </Text> */}
            </Flex>
        </Box>
    );
};
export default WorkModal;
