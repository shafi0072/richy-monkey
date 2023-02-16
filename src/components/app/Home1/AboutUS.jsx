import { Box, Flex, Image, Container, Text, Heading } from "@chakra-ui/react";
import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUSCardText = [
  {
    ImgUrl: "images/about-us/card-icon1.png",
    heading: "Gamming NFTs",
    text: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.",
  },
  {
    ImgUrl: "images/about-us/card-icon2.png",
    heading: "Play to Earn",
    text: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original.',
  },
  {
    ImgUrl: "images/about-us/card-icon3.png",
    heading: "Metaverse Ready",
    text: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.",
  },
];

const AboutUS = () => {
  return (
    <>
      <Box
        bgImage="url('images/about-us/about-us-bg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize={"cover"}
        pt={"140px"}
        id="About"
      >
        <Container maxW={"1171px"} mx={"auto"}>
          <Flex
            pb={"100px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box width={{md: "50%", base: "100%"}} pr={{xl: "30px", md: "24px", base: "0px"}}>
              <Box
                p={"30px"}
                bg={"rgba(255, 255, 255, 0.05)"}
                backdropFilter={"blur(10px)"}
                borderRadius={"15px"}
                minH={"100%"}
                maxW={"420px"}
                maxH={"460px"}
              >
                <Box
                  borderRadius={"10px"}
                  overflow={"hidden"}
                >
                <img src="images/richy/safi02_cartoon_monkey_head_with_hoodie_and_sunglass._and_smocki_2e739afb-c013-45be-a480-bad2569364b2-2.png" alt="" />
                </Box>
              </Box>
            </Box>
            <Box width={{md: "50%", base: "100%"}} mt={{md: "0px", base: "30px"}}>
              <Box>
                <Text
                  color={"#E51041"}
                  fontSize={{lg: "18px", md: "16px", sm: "14px", base: "12px"}}
                  fontWeight={"400"}
                  lineHeight={{lg: "25.2px", md: "22px", base: "18px" }}
                  textTransform={"uppercase"}
                  mb="15px"
                >
                  The Story
                </Text>
                <Heading
                  color={"#FFFFFF"}
                  fontSize={{xl: "48px", lg: "42px", md: "36px", sm: "30px", base: "28px"}}
                  fontWeight={"400"}
                  lineHeight={{xl: "67px", lg: "50px", sm: "42px", base: "36px"}}
                  textTransform={"uppercase"}
                  fontFamily={"primary"}
                >
                  About Us
                </Heading>
              </Box>

              <Box
                fontFamily={"inter"}
                mt={{xl: "46px", lg: "30px", md: "24px", base: "20px" }}
                fontSize={{xl: "18px", lg: "16px", md: "14px", base: "12px" }}
                fontWeight={"500"}
                lineHeight={{lg: "28px", base: "24px"}}
                color={"#FFFFFF80"}
              >
                <Text mb={{ld: "20px", base: "10px" }}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur
                  cites of the word in classical literature.
                </Text>
                <Text>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex justifyContent={"flex-start"} mx={"-15px"} flexWrap={"wrap"}>
            {AboutUSCardText.map((AboutUSCard) => {
              return (
                <Box width={{md: "33.33%", sm: "50%", base: "100%"}} px={"15px"} mb={"30px"}>
                  <AboutUsCard data={AboutUSCard} />
                </Box>
              );
            })}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AboutUS;
