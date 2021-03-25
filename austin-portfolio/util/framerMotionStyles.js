import MotionBox from '../components/FramerMotion/MotionBox';
import React from 'react';

export const tapBounceStyle = {
    transition: {
        duration: 0.3,
        stiffness: 20,
    },
    whileTap: {
        scale: 0.8,
        transition: {
            duration: 0.1,
        },
    },
};

export const hoverStyle = {
    whileHover: {
        y: '-15%',
        scale: 1.05,
    },
};
