export const h1Sizes = ['3xl', '4xl', '4xl', '5xl'];
export const h2Sizes = ['xl', 'xl', '2xl', '2xl'];
export const h3Sizes = ['lg', 'lg', 'lg', 'xl'];
export const fontSizes = ['sm', 'md', 'md', 'lg'];
export const fontSizesSmall = ['xs', 'sm', 'sm', 'sm'];

export const glassMorphism = (isBoxShadowTop) => ({
    backdropFilter: 'blur(17.5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    WebkitBackdropFilter: 'blur(17.5px)',
    borderBottom: !isBoxShadowTop && '1px solid (255, 255, 255, 0.18)',
    borderTop: isBoxShadowTop && '1px solid (255, 255, 255, 0.18)',
    boxShadow: `0 ${
        isBoxShadowTop ? '-8px' : '8px'
    } 32px 0 rgba(31, 38, 135, 0.15)`,
});

export const marginBetweenSections = [8, 9, 10, 12];
export const marginInterSection = [3, 4, 4, 5];

export const landingPageSideMargins = ['5vw', '5vw', '10vw', '10vw'];

export const themeBlue900 = '#1A365D';
