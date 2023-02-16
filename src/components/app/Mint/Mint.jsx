import {
  Box,
  Flex,
  Container,
  Text,
  Heading,
  Button,
  Input,
  Link,
} from "@chakra-ui/react";
import React from "react";

const Mint = () => {
  return (
    <>
      <Box
        minH={"100vh"}
        height="100%"
        bgImage="url('images/mint/mint-bg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize={"cover"}
        display={"flex"}
        alignItems={"Center"}
        pt={"140px"}
        pb={{lg: "20px", base: "100px"}}
      >
        <Container maxW={"1171px"} mx={"auto"}>
          <Box
            bg={"#171C21"}
            backdropFilter={"blur(2.5px)"}
            px={{lg: "50px", md: "30px", sm: "40px", base: "20px"}}
            py={{lg: "50px", md: "30px", sm: "40px", base: "20px"}}
            borderRadius={"10px"}
            maxW={"850px"}
            width={"100%"}
            mx={"auto"}
          >
            <Flex alignItems={"center"} flexWrap={"wrap"} justifyContent={"space-between"}>
              <Box width={{md: "47.5%", base:"100%"}} mb={{md: "0px", base: "30px"}}>
                <Box
                  borderRadius={"10px"}
                  maxW={"360px"}
                  width={"100%"}
                  overflow={"hidden"}
                >
                  <video loop autoPlay="true" playsInline muted>
                    <source
                      src="images/about-us/about-us-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Box>
              </Box>

              <Box width={{md: "47.5%", base:"100%"}}>
                <Heading
                  as="h3"
                  fontSize={"24px"}
                  fontWeight={"400"}
                  lineHeight={"36px"}
                  mb={"21px"}
                  textTransform={"uppercase"}
                  color={"#FFFFFF"}
                  fontFamily={"primary"}
                  maxW={"276px"}
                  width={"100%"}
                >
                  collect YOUR NFT before end
                </Heading>

                <Flex
                  fontSize={{sm: "16px", base: "12px"}}
                  lineHeight={"19px"}
                  fontWeight={"600"}
                  height={"56px"}
                  fontFamily={"inter"}
                  color={"#FFFFFF"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  borderBottom={"1px solid rgba(255, 255, 255, 0.1)"}
                >
                  <Text>Remaining</Text>
                  <Text>263 / 1000</Text>
                </Flex>

                <Flex
                  fontSize={"16px"}
                  lineHeight={"19px"}
                  fontWeight={"600"}
                  height={"56px"}
                  fontFamily={"inter"}
                  color={"#FFFFFF"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  borderBottom={"1px solid rgba(255, 255, 255, 0.1)"}
                >
                  <Text>Price</Text>
                  <Text>0.22 ETH</Text>
                </Flex>

                <Flex
                  fontSize={"16px"}
                  lineHeight={"19px"}
                  fontWeight={"600"}
                  height={"56px"}
                  fontFamily={"inter"}
                  color={"#FFFFFF"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  borderBottom={"1px solid rgba(255, 255, 255, 0.1)"}
                >
                  <Text>Quantity</Text>

                  <Box>
                    <Button
                      bg={"transparent"}
                      p={"0"}
                      _hover={{ bg: "transparent", opacity: "0.8" }}
                      _focus={{ bg: "transparent" }}
                    >
                      -
                    </Button>
                    <Input
                      value="2"
                      textAlign={"center"}
                      maxW={"58px"}
                      width={"100%"}
                      mx={"auto"}
                      outline={"none"}
                      height={"56px"}
                      borderRadius={"0px"}
                      borderTop={"none"}
                      borderBottom={"none"}
                      borderLeft={"1px solid rgba(255, 255, 255, 0.1)"}
                      borderRight={"1px solid rgba(255, 255, 255, 0.1)"}
                      bg={"transparent"}
                      _hover={{
                        borderTop: "none",
                        borderBottom: "none",
                        borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRight: "1px solid rgba(255, 255, 255, 0.1)"
                      }}
                    />
                    <Button
                      bg={"transparent"}
                      p={"0"}
                      _hover={{ bg: "transparent", opacity: "0.8" }}
                      _focus={{ bg: "transparent" }}
                    >
                      +
                    </Button>
                  </Box>

                  <Text>0.44 ETH</Text>
                </Flex>

                <Link
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mx={"auto"}
                  mt={"30px"}
                  textTransform={"uppercase"}
                  height={"60px"}
                  width={"100%"}
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
                  Mint Now
                </Link>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Mint;
