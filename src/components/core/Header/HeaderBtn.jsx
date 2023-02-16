import { Box, Button, Link, Image, } from '@chakra-ui/react'
import React from 'react'
import ConnectModal from './ConnectModal';

const HeaderBtn = () => {
  return (
    <>
      <Box maxW={{md: "284px", base: "100%"}} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} ml="auto" gap={{md: "auto", base: "20px"}} flexDirection={{md: "row", base: "column"}}>
        <Link
          textTransform={"uppercase"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"10px"}
          bg={"rgba(255, 255, 255, 0.05)"}
          borderRadius={"5px"}
          maxW={{md: "114px", base: "150px"}}
          width={"100%"}
          height={"50px"}
          fontSize={{xl: "16px", lg: "14px", md: "12px", base: "16px" }}
          lineHeight={"22.4px"}
          fontWeight={"400"}
          color={"#FFFFFF"}
          _hover={{textDecoration: "none", bg: "#5865F2" }}
          transition={"0.5s"}
        >
          <Image src="images/icon/dis-logo.png" alt="icon" />
          Join
        </Link>
        
        <ConnectModal/>
      </Box>
    </>
  );
}

export default HeaderBtn