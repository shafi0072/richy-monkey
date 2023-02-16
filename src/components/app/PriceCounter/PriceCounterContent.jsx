import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const PriceCounterContent = ({data}) => {
  console.log(data)
  return (
    <>
      <Box textAlign={{md: "left", base: "center"}}>
        <Heading
          as="h2"
          fontSize={{xl: "40px", lg: "32px", md: "28px", base: "24px" }}
          fontWeight={"400"}
          lineHeight={{xl: "36px", lg: "32px", md: "28px", base: "24px" }}
          color={"#FFFFFF"}
          fontFamily={"primary"}
        >
          {data?.heading}
        </Heading>
        <Text
          as="h4"
          fontSize={{xl: "18px", lg: "16px", base: "14px" }}
          fontWeight={"400"}
          lineHeight={{xl: "36px", lg: "32px", base: "24px" }}
          color={"#FFFFFF"}
          opacity={"80%"}
        >
          {data?.text}
        </Text>
      </Box>
    </>
  );
}

export default PriceCounterContent