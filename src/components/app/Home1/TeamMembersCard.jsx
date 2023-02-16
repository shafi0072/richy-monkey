import { Box, Heading, Image, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'

const TeamMembersCard = ({data}) => {
  const [isClick, setIsClick] = useState(false)
  const clickHandler = () => {
    setIsClick(prev => !prev)
  }
  return (
    <>
      <Box
        bg={"rgba(217, 217, 217, 0.1)"}
        pt={"100px"}
        px={"30px"}
        pb={"34px"}
        backdropFilter={"blur(5px)"}
        borderRadius={"20px"}
        position={"relative"}
        overflow={"hidden"}
      >
       
       
        <Box borderRadius={"20px"} overflow={"hidden"} mb={"21px"}>
          <Image
            src={data?.TeamMemberImg}
            alt="img"
            height={"100%"}
            width={"100%"}
            objectFit={"cover"}
          />
        </Box>

        <Box>
          <Heading
            as="h5"
            fontSize={"24px"}
            fontWeight={"400"}
            lineHeight={"34px"}
            fontFamily={"primary"}
            color={"#FFFFFF"}
            mb={"7px"}
          >
            {data?.name}
          </Heading>
          <Text
            fontSize={"16px"}
            fontWeight={"500"}
            lineHeight={"19px"}
            fontFamily={"inter"}
            color={"#FFFFFF80"}
            mb={"20px"}
          >
            {data?.lable}
          </Text>
          <Button
            onClick={clickHandler}
            fontSize={"16px"}
            fontWeight={"500"}
            lineHeight={"19px"}
            fontFamily={"inter"}
            color={"#FFFFFF80"}
            bg={"transparent"}
            p={"0px"}
            textTransform={"uppercase"}
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
          >
            About Me +
          </Button>
        </Box>

        {isClick && (
          <Box
            py={"22px"}
            px={"30px"}
            position={"absolute"}
            height={"100%"}
            width={"100%"}
            bgGradient={
              "linear(180deg, rgba(41, 49, 53, 0.7) 0%, #293135 70.31%)"
            }
            backdropFilter={"blur(5px)"}
            borderRadius={"20px"}
            left={"0px"}
            bottom={"0px"}
            transition={"0.3s"}
          >
            <Box
              height={"100%"}
              width={"100%"}
              position={"relative"}
              display={"flex"}
              justifyContent={"flex-end"}
              flexDirection={"column"}
            >
              <Button
                onClick={clickHandler}
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"19px"}
                fontFamily={"inter"}
                color={"#FFFFFF80"}
                bg={"transparent"}
                p={"0px"}
                textTransform={"uppercase"}
                _hover={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
                justifyContent={"flex-end"}
                position={"absolute"}
                top={"21px"}
                right={"0px"}
              >
                <CloseIcon />
              </Button>
              <Heading
                as="h5"
                fontSize={"24px"}
                fontWeight={"400"}
                lineHeight={"34px"}
                fontFamily={"primary"}
                color={"#FFFFFF"}
                mb={"7px"}
              >
                {data?.name}
              </Heading>
              <Text
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"19px"}
                fontFamily={"inter"}
                color={"#FFFFFF80"}
                mb={"20px"}
              >
                {data?.lable}
              </Text>
              <Button
                onClick={clickHandler}
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"19px"}
                fontFamily={"inter"}
                color={"#FFFFFF80"}
                bg={"transparent"}
                p={"0px"}
                justifyContent={"flex-start"}
                textTransform={"uppercase"}
                _hover={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
              >
                About Me -
              </Button>

              <Text
              mt={"22px"}
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"28px"}
                fontFamily={"inter"}
                color={"#FFFFFF80"}
              >
                {data?.pragraph}
              </Text>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default TeamMembersCard