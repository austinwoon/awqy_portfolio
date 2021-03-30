import { Img, Wrap, WrapItem } from '@chakra-ui/react';
import MotionBox from '../FramerMotion/MotionBox';
import React from 'react';
import { marginBetweenSections, marginInterSection } from '../../utils/styles';

export const ImageExpandedView = ({ images }) => {
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
                    exit={{
                        x: '-50%',
                        opacity: 0,
                        transition: { duration: 0.3, ease: 'easeInOut' },
                    }}
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

export default ImageExpandedView;
