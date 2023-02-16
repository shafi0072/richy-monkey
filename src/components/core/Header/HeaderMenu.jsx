import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

const HeaderMenu = () => {
  return (
    <>
      <Box
        maxW={"440px"}
        width={"100%"}
        py={"13px"}
        px={"30px"}
        bg={{md: "rgba(255, 255, 255, 0.05)"}}
        borderRadius={"5px"}
      >
        <Flex
          fontSize={{xl: "16px", lg: "14px", md: "12px", base: "16px" }}
          lineHeight={"22px"}
          textTransform={"uppercase"}
          fontWeight={"400"}
          color={"#FFFFFF"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{md: "row", base: "column" }}
          gap={{md: "auto", base: "15px"}}
        >
          <Link href="http://localhost:3000/" _hover={{textDecoration: "none", opacity: "0.7"}}>Home</Link>
          <Link href="#About" _hover={{textDecoration: "none", opacity: "0.7"}}>About</Link>
          <Link href="#Roadmap" _hover={{textDecoration: "none", opacity: "0.7"}}>Roadmap</Link>
          <Link href="#Team" _hover={{textDecoration: "none", opacity: "0.7"}}>Team</Link>
          <Link href="#FAQ" _hover={{textDecoration: "none", opacity: "0.7"}}>FAQ</Link>
        </Flex>
      </Box>
    </>
  );
};

export default HeaderMenu;
