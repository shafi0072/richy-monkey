import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Badge,
} from "@chakra-ui/react";

import { CheckIcon, SpinnerIcon } from "@chakra-ui/icons";
import React from "react";
import RoadmapSlider from "./RoadmapSlider";

const Roadmap = () => {
  return (
    <>
      <Box pt={"130px"} pb={"140px"} id="Roadmap">
        <Container maxW={"1171px"} mx={"auto"}>
          <Box>
            <Text
              color={"#E51041"}
              fontSize={{lg: "18px", md: "16px", sm: "14px", base: "12px"}}
              fontWeight={"400"}
              lineHeight={{lg: "25.2px", md: "22px", base: "18px" }}
              textTransform={"uppercase"}
              mb="15px"
            >
              Our Goals
            </Text>
            <Heading
              color={"#FFFFFF"}
              fontSize={{xl: "48px", lg: "42px", md: "36px", sm: "30px", base: "28px"}}
              fontWeight={"400"}
              lineHeight={{xl: "67px", lg: "50px", sm: "42px", base: "36px"}}
              textTransform={"uppercase"}
              fontFamily={"primary"}
            >
              Roadmap
            </Heading>
          </Box>
          <Box mt={"50px"} mb={"43px"}>
            <Image
              src="images/roadmap/roadmap-line.svg"
              alt="img"
              width={"100%"}
            />
          </Box>
          {/* <Flex
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            flexWrap={"wrap"}
            mx="-15px"
          >
            <Box width={{lg: "25%", md: "33.33%", sm: "50%", base: "100%"}} mb={"30px"} px={"15px"}>
              <Box
                bg={"rgba(255, 255, 255, 0.01)"}
                minH={"340px"}
                p={"20px"}
                borderRadius={"15px"}
                position={"relative"}
              >
                <CheckIcon
                  position={"absolute"}
                  right={"21px"}
                  top={"32px"}
                  color={"#FFFFFF"}
                  opacity={"0.3"}
                />
                <Heading
                  as="h3"
                  fontSize={{lg: "40px", md: "36px", base: "28px"}}
                  fontWeight={"400"}
                  lineHeight={"42px"}
                  color={"#FFFFFF"}
                  mb="17px"
                  fontFamily={"primary"}
                >
                  Q1
                </Heading>
                <Box>
                  <UnorderedList
                    color="#FFFFFF80"
                    fontFamily={"inter"}
                    fontSize={{xl: "15px", md: "14px", sm: "12px", base: "13px"}}
                    lineHeight={"24px"}
                    fontWeight={"500"}
                  >
                    <ListItem mb={"17px"}>Metaverse launch</ListItem>
                    <ListItem mb={"17px"}>
                      Publish Nest Bithu App (IOS & Google Play)
                    </ListItem>
                    <ListItem mb={"17px"}>Development of NFT market</ListItem>
                    <ListItem mb={"17px"}>Project White Paper</ListItem>
                    <ListItem mb={"17px"}>Start minting</ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>

            <Box width={{lg: "25%", md: "33.33%", sm: "50%", base: "100%"}} mb={"30px"} px={"15px"}>
              <Box
                bg={"rgba(255, 255, 255, 0.01)"}
                minH={"340px"}
                p={"20px"}
                borderRadius={"15px"}
                position={"relative"}
              >
                <CheckIcon
                  position={"absolute"}
                  right={"21px"}
                  top={"32px"}
                  color={"#FFFFFF"}
                  opacity={"0.3"}
                />
                <Heading
                  as="h3"
                  fontSize={{lg: "40px", md: "36px", base: "28px"}}
                  fontWeight={"400"}
                  lineHeight={"42px"}
                  color={"#FFFFFF"}
                  mb="17px"
                  fontFamily={"primary"}
                >
                  Q2
                </Heading>
                <Box>
                  <UnorderedList
                    color="#FFFFFF80"
                    fontFamily={"inter"}
                    fontSize={{xl: "15px", md: "14px", sm: "12px", base: "13px"}}
                    lineHeight={"24px"}
                    fontWeight={"500"}
                  >
                    <ListItem mb={"17px"}>First NFT pre-orders</ListItem>
                    <ListItem mb={"17px"}>Full-scale platform launch</ListItem>
                    <ListItem mb={"17px"}>Development of NFT market</ListItem>
                    <ListItem mb={"17px"}>Indie game portal</ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>

            <Box width={{lg: "25%", md: "33.33%", sm: "50%", base: "100%"}} mb={"30px"} px={"15px"}>
              <Box
                bg={"rgba(255, 255, 255, 0.01)"}
                minH={"340px"}
                p={"20px"}
                borderRadius={"15px"}
                position={"relative"}
              >
                <SpinnerIcon
                  position={"absolute"}
                  right={"21px"}
                  top={"32px"}
                  color={"#FFFFFF"}
                  opacity={"0.3"}
                />
                <Heading
                  as="h3"
                  fontSize={{lg: "40px", md: "36px", base: "28px"}}
                  fontWeight={"400"}
                  lineHeight={"42px"}
                  color={"#E51041"}
                  mb="17px"
                  fontFamily={"primary"}
                >
                  Q3
                </Heading>
                <Box>
                  <UnorderedList
                    color="#FFFFFF80"
                    fontFamily={"inter"}
                    fontSize={{xl: "15px", md: "14px", sm: "12px", base: "13px"}}
                    lineHeight={"24px"}
                    fontWeight={"500"}
                  >
                    <ListItem mb={"17px"}>Boost marketing across social mediums</ListItem>
                    <ListItem mb={"17px"}>Sponsor streamers</ListItem>
                    <ListItem mb={"17px"}>Blockchain domination</ListItem>
                    <ListItem mb={"17px"}>Hire Content teams</ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>

            <Box width={{lg: "25%", md: "33.33%", sm: "50%", base: "100%"}} mb={"30px"} px={"15px"}>
              <Box
                bg={"rgba(255, 255, 255, 0.01)"}
                minH={"340px"}
                p={"20px"}
                borderRadius={"15px"}
                position={"relative"}
              >
                <CheckIcon
                  position={"absolute"}
                  right={"21px"}
                  top={"32px"}
                  color={"#FFFFFF"}
                  opacity={"0.3"}
                />
                <Heading
                  as="h3"
                  fontSize={{lg: "40px", md: "36px", base: "28px"}}
                  fontWeight={"400"}
                  lineHeight={"42px"}
                  color={"#FFFFFF"}
                  mb="17px"
                  fontFamily={"primary"}
                >
                  Q4
                </Heading>
                <Box>
                  <UnorderedList
                    color="#FFFFFF80"
                    fontFamily={"inter"}
                    fontSize={{xl: "15px", md: "14px", sm: "12px", base: "13px"}}
                    lineHeight={"24px"}
                    fontWeight={"500"}
                  >
                    <ListItem mb={"17px"}>Separate: Limited time NFT bundles & Skins</ListItem>
                    <ListItem mb={"17px"}>Collection Launch</ListItem>
                    <ListItem mb={"17px"}>Development of NFT market</ListItem>
                    <ListItem mb={"17px"}>Web 3.0 E-commerce</ListItem>
                    <ListItem mb={"17px"}>Decentraland</ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>
          </Flex> */}

          <RoadmapSlider/>
          
        </Container>
      </Box>
    </>
  );
};

export default Roadmap;
