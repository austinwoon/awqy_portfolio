import React from 'react';
import { WorkSelectedContext } from './WorkSelectedContext';
import { Img, Flex, forwardRef, Box } from '@chakra-ui/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion';

const MotionBox = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            // do not pass framer props to DOM element
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Box ref={ref} {...chakraProps} />;
    })
);

const variants = {
    rightClick: {
        opacity: 0.5,
    },
    active: {
        x: '0',
        opacity: 1,
        scale: 1.3,
        zIndex: 1000,
        boxShadow: '0 15px 30px 0 rgba(0, 0, 0, 0.60)',
    },
    hidden: {
        opacity: 0,
        zIndex: -100,
        x: '0%',
    },
    left: {
        x: '-100%',
        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    right: {
        x: '100%',
        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
};

const ImageCarousel = () => {
    const {
        workSelected: { images: rawImages },
        setWork,
    } = React.useContext(WorkSelectedContext);

    // TODO (Austin) : remove hard coded shit
    const [positions, setPositions] = React.useState({
        left: 0,
        middle: 1,
        right: 2,
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
                return rawImages.length - 1;
            }
            return index - 1;
        } else if (direction === 'right') {
            if (index === rawImages.length - 1) {
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

    return (
        <Box>
            <Flex justify={'center'} align={'center'} position={'relative'}>
                <ChevronLeftIcon onClick={handleLeftClick} boxSize={'75px'} />
                {positions['left']}

                {rawImages.map((imageSrc, i) => (
                    <MotionBox
                        key={imageSrc}
                        transition={{
                            duration: 0.3,
                        }}
                        initial={{
                            opacity: 1,
                        }}
                        animate={getAnimationStyle(i)}
                        variants={variants}
                        position={'absolute'}
                        top={'100px'}
                    >
                        <Img
                            src={imageSrc}
                            alt={imageSrc}
                            boxSize={'300px'}
                            objectFit={'cover'}
                        />
                    </MotionBox>
                ))}
                <ChevronRightIcon onClick={handleRightClick} boxSize={'75px'} />
            </Flex>
        </Box>
    );
};

export default ImageCarousel;
