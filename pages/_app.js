import '../styles/globals.css'

// Chakra-UI Wrapper => ChakraProvider
import { ChakraProvider } from "@chakra-ui/react"
// Import Chakra customizations as customTheme
import customTheme from `../theme/theme.js`


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={customTheme} resetCSS="true">
  <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
