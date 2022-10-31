import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = ({ navItems }) => {
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme();

  return (
    <Box>
      <Flex
        bg={theme.brand.light_brown}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
        fontFamily={"Cormorant Garamond"}
        fontWeight={"normal"}
      >
        <Flex flex={{ base: 1 }} justify={"start"}>
          <Image
            src="/limestone_logo.png"
            alt="Limestone Capital Logo"
            width="110"
            height="50"
          />
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNavbar navItems={navItems} />
        </Flex>

        <Flex
          flex={{ base: 1, md: "auto" }}
          justify={"flex-end"}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavbar navItems={navItems} />
      </Collapse>
    </Box>
  );
};

export default Navbar;
