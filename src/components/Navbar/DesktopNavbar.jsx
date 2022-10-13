import {Box, Stack, Link, useTheme} from "@chakra-ui/react";

const DesktopNavbar = ({navItems}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} spacing={4}>
            {navItems.map((navItem) => (
                <Box key={navItem.label}>
                    <Link
                        p={4}
                        href={navItem.href ?? "#"}
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
                </Box>
            ))}
        </Stack>
    );
};

export default DesktopNavbar;
