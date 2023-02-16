import { Box, Container, Flex, Link, Image } from "@chakra-ui/react";
import React from "react";
import HeaderBtn from "./HeaderBtn";
import HeaderMenu from "./HeaderMenu";
import MobileMenu from "./MobileMenu";
import { useScrollPosition } from "./../../../hooks/useScrollPosition";

const Header = () => {
  const position = useScrollPosition();

  console.log(position);

  return (
    <>
      <Box
        py={position > 100 ? "10px" : "20px"}
        bg={position > 100 ? "#111b2295" : "transparent"}
        backdropFilter={position > 100 ? "blur(5px)" : "none"}
        position={"fixed"}
        top={"0px"}
        left={"0px"}
        width={"100%"}
        zIndex={"999"}
      >
        <Container maxW={"1171px"} mx={"auto"}>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"20px"}
          >
            <Box width={"45%"} display={{ md: "block", base: "none" }}>
              <HeaderMenu />
            </Box>
            <Box
              width={{ md: "10%", base: "100%" }}
              mx={"auto"}
              textAlign={"left"}
            >
              <Link
                href="http://localhost:3000/"
                height={{ md: "100px", sm: "80px", base: "70px" }}
                width={{ md: "100px", sm: "80px", base: "70px" }}
                mx={{ md: "auto" }}
                bg={"rgba(255, 255, 255, 0.05)"}
                borderRadius={"50%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src="images/logo.png"
                  alt="logo"
                  height={{ md: "150px", sm: "40px", base: "35px" }}
                  width={{ md: "200px", sm: "40px", base: "35px" }}
                />
              </Link>
            </Box>
            <Box
              width={"45%"}
              ml={"auto"}
              display={{ md: "block", base: "none" }}
            >
              <HeaderBtn />
            </Box>

            <Box display={{ md: "none", base: "block" }}>
              <MobileMenu />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
