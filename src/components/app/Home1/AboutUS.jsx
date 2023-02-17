import { Box, Flex, Image, Container, Text, Heading } from "@chakra-ui/react";
import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUSCardText = [
  {
    ImgUrl: "images/about-us/card-icon1.png",
    heading: "NFT T-SHIRTS",
    text: "Richy Monkey have the NFT T-Shirts ",
  },
  {
    ImgUrl: "images/about-us/card-icon2.png",
    heading: "Outlates",
    text: 'Get Our Outlate Location',
  },
  {
    ImgUrl: "images/about-us/card-icon3.png",
    heading: "Shop",
    text: "Jump into the shop",
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
            <Box
              width={{ md: "50%", base: "100%" }}
              pr={{ xl: "30px", md: "24px", base: "0px" }}
            >
              <Box
                p={"30px"}
                bg={"rgba(255, 255, 255, 0.05)"}
                backdropFilter={"blur(10px)"}
                borderRadius={"15px"}
                minH={"100%"}
                maxW={"420px"}
                maxH={"460px"}
              >
                <Box borderRadius={"10px"} overflow={"hidden"}>
                  <img
                    src="images/richy/safi02_cartoon_monkey_head_with_hoodie_and_sunglass._and_smocki_2e739afb-c013-45be-a480-bad2569364b2-2.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
            <Box
              width={{ md: "50%", base: "100%" }}
              mt={{ md: "0px", base: "30px" }}
            >
              <Box>
                <Text
                  color={"#E51041"}
                  fontSize={{
                    lg: "18px",
                    md: "16px",
                    sm: "14px",
                    base: "12px",
                  }}
                  fontWeight={"400"}
                  lineHeight={{ lg: "25.2px", md: "22px", base: "18px" }}
                  textTransform={"uppercase"}
                  mb="15px"
                >
                  The Story
                </Text>
                <Heading
                  color={"#FFFFFF"}
                  fontSize={{
                    xl: "48px",
                    lg: "42px",
                    md: "36px",
                    sm: "30px",
                    base: "28px",
                  }}
                  fontWeight={"400"}
                  lineHeight={{
                    xl: "67px",
                    lg: "50px",
                    sm: "42px",
                    base: "36px",
                  }}
                  textTransform={"uppercase"}
                  fontFamily={"primary"}
                >
                  About Us
                </Heading>
              </Box>

              <Box
                fontFamily={"inter"}
                mt={{ xl: "46px", lg: "30px", md: "24px", base: "20px" }}
                fontSize={{ xl: "18px", lg: "16px", md: "14px", base: "12px" }}
                fontWeight={"500"}
                lineHeight={{ lg: "28px", base: "24px" }}
                color={"#FFFFFF80"}
              >
                <Text mb={{ ld: "20px", base: "10px" }}>
                  One of the things that sets Richy Monkey apart from other
                  clothing brands is its commitment to creating new fashion
                  trends. The brand is constantly pushing the boundaries of what
                  is possible in the world of fashion, and its designers are
                  always looking for new ways to create exciting and innovative
                  designs. The brand's product line includes a wide variety of
                  clothing items, including t-shirts, jackets, pants, dresses,
                  and more. Each of these items is designed to be both
                  functional and fashionable, and the brand's attention to
                  detail and quality is evident in every piece. In addition to
                  its focus on fashion, Richy Monkey also takes pride in its
                  commitment to social and environmental responsibility. The
                  brand uses sustainable materials and ethical manufacturing
                  practices, and is committed to reducing its environmental
                  footprint in any way possible. Overall, Richy Monkey is a
                  brand that offers a unique and exciting fashion experience to
                  its customers. Whether you're looking for a new outfit for a
                  night out or just want to add some fresh style to your
                  wardrobe, Richy Monkey is a great choice.
                </Text>
                {/* <Text>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum
                </Text> */}
              </Box>
            </Box>
          </Flex>
          <Flex justifyContent={"flex-start"} mx={"-15px"} flexWrap={"wrap"}>
            {AboutUSCardText.map((AboutUSCard, index) => {
              return (
                <Box
                  key={index}
                  width={{ md: "33.33%", sm: "50%", base: "100%" }}
                  px={"15px"}
                  mb={"30px"}
                >
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
