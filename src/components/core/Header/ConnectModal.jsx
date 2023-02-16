import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box, 
  Heading, 
  Text, 
  Link, 
  Button, 
  Image 
} from "@chakra-ui/react";
import { ChevronRightIcon, SmallCloseIcon } from '@chakra-ui/icons'
import React from "react";


const ConnectModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button
          onClick={onOpen}
          textTransform={"uppercase"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"10px"}
          bg={"rgba(255, 255, 255, 0.05)"}
          borderRadius={"5px"}
          maxW={"150px"}
          width={"100%"}
          height={"50px"}
          fontSize={{ xl: "16px", lg: "14px", md: "12px", base: "16px" }}
          lineHeight={"22.4px"}
          fontWeight={"400"}
          color={"#FFFFFF"}
          _hover={{ bg: "#E51041" }}
          _focus={{ bg: "#E51041" }}
          transition={"0.5s"}
        >
          <Image src="images/icon/wallet-icon.svg" alt="icon" />
          Connect
        </Button>

        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay 
            bg="rgba(0, 0, 0, 0.7)"
            backdropFilter="blur(2.5px)"
          >
          <ModalContent
            minH={"450px"}
            maxW={"440px"}
            bg={"#171C21"}
            backdropFilter={"blur(2.5px)"}
            width={"100%"}
            m={"auto"}
            overflow={"hidden"}
            borderRadius={"0px"}
          >
            <Box
                bgImage="url('images/modal/modal-bg.png')"
                bgPosition="center"
                bgRepeat="no-repeat"
                backgroundSize={"cover"}
                minH={"450px"}
                position={"relative"}
                px={"42"}
                pt={"44px"}
                pb={"50px"}
                overflow="hidden"
              >
                <Button
                  bg={"rgba(255, 255, 255, 0.1)"}
                  _hover={{ bg: "rgba(255, 255, 255, 0.1)", opacity: "0.8" }}
                  _focus={{ bg: "rgba(255, 255, 255, 0.1)", opacity: "0.8" }}
                  height={"41px"}
                  width={"78px"}
                  borderRadius={"0px"}
                  position={"absolute"}
                  right={"-25px"}
                  top={"-7px"}
                  transform={"rotateZ(45deg)"}
                  onClick={onClose}
                >
                  <SmallCloseIcon
                    fontSize={"24px"}
                    color={"#FFFFFF"}
                    transform={"rotateZ(-45deg)"}
                    mt={"10px"}
                  />
                </Button>

                <Heading
                  as="h2"
                  textAlign={"center"}
                  fontSize={{ xl: "24px" }}
                  lineHeight={{ xl: "28px" }}
                  fontWeight={"400"}
                  color={"#FFFFFF"}
                  mb={"26px"}
                  fontFamily={"primary"}
                  textTransform={"uppercase"}
                >
                  Connect Wallet
                </Heading>

                <Text
                  textAlign={"center"}
                  fontSize={"16px"}
                  lineHeight={"28px"}
                  fontWeight={"500"}
                  color={"#FFFFFF80"}
                  mb={"24px"}
                  fontFamily={"inter"}
                >
                  Please select a wallet to connect for start Minting your NFTs
                </Text>

                <Box>
                  <Button
                    onClick={onClose}
                    position={"relative"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    height={"60px"}
                    fontSize={"18px"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                    color={"#FFFFFF"}
                    mb={"20px"}
                    px={"30px"}
                    py={"16px"}
                    width={"100%"}
                    bg={"rgba(255, 255, 255, 0.08)"}
                    backdropFilter={"blur(5px)"}
                    borderRadius={"10px"}
                    _hover={{ bg: "rgba(255, 255, 255, 0.08)", opacity: "0.8" }}
                    _focus={{ bg: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <Image
                      src="images/modal/metamask-logo.png"
                      alt="img"
                      mr={"23px"}
                    />
                    MetaMask
                    <ChevronRightIcon
                      position={"absolute"}
                      right={"25px"}
                      fontSize="26px"
                    />
                  </Button>

                  <Button
                    onClick={onClose}
                    position={"relative"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    height={"60px"}
                    fontSize={"18px"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                    color={"#FFFFFF"}
                    mb={"20px"}
                    px={"30px"}
                    py={"16px"}
                    width={"100%"}
                    bg={"rgba(255, 255, 255, 0.08)"}
                    backdropFilter={"blur(5px)"}
                    borderRadius={"10px"}
                    _hover={{ bg: "rgba(255, 255, 255, 0.08)", opacity: "0.8" }}
                    _focus={{ bg: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <Image
                      src="images/modal/wallet-connect-logo.png"
                      alt="img"
                      mr={"23px"}
                    />
                    WalletConnect
                    <ChevronRightIcon
                      position={"absolute"}
                      right={"25px"}
                      fontSize="26px"
                    />
                  </Button>
                </Box>

                <Text
                  textAlign={"center"}
                  fontSize={"14px"}
                  lineHeight={"24px"}
                  fontWeight={"500"}
                  color={"#FFFFFF80"}
                  mt={"22px"}
                  fontFamily={"inter"}
                >
                  By connecting your wallet, you agree to our{" "}
                  <Link href="#" fontWeight={"500"} color={"#FFFFFF"}>
                    Terms of Service
                  </Link>{" "}
                  and our{" "}
                  <Link href="#" fontWeight={"500"} color={"#FFFFFF"}>
                    Privacy Policy.
                  </Link>
                </Text>
              </Box>
          </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
    );
}

export default ConnectModal;
