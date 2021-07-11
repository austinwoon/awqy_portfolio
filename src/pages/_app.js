import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';

const theme = extendTheme({
    colors: {
        brand: {
            bgPrimary: '#FAFAFF',
            bgSecondary: '#FFFFFF',
            purple: '#7A73FF',
        },
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
        Divider: {
            baseStyle: {
                borderColor: '#e4e3e5',
            },
        },
        Code: {
            baseStyle: {
                fontSize: '16px',
            },
            variants: {
                subtle: {
                    backgroundColor: 'transparent',
                },
            },
        },
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
