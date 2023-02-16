import { Container, Box, Heading, Flex, Button, Link, Image } from '@chakra-ui/react'
import React from 'react'
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <>
      <Box
        bgImage="url('images/footer/footer-bg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        pt={"121px"}

      >
        <Container maxW={"1171px"} mx={"auto"}>
          <Box textAlign={"center"}>
            <Heading
              fontSize={{xl: "48px", lg: "40px", sm: "30px", base: "24px" }}
              lineHeight={{xl: "70px", lg: "55px", sm: "42px", base: "36px" }}
              fontWeight={"400"}
              fontFamily={"primary"}
              color={"#FFFFFF"}
              textTransform={"uppercase"}
              mb={"47px"}
            >
              Join Our community & <br />
              get Early access <br />
              🤙
            </Heading>
            <Flex alignItems={"center"} flexWrap="wrap" justifyContent={"center"} gap={"30px"}>
              <Button
                className="btn-icon-hov"
                display={"flex"}
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
                _focus={{ bg: "#E51041", boxShadow: "none" }}
                position={"relative"}
                transition={"0.5s"}
              >
                Whitelist Now
              </Button>
              <Link
                display={"flex"}
                textAlign={"center"}
                justifyContent={"center"}
                gap={"9.16px"}
                textTransform={"uppercase"}
                height={"60px"}
                width={"200px"}
                bg={"rgba(0, 0, 0, 0.2)"}
                borderRadius={"5px"}
                boxShadow={"0px 4px 10px #5865F2"}
                backdropFilter={"blur(5px)"}
                fontSize={"16px"}
                lineHeight={"22px"}
                fontWeight={"400"}
                color={"#FFFFFF"}
                _hover={{ bg: "#5865F2", boxShadow: "none" }}
                position={"relative"}
                px={"30px"}
                py={"20px"}
              >
                <Image src="images/icon/dis-logo.png" alt="icon" height={"20px"} width={"25px"} />
                Join DIscord
              </Link>
            </Flex>
          </Box>
        </Container>
        <FooterBottom/>
      </Box>
    </>
  );
}

export default Footer