import { Box, Collapse, Button, Text, useDisclosure, Badge } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import React from "react";

const FaqBtn = ({data}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box>
        <Box>
          <Button
            width={"100%"}
            onClick={onToggle}
            bg={"transparent"}
            _hover={{ bg: "transparent", color: "#FFFFFF" }}
            _focus={{ bg: "transparent", color: "#FFFFFF" }}
            display={"flex"}
            justifyContent={"space-between"}
            p={"0px"}
            fontSize={{lg: "24px", md: "22px", sm: "20px", sm: "18px", base: "15px"}}
            fontWeight={"400"}
            lineHeight={"33.6px"}
            color={"#FFFFFF80"}
          >
            {data?.faqQuestion}
            <AddIcon/>
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <Badge 
              bg="#11181E"
              top={"23px"}
              right={{md: "26px", sm: "20px", base: "8px"}}
              height={"30px"}
              width={"30px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              position={"absolute"}
            >
              <MinusIcon 
                fontSize={{lg: "24px", md: "22px", sm: "20px", sm: "18px", base: "15px"}}
                color="#FFFFFF"
              />
            </Badge>
            <Box>
              <Text
                mt={"17px"}
                fontSize={{md: "16px", sm: "14px", base: "12px" }}
                fontWeight={"500"}
                lineHeight={{md: "28px", sm: "22px", base: "20px" }}
                color={"#FFFFFF80"}
                fontFamily={"inter"}
                maxW={"693px"}
                width={"100%"}
              >
                {data?.faqAnswer}
              </Text>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </>
  );
};

export default FaqBtn;
