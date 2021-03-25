import MotionBox from '../components/FramerMotion/MotionBox';
import React from 'react';

export const tapBounceStyle = {
    transition: {
        duration: 0.3,
        stiffness: 20,
    },
    whileTap: {
        scale: 1.0,
        transition: {
            duration: 0.1,
        },
    },
};

export const hoverStyle = {
    whileHover: {
        scale: 1.05,
    },
};
