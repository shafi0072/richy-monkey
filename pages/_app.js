// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import LayoutWrapper from '../src/components/core/ThemeWrapper'
import theme from '../src/theme'
import '../public/style/style.css'

function Gamblers({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  )
}

export default Gamblers