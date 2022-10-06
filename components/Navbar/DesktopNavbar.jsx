import { Box, Stack, Link } from "@chakra-ui/react";

const DesktopNavbar = ({ navItems }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"lg"}
            fontWeight={700}
            color={"white"}
            _hover={{
              textDecoration: "none",
              color: "gray.800",
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNavbar;
