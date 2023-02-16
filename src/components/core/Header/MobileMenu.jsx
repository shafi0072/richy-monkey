import {
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderBtn from "./HeaderBtn";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
      >
        <HamburgerIcon color="#FFFFFF" fontSize="32px" fontWeight="600" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgba(18, 26, 33, 0.8)" backdropFilter="blur(2px)" />
        <DrawerContent bg="#040C12" minW={{ base: "100%", sm: "50%" }}>
          <DrawerCloseButton color="#FFFFFF" fontSize="20px" />
          <DrawerHeader pt={"30px"} pb={"20px"}>
            <Link
              href="http://localhost:3000/"
              height={"100px"}
              width={"100px"}
              mx={"auto"}
              bg={"rgba(255, 255, 255, 0.05)"}
              borderRadius={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="images/logo.png"
                alt="logo"
                height={{ md: "50px", sm: "40px", base: "35px" }}
                width={{ md: "50px", sm: "40px", base: "35px" }}
              />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection="column"
              gap="25px"
              alignItems="center"
              justifyContent="center"
            >
              <HeaderMenu />
              <HeaderBtn />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
