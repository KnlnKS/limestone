import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  brand: {
    100: "#ed7d31",
    200: "#7f7f7f",
    300: "#f79646",
    400: "#984807",
    500: "#d9d9d9",
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
