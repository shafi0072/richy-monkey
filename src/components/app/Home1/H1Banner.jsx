import { Image, Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import PriceCounter from "../PriceCounter/PriceCounter";

const H1Banner = () => {
  return (
    <>
      <Box
        bgImage="url('images/richy/BlackandYellow TypographyT-shirt(3).png')"
        bgPosition="center center"
        bgRepeat="no-repeat"
        backgroundSize={"800px"}
        pt={"216px"}
        pb={"64px"}
      >
        <Container maxW={"1171px"} mx={"auto"}>
            <Box
              position={"relative"}
              maxW={"782px"}
              mx={"auto"}
            >
             
              <Heading
                as="h2"
                textAlign={"center"}
                maxW={"500px"}
                width={"100%"}
                mx={"auto"}
                fontSize={{
                  xl: "60px",
                  md: "50px",
                  sm: "45px",
                  base: "32px",
                }}
                lineHeight={{
                  xl: "80px",
                  md: "60px",
                  sm: "55px",
                  base: "42px",
                }}
                fontWeight={"400"}
                color={"#FFFFFF"}
                marginBottom={{ lg: "22px", base: "18px" }}
                fontFamily={"primary"}
                textTransform={"uppercase"}
              >
                Richy Monkey <br />
                Your neighborhood Richy Monkey
              </Heading>
             
            </Box>
            <Link
              className="btn-icon-hov"
              // href={"http://localhost:3000/mint"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mx={"auto"}
              textTransform={"uppercase"}
              height={"60px"}
              width={"200px"}
              bg={"rgba(0, 0, 0, 0.2)"}
              borderRadius={"5px"}
              boxShadow={"0px 4px 10px #E51041"}
              backdropFilter={"blur(5px)"}
              fontSize={"16px"}
              lineHeight={"22px"}
              fontWeight={"400"}
              color={"#FFFFFF"}
              _hover={{ bg: "#E51041", boxShadow: "none" }}
              position={"relative"}
              transition={"0.5s"}
            >
              Buy Now
            </Link>
            <Box
              maxW={"496px"}
              width={"100%"}
              mx={"auto"}
              pt={"37px"}
              pb={"150px"}
            >
              
              <Heading
                as="h4"
                textTransform={"uppercase"}
                fontSize={{ lg: "18px", sm: "16px", base: "13px" }}
                fontWeight={"400"}
                lineHeight={{ lg: "36px", sm: "30px", base: "24px" }}
                color={"#FFFFFF"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
                fontFamily={"primary"}
                textAlign={"center"}
              >
                Price for whitelist: 0.15 ETH . Regular Price 300 USD
              </Heading>
              <Heading
                as="h4"
                textTransform={"uppercase"}
                fontSize={{ lg: "18px", sm: "16px", base: "13px" }}
                fontWeight={"400"}
                lineHeight={{ lg: "36px", sm: "30px", base: "24px" }}
                color={"#FFFFFF"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
                fontFamily={"primary"}
                textAlign={"center"}
              >
                Max 5 NFTs per wallet
              </Heading>
            </Box>

          <PriceCounter />
        </Container>
      </Box>
    </>
  );
};

export default H1Banner;
