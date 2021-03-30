import { motion } from 'framer-motion';
import MotionBox from '../FramerMotion/MotionBox';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { MediaQueryContext } from '../../contexts/MediaQueryContext';
import { glassMorphism } from '../../utils/styles';

const variants = {
    topRight: {
        inactive: {
            d:
                'M93.5 9C93.5 7.61929 92.3807 6.5 91 6.5L68.5 6.5C67.1193 6.5 66 7.61929 66 9C66 10.3807 67.1193 11.5 68.5 11.5H88.5V31.5C88.5 32.8807 89.6193 34 91 34C92.3807 34 93.5 32.8807 93.5 31.5V9ZM61.7678 41.7678L92.7678 10.7678L89.2322 7.23224L58.2322 38.2322L61.7678 41.7678Z',
        },
        active: {
            d:
                'M99.5 3C99.5 1.61929 98.3807 0.500002 97 0.500002L74.5 0.500002C73.1193 0.500002 72 1.61929 72 3C72 4.38071 73.1193 5.5 74.5 5.5H94.5V25.5C94.5 26.8807 95.6193 28 97 28C98.3807 28 99.5 26.8807 99.5 25.5V3ZM67.7678 35.7678L98.7678 4.76777L95.2322 1.23224L64.2322 32.2322L67.7678 35.7678Z',
        },
    },
    bottomLeft: {
        active: {
            d:
                'M0.500002 96C0.500002 97.3807 1.61929 98.5 3 98.5H25.5C26.8807 98.5 28 97.3807 28 96C28 94.6193 26.8807 93.5 25.5 93.5H5.5V73.5C5.5 72.1193 4.38071 71 3 71C1.61929 71 0.500002 72.1193 0.500002 73.5L0.500002 96ZM32.2322 63.2322L1.23224 94.2322L4.76777 97.7678L35.7678 66.7678L32.2322 63.2322Z',
        },
        inactive: {
            d:
                'M6.5 90C6.5 91.3807 7.61929 92.5 9 92.5H31.5C32.8807 92.5 34 91.3807 34 90C34 88.6193 32.8807 87.5 31.5 87.5H11.5V67.5C11.5 66.1193 10.3807 65 9 65C7.61929 65 6.5 66.1193 6.5 67.5L6.5 90ZM38.2322 57.2322L7.23224 88.2322L10.7678 91.7678L41.7678 60.7678L38.2322 57.2322Z',
        },
    },
};
export const ExpansionIcon = ({
    color = 'black',
    onClick,
    boxSize = '34px',
    tabletBoxSize = '26px',
    mobileBoxSize = '20px',
    duration = 0.4,
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
            // bgColor="#F8F8F8"
            borderRadius="12px"
            padding={1}
        >
            <svg
                width={svgBoxSize}
                height={svgBoxSize}
                viewBox={'0 0 100 100'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={variants.bottomLeft}
                    d="M6.5 90C6.5 91.3807 7.61929 92.5 9 92.5H31.5C32.8807 92.5 34 91.3807 34 90C34 88.6193 32.8807 87.5 31.5 87.5H11.5V67.5C11.5 66.1193 10.3807 65 9 65C7.61929 65 6.5 66.1193 6.5 67.5L6.5 90ZM38.2322 57.2322L7.23224 88.2322L10.7678 91.7678L41.7678 60.7678L38.2322 57.2322Z"
                    animate={isHovered ? 'active' : 'inactive'}
                    transition={{
                        ease: 'easeInOut',
                        duration,
                    }}
                    fill={color}
                />
                <motion.path
                    variants={variants.topRight}
                    d="M93.5 9C93.5 7.61929 92.3807 6.5 91 6.5L68.5 6.5C67.1193 6.5 66 7.61929 66 9C66 10.3807 67.1193 11.5 68.5 11.5H88.5V31.5C88.5 32.8807 89.6193 34 91 34C92.3807 34 93.5 32.8807 93.5 31.5V9ZM61.7678 41.7678L92.7678 10.7678L89.2322 7.23224L58.2322 38.2322L61.7678 41.7678Z"
                    animate={isHovered ? 'active' : 'inactive'}
                    transition={{
                        ease: 'easeInOut',
                        duration,
                    }}
                    fill={color}
                />
            </svg>
        </Box>
    );
};

export default ExpansionIcon;
