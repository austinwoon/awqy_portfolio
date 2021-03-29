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
        scale: 1.15,
    },
    transition: {
        duration: 0.4,
    },
};

export const loadingEntryStyle = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        duration: 0.5,
        bounce: 1,
        ease: 'backInOut',
    },
    // below attribute is needed because of SSR
    opacity: 0,
};
