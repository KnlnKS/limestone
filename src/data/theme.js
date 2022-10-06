import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Lato', sans-serif`,
  },
  brand: {
    orange: "#ed7d31",
    grey: "#7f7f7f",
    light_orange: "#f79646",
    brown: "#984807",
    light_grey: "#d9d9d9",
  },
});

export default theme;
