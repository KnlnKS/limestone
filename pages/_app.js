import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import theme from "../src/data/theme";
import navItems from "../src/data/navItems";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <fonts>
        <Navbar navItems={navItems} />
        <Component {...pageProps} />
      </fonts>
    </ChakraProvider>
  );
}

export default MyApp;
