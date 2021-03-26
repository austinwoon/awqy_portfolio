import React from 'react';
import { WorkSelectedContext } from '../Contexts/WorkSelectedContext';
import {
    Img,
    Box,
    Flex,
    IconButton,
    Stack,
    useMediaQuery,
} from '@chakra-ui/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useSwipeable } from 'react-swipeable';
import MotionBox from '../FramerMotion/MotionBox';
import { tapBounceStyle } from '../../utils/framerMotionStyles';

const chevronStyles = {
    fontSize: '12vw',
    variant: 'link',
    _focus: {
        border: '0px',
    },
    color: 'blue.700',
    zIndex: 2,
};

const imageScaleIncrement = 1.3;

// TODO : Dynamically adjust image box size according to view width
const imageBoxSizes = {
    sm: 150,
    md: 150,
    lg: 250,
    xl: 300,
};

const ImageCarousel = () => {
    const {
        workSelected: { images },
        setWork,
    } = React.useContext(WorkSelectedContext);
    const [variants, setVariants] = React.useState({
        rightClick: {
            opacity: 0.5,
        },
        active: {
            x: '0',
            opacity: 1,
            scale: imageScaleIncrement,
            zIndex: 1,
            boxShadow: '0 15px 30px 0 rgba(0, 0, 0, 0.60)',
        },
        hidden: {
            opacity: 0,
            zIndex: -1,
            x: '0%',
        },
        left: {
            x: '-100%',
            opacity: 0.3,
            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        },
        right: {
            x: '100%',
            opacity: 0.3,
            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        },
    });
    // TODO (Austin) : remove hard coded stuff, this assumes always min 3 images
    const [positions, setPositions] = React.useState({
        left: 0,
        middle: 1,
        right: 2,
    });

    const [isSmallerThan1370, isMobile] = useMediaQuery([
        '(max-width: 1370px)',
        '(max-width: 450px)',
    ]);

    const swipeHandler = useSwipeable({
        onSwiped: ({ dir }) => {
            if (dir === 'Right') {
                handleRightClick();
            }

            if (dir === 'Left') {
                handleLeftClick();
            }
        },
        trackMouse: true,
        preventDefaultTouchmoveEvent: true,
    });
    const isHidden = (index, positions) => {
        return (
            Object.values(positions).findIndex((i) => Number(i) === index) ===
            -1
        );
    };
    const cyclicIndexSetter = (index, direction) => {
        index = Number(index);
        if (direction === 'left') {
            if (index === 0) {
                return images.length - 1;
            }
            return index - 1;
        } else if (direction === 'right') {
            if (index === images.length - 1) {
                return 0;
            }
            return index + 1;
        }
    };
    const handleRightClick = () => {
        setPositions((positions) => ({
            left: cyclicIndexSetter(positions['left'], 'right'),
            middle: cyclicIndexSetter(positions['middle'], 'right'),
            right: cyclicIndexSetter(positions['right'], 'right'),
        }));
    };
    const handleLeftClick = () => {
        setPositions((positions) => ({
            left: cyclicIndexSetter(positions['left'], 'left'),
            middle: cyclicIndexSetter(positions['middle'], 'left'),
            right: cyclicIndexSetter(positions['right'], 'left'),
        }));
    };
    const getAnimationStyle = (index) => {
        if (isHidden(index, positions)) {
            return 'hidden';
        } else if (index === positions['middle']) {
            return 'active';
        } else if (index === positions['left']) {
            return 'left';
        }
        return 'right';
    };
    const handleClickImage = (clickedImageIndex) => {
        if (clickedImageIndex === positions.right) {
            handleRightClick();
        }
        if (clickedImageIndex === positions.left) {
            handleLeftClick();
        }
    };

    React.useEffect(() => {
        let [transformXLeft, transformXRight] = ['-100%', '100%'];
        if (isSmallerThan1370) {
            [transformXLeft, transformXRight] = ['-60%', '60%'];
        }

        setVariants((variants) => ({
            ...variants,
            ['left']: {
                ...variants.left,
                x: transformXLeft,
            },
            ['right']: {
                ...variants.right,
                x: transformXRight,
            },
        }));
    }, [isSmallerThan1370]);

    return (
        <Flex direction={'column'} justify={'center'} align={'center'}>
            <Flex justify={'center'} align={'center'}>
                {!isMobile && (
                    <MotionBox {...tapBounceStyle}>
                        <IconButton
                            aria-label={'chevron-left'}
                            onClick={handleLeftClick}
                            icon={<ChevronLeftIcon />}
                            {...chevronStyles}
                        />
                    </MotionBox>
                )}
                <Flex
                    position={'relative'}
                    justify={'center'}
                    align={'center'}
                    height={[
                        `${imageBoxSizes['sm'] * imageScaleIncrement}px`,
                        `${imageBoxSizes['md'] * imageScaleIncrement}px`,
                        `${imageBoxSizes['lg'] * imageScaleIncrement}px`,
                        `${imageBoxSizes['xl'] * imageScaleIncrement}px`,
                    ]}
                    width={isMobile ? '95vw' : '60vw'}
                    maxWidth={[
                        `${imageBoxSizes['sm'] * 3}px`,
                        `${imageBoxSizes['md'] * 3}px`,
                        `${imageBoxSizes['lg'] * 3}px`,
                        `${imageBoxSizes['xl'] * 3}px`,
                    ]}
                    {...swipeHandler}
                >
                    {images.map((image, i) => (
                        <MotionBox
                            key={image.uuid}
                            transition={{
                                ease: 'backInOut',
                                bounce: 100,
                                duration: 0.4,
                            }}
                            initial={{
                                opacity: 1,
                            }}
                            animate={getAnimationStyle(i)}
                            variants={variants}
                            position={'absolute'}
                        >
                            <Img
                                src={image.src}
                                alt={image.alt}
                                boxSize={[
                                    `${imageBoxSizes['sm']}px`,
                                    `${imageBoxSizes['md']}px`,
                                    `${imageBoxSizes['lg']}px`,
                                    `${imageBoxSizes['xl']}px`,
                                ]}
                                style={{
                                    cursor: 'pointer',
                                }}
                                objectFit={'cover'}
                                onClick={() => handleClickImage(i)}
                            />
                        </MotionBox>
                    ))}
                </Flex>
                {!isMobile && (
                    <MotionBox {...tapBounceStyle}>
                        <IconButton
                            aria-label={'chevron-right'}
                            onClick={handleRightClick}
                            icon={<ChevronRightIcon />}
                            {...chevronStyles}
                        />
                    </MotionBox>
                )}
            </Flex>
            <Box
                mt={[
                    `${imageBoxSizes['sm'] * (imageScaleIncrement - 1)}px`,
                    `${imageBoxSizes['md'] * (imageScaleIncrement - 1)}px`,
                    `${imageBoxSizes['lg'] * (imageScaleIncrement - 1)}px`,
                    `${imageBoxSizes['xl'] * (imageScaleIncrement - 1)}px`,
                ]}
            >
                <ImageDotIndicator activeIndex={positions['middle']} />
            </Box>
        </Flex>
    );
};

const ImageDotIndicator = ({ activeIndex }) => {
    const {
        workSelected: { images },
    } = React.useContext(WorkSelectedContext);

    const circleStyles = {
        display: 'inline-block',
        h: ['10px', '10px', '12px', '12px'],
        w: ['10px', '10px', '12px', '12px'],
        borderRadius: '50%',
    };

    return (
        <Stack direction={'row'}>
            {images.map((v, i) => (
                <Box
                    {...circleStyles}
                    key={v.uuid + i + 'dot'}
                    bgColor={activeIndex === i ? 'gray.300' : 'gray.200'}
                />
            ))}
        </Stack>
    );
};

export default ImageCarousel;
