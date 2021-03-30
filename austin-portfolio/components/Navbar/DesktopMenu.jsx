import { Stack } from '@chakra-ui/react';
import { landingPageSideMargins } from '../../utils/styles';
import HoverLink from '../HoverLink/HoverLink';

const fontStyles = {
    color: 'blue.900',
    fontWeight: 'medium',
    letterSpacing: 1.5,
    fontSize: ['sm', 'sm', 'md', 'lg'],
};

const boxStyles = {
    pl: ['1', '1', '1', '2'],
    pr: ['1', '1', '1', '2'],
    pb: '1',
    pt: '1',
};
export const DesktopMenu = () => {
    return (
        <Stack direction={'row'} mr={landingPageSideMargins}>
            <HoverLink
                boxStyles={{ ...boxStyles, pl: [] }}
                fontStyles={fontStyles}
                content={'ABOUT'}
                scrollId={'about'}
                // scrollOffset={-100}
            />

            <HoverLink
                boxStyles={boxStyles}
                fontStyles={fontStyles}
                content={'PORTFOLIO'}
                scrollId={'portfolio'}
                scrollOffset={-70}
            />

            <HoverLink
                boxStyles={{ ...boxStyles, pr: [] }}
                fontStyles={fontStyles}
                content={'CONTACT'}
                scrollId={'contact'}
                scrollOffset={-70}
            />
        </Stack>
    );
};

export default DesktopMenu;
