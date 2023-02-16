import { Box, Flex, Heading, Text, Image, Center} from '@chakra-ui/react'
import React from 'react'

const AboutUsCard = ({data}) => {
  console.log(data)
  return (
    <>
      <Box 
        bg="rgba(255, 255, 255, 0.05)"
        p={{xl: "36px", base: "24px"}}
        borderRadius={"15px"}
        width={"100%"}
      >
        <Flex 
          gap={{lg: "13px", sm: "5px", base: "13px" }}
          mb={{lg: "18px", sm: "5px", base: "16px" }}
          alignItems={{ lg: "center", sm: "start", base: "center" }}
          flexDirection={{ lg: "row", sm: "column", base: "row" }}
        >
          <Image src={data?.ImgUrl} alt="icon" height={{xl: "50px", base: "30px"}} width={{xl: "50px", base: "30px"}} />
          <Heading
            fontSize={{xl: "24px", lg: "20px", sm: "18px", base: "20px"}}
            fontWeight={"400"}
            lineHeight={"40px"}
            fontFamily={"primary"}
            color={"#FFFFFF"}
          >
            {data?.heading}
          </Heading>
        </Flex>
        <Text
          fontSize={{lg: "16px", base: "14px" }}
          fontWeight={"500"}
          lineHeight={"28px"}
          fontFamily={"inter"}
          color={"#FFFFFF80"}
        >
          {data?.text}
        </Text>
      </Box>
    </>
  )
}

export default AboutUsCard