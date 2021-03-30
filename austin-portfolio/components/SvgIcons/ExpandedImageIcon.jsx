import { motion } from 'framer-motion';
import MotionBox from '../FramerMotion/MotionBox';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { MediaQueryContext } from '../../contexts/MediaQueryContext';

const variants = {
    topRight: {
        active: {
            d:
                'M101.5 9C101.5 7.61929 100.381 6.5 99 6.5H76.5C75.1193 6.5 74 7.61929 74 9C74 10.3807 75.1193 11.5 76.5 11.5H96.5V31.5C96.5 32.8807 97.6193 34 99 34C100.381 34 101.5 32.8807 101.5 31.5V9ZM86.7678 24.7678L100.768 10.7678L97.2322 7.23223L83.2322 21.2322L86.7678 24.7678Z',
        },
        inactive: {
            d:
                'M95.5 15C95.5 13.6193 94.3807 12.5 93 12.5H70.5C69.1193 12.5 68 13.6193 68 15C68 16.3807 69.1193 17.5 70.5 17.5H90.5V37.5C90.5 38.8807 91.6193 40 93 40C94.3807 40 95.5 38.8807 95.5 37.5V15ZM80.7678 30.7678L94.7678 16.7678L91.2322 13.2322L77.2322 27.2322L80.7678 30.7678Z',
        },
    },
    topLeft: {
        active: {
            d:
                'M2.5 92C2.5 93.3807 3.61929 94.5 5 94.5H27.5C28.8807 94.5 30 93.3807 30 92C30 90.6193 28.8807 89.5 27.5 89.5H7.5V69.5C7.5 68.1193 6.38071 67 5 67C3.61929 67 2.5 68.1193 2.5 69.5V92ZM17.2322 76.2322L3.23223 90.2322L6.76777 93.7678L20.7678 79.7678L17.2322 76.2322Z',
        },
        inactive: {
            d:
                'M8.5 86C8.5 87.3807 9.61929 88.5 11 88.5H33.5C34.8807 88.5 36 87.3807 36 86C36 84.6193 34.8807 83.5 33.5 83.5H13.5V63.5C13.5 62.1193 12.3807 61 11 61C9.61929 61 8.5 62.1193 8.5 63.5V86ZM23.2322 70.2322L9.23223 84.2322L12.7678 87.7678L26.7678 73.7678L23.2322 70.2322Z',
        },
    },
};
export const ExpandedImageIcon = ({
    color = 'black',
    onClick,
    boxSize = '48px',
    tabletBoxSize = '38px',
    mobileBoxSize = '32px',
    isHovered,
}) => {
    const { isMobile, isTablet } = React.useContext(MediaQueryContext);
    const [svgBoxSize, setBoxSize] = React.useState(boxSize);

    React.useEffect(() => {
        if (isMobile) {
            setBoxSize(mobileBoxSize);
        } else if (isTablet) {
            setBoxSize(tabletBoxSize);
        } else {
            setBoxSize(boxSize);
        }
    }, [isMobile, isTablet]);
    return (
        <Box
            onClick={onClick}
            _hover={{
                cursor: 'pointer',
            }}
        >
            <svg
                width={svgBoxSize * 1.04}
                height={svgBoxSize}
                viewBox={'-8 -5 104 100'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0)">
                    <motion.path
                        variants={variants.topRight}
                        d="M95.5 15C95.5 13.6193 94.3807 12.5 93 12.5H70.5C69.1193 12.5 68 13.6193 68 15C68 16.3807 69.1193 17.5 70.5 17.5H90.5V37.5C90.5 38.8807 91.6193 40 93 40C94.3807 40 95.5 38.8807 95.5 37.5V15ZM80.7678 30.7678L94.7678 16.7678L91.2322 13.2322L77.2322 27.2322L80.7678 30.7678Z"
                        animate={isHovered ? 'active' : 'unactive'}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.2,
                        }}
                        fill={color}
                    />
                    <motion.path
                        variants={variants.topLeft}
                        d="M8.5 86C8.5 87.3807 9.61929 88.5 11 88.5H33.5C34.8807 88.5 36 87.3807 36 86C36 84.6193 34.8807 83.5 33.5 83.5H13.5V63.5C13.5 62.1193 12.3807 61 11 61C9.61929 61 8.5 62.1193 8.5 63.5V86ZM23.2322 70.2322L9.23223 84.2322L12.7678 87.7678L26.7678 73.7678L23.2322 70.2322Z"
                        animate={isHovered ? 'active' : 'unactive'}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.2,
                        }}
                        fill={color}
                    />
                    <path
                        d="M74.1447 30.5823H29.8553C28.0764 30.5823 26.6342 32.0217 26.6342 33.797V66.7487C26.6342 68.524 28.0764 69.9633 29.8553 69.9633H74.1447C75.9236 69.9633 77.3659 68.524 77.3659 66.7486V33.797C77.3659 32.0217 75.9237 30.5823 74.1447 30.5823ZM74.1447 33.797V57.1773L67.7968 51.4172C66.8426 50.5517 65.3754 50.5862 64.4638 51.4968L58.0393 57.9079L45.3719 42.8064C44.4144 41.6652 42.6605 41.654 41.6886 42.7815L29.8553 56.5071V33.797H74.1447ZM60.4553 42.2358C60.4553 39.7942 62.4377 37.8155 64.8841 37.8155C67.3306 37.8155 69.3131 39.7942 69.3131 42.2358C69.3131 44.6775 67.3307 46.6561 64.8841 46.6561C62.4378 46.6562 60.4553 44.6775 60.4553 42.2358Z"
                        fill={color}
                    />
                </g>
            </svg>
        </Box>
    );
};

export default ExpandedImageIcon;
