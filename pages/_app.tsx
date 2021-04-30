import '../public/lib/pdfjs/special.css';
// Chakra-UI
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
// TSX Support
import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={customTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
