import { Stack } from '@chakra-ui/react';
import HoverLink from '../HoverLink/HoverLink';

const fontStyles = {
    color: 'blue.900',
    fontWeight: 'medium',
    fontSize: ['lg', 'xl', '2xl', '2xl'],
};

const boxStyles = {
    pl: ['2', '3', '7', '10'],
    pr: ['2', '3', '7', '10'],
    pb: '1',
    pt: '1',
};
export const DesktopMenu = () => {
    return (
        <Stack direction={'row'}>
            <HoverLink
                boxStyles={boxStyles}
                fontStyles={fontStyles}
                content={'About'}
                scrollId={'about'}
            />

            <HoverLink
                boxStyles={boxStyles}
                fontStyles={fontStyles}
                content={'Portfolio'}
                scrollId={'portfolio'}
                scrollOffset={-70}
            />

            <HoverLink
                boxStyles={boxStyles}
                fontStyles={fontStyles}
                content={'Contact'}
                href={'mailto:austinwoonquanyi@gmail.com'}
            />
        </Stack>
    );
};

export default DesktopMenu;
