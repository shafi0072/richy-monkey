import {
  Box,
  Heading,
  Image,
  Flex,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { CheckIcon, SpinnerIcon } from '@chakra-ui/icons';

export default function RoadmapSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <CheckIcon
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"}
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
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

        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <CheckIcon
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"}
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
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

        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <Spinner 
              size='sm' 
              speed='0.8s'
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"} 
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
                lineHeight={"24px"}
                fontWeight={"500"}
              >
                <ListItem mb={"17px"}>
                  Boost marketing across social mediums
                </ListItem>
                <ListItem mb={"17px"}>Sponsor streamers</ListItem>
                <ListItem mb={"17px"}>Blockchain domination</ListItem>
                <ListItem mb={"17px"}>Hire Content teams</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>

        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <CheckIcon
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"}
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
                lineHeight={"24px"}
                fontWeight={"500"}
              >
                <ListItem mb={"17px"}>
                  Separate: Limited time NFT bundles & Skins
                </ListItem>
                <ListItem mb={"17px"}>Collection Launch</ListItem>
                <ListItem mb={"17px"}>Development of NFT market</ListItem>
                <ListItem mb={"17px"}>Web 3.0 E-commerce</ListItem>
                <ListItem mb={"17px"}>Decentraland</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>

        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <CheckIcon
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"}
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
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

        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <CheckIcon
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"}
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
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

        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <Spinner 
              size='sm' 
              speed='0.8s'
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"} 
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
                lineHeight={"24px"}
                fontWeight={"500"}
              >
                <ListItem mb={"17px"}>
                  Boost marketing across social mediums
                </ListItem>
                <ListItem mb={"17px"}>Sponsor streamers</ListItem>
                <ListItem mb={"17px"}>Blockchain domination</ListItem>
                <ListItem mb={"17px"}>Hire Content teams</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>

        <Box
          className="slider"
          width={{ lg: "25%", md: "33.33%", sm: "50%", base: "100%" }}
          mb={"30px"}
          px={"15px"}
        >
          <Box
            bg={"rgba(255, 255, 255, 0.01)"}
            minH={"340px"}
            p={"20px"}
            borderRadius={"15px"}
            position={"relative"}
          >
            <Image src="images/roadmap/roadmap-card-bg.png" alt="bgImg" position={"absolute"} width={"100%"} left={"0px"} top={"0px"} zIndex={"0"} />
            <CheckIcon
              position={"absolute"}
              right={"21px"}
              zIndex={"2"}
              top={"32px"}
              color={"#FFFFFF"}
              opacity={"0.3"}
            />
            <Heading
              as="h3"
              zIndex={"1"}
              position={"relative"}
              fontSize={{ lg: "40px", md: "36px", base: "28px" }}
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
                position={"relative"}
                zIndex={"1"}
                color="#FFFFFF80"
                fontFamily={"inter"}
                fontSize={{ xl: "15px", md: "14px", sm: "12px", base: "13px" }}
                lineHeight={"24px"}
                fontWeight={"500"}
              >
                <ListItem mb={"17px"}>
                  Separate: Limited time NFT bundles & Skins
                </ListItem>
                <ListItem mb={"17px"}>Collection Launch</ListItem>
                <ListItem mb={"17px"}>Development of NFT market</ListItem>
                <ListItem mb={"17px"}>Web 3.0 E-commerce</ListItem>
                <ListItem mb={"17px"}>Decentraland</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Slider>
    </div>
  );
}