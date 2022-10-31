import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Cormorant Garamond', sans-serif`,
  },
  brand: {
    orange: "#ed7d31",
    grey: "#7f7f7f",
    light_orange: "#f79646",
    brown: "#984807",
    light_grey: "#d9d9d9",
    light_brown: "#493c31",
    off_white: "#e0dbd1",
  },
});

export default theme;
