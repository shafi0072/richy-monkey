import { Box, Image, } from '@chakra-ui/react'
import React from 'react'

const Preloder = () => {

  return (
    <>
      <Box
        className="fadeOut"
        height={"100vh"}
        width={"100%"}
        position={"fixed"}
        bg={"#040F15"}
        top={"0px"}
        left={"0px"}
        zIndex={"0"}
      >
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            className="preloaderBox"
            height={{ md: "150px", base: "100px" }}
            width={{ md: "150px", base: "100px" }}
            bg={"rgba(255, 255, 255, 0.05)"}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
          >
            {/* <Image
              className="loader"
              src="images/richy/BlackandYellow TypographyT-shirt(2).png"
              alt="icon"
              position={"absolute"}
              left={"0px"}
              top={"0px"}
              borderRadius={"50%"}
            /> */}
            <Image 
              className="" 
              src="images/richy/BlackandYellow TypographyT-shirt(2).png" 
              // src="images/logo.png" 
              alt="icon" 
              position={"absolute"}
            />
           
            
            {/* <Image
              className="fadeOut4"
              src="images/icon/preloader-icon4.svg"
              alt="icon"
              position={"absolute"}
            /> */}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Preloder