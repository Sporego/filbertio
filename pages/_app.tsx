// Chakra-UI
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
// TSX Support
import type { AppProps /*, AppContext */ } from 'next/app';

// Progress Bar Imports
import 'nprogress/nprogress.css'; //styles of nprogress

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={customTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
