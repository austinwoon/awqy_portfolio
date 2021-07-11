import { isValidMotionProp, motion } from 'framer-motion';
import { Box, forwardRef } from '@chakra-ui/react';
import React from 'react';

const MotionBox = motion(
    forwardRef((props, ref) => {
        // TODO (Make .babelrc and create real polyfills, too laze to change default next polyfill)
        Object.fromEntries =
            Object.fromEntries ||
            function (arr) {
                return arr.reduce(function (acc, curr) {
                    acc[curr[0]] = curr[1];
                    return acc;
                }, {});
            };

        const chakraProps = Object.fromEntries(
            // do not pass framer props to DOM element
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Box ref={ref} {...chakraProps} />;
    })
);

export default MotionBox;
