import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';

const WorkGalleryBox = {
    baseStyle: {
        height: '100%',
        backgroundColor: 'blue',
    },
};

const theme = extendTheme({
    colors: {
        brand: { bgWhite: '#FAFAFF' },
    },
    components: {
        Heading: {
            baseStyle: {
                color: 'blue.900',
            },
        },
        Text: {
            baseStyle: {
                color: '#425466',
            },
        },
        WorkGalleryBox,
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
