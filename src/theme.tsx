import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif',
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif',
    },
    components: {
        Button: {
            variants: {
                'square': {
                    borderRadius: '0px',
                    _focus: {
                        boxShadow: '0px 0px 5px rgba(0, 0, 0)',
                    },
                },
            },
        },
    },
});

export default theme;