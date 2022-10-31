import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../src/components/Navbar";
import theme from "../src/data/theme";
import navItems from "../src/data/navItems";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <fonts>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <Navbar navItems={navItems} />
        <Component {...pageProps} />
      </fonts>
    </ChakraProvider>
  );
}

export default MyApp;
