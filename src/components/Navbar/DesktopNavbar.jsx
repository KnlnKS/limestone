import { Box, Stack, Link, useTheme } from "@chakra-ui/react";
import NextLink from "next/link";

const DesktopNavbar = ({ navItems }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.href ?? "#"} passHref>
            <Link
              p={4}
              fontSize={"xl"}
              fontWeight={"bold"}
              color={theme.brand.off_white}
              _hover={{
                textDecoration: "none",
                color: "orange.300",
              }}
            >
              {navItem.label}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNavbar;
