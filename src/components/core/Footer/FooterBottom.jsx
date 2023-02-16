import { Box, Container, Link, Image, Flex, Text, Center } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import React from 'react'

const FooterBottom = () => {
  return (
    <>
      <Box bg={"rgba(255, 255, 255, 0.05)"} pt={{md: "25px", base: "60px"}} pb={"25px"} mt={"200px"} position={"relative"} >
        <Container maxW={"1171px"} mx={"auto"}>
          <Flex justifyContent={"space-between"} alignItems={"center"} flexDirection={{ md: "row", base: "column-reverse" }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={{md: "flex-start", base: "center"}}
              gap={"28px"}
              width={{md: "47.5%", base: "100%" }}
            >
              <Link href="#" width={{lg: "50px", sm: "40px", base: "30px" }}>
                <Image src="images/logo.png" alt="logo" />
              </Link>
              <Text
                fontSize={{lg: "16px", sm: "15px", base: "14px" }}
                fontWeight={"500"}
                lineHeight={"40px"}
                color={"#FFFFFF80"}
                fontFamily={"inter"}
              >
                Copyright © 2022 &nbsp;
                <Link
                  href="#"
                  _hover={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  gamblers.gg
                </Link>
              </Text>
            </Box>
            <Link
              href="#"
              width={{md: "5%", base: "100%" }}
              position={{md: "relative", base: "absolute" }}
              top={"0px"}
              color={"#FFFFFF80"}
              fontSize={"50px"}
              mx={"auto"}
              textAlign={"center"}
              _hover={{ color: "#FFFFFF" }}
            >
              <ChevronUpIcon />
            </Link>

            <Box width={{md: "47.5%", base: "100%" }}>
              <Flex
                fontSize={{lg: "16px", sm: "15px", base: "14px" }}
                fontWeight={"500"}
                lineHeight={"40px"}
                color={"#FFFFFF80"}
                fontFamily={"inter"}
                maxW={"318px"}
                width={"100%"}
                ml={{md: "auto", base: "auto"}}
                mr={{md: "0px", base: "auto" }}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Link href="#" _hover={{ textDecoration: "none", color: "#FFFFFF" }}>
                  Home
                </Link>
                <Link href="#" _hover={{ textDecoration: "none", color: "#FFFFFF" }}>
                  About Us
                </Link>
                <Link href="#" _hover={{ textDecoration: "none", color: "#FFFFFF" }}>
                  Roadmap
                </Link>
                <Link href="#" _hover={{ textDecoration: "none", color: "#FFFFFF" }}>
                  FAQs
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default FooterBottom