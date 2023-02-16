import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import FaqBtn from "./FaqBtn";

const faqQA = [
  {
    faqQuestion: "What is Gamblers ?",
    faqAnswer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
  },
  {
    faqQuestion: "How we can buy and invest NFT ?",
    faqAnswer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
  },
  {
    faqQuestion: "Why we should choose MiNFT ?",
    faqAnswer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
  },
  {
    faqQuestion: "Where we can buy and sell NFts ?",
    faqAnswer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
  },
  {
    faqQuestion: "How secure is this token ?",
    faqAnswer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
  },
  {
    faqQuestion: "What is your contract address ?",
    faqAnswer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
  },
  
];

const Faq = () => {
  return (
    <>
      <Box pt={"133px"} id="FAQ">
        <Container maxW={"1171px"} mx={"auto"}>
          <Box textAlign={"center"}>
            <Text
              color={"#E51041"}
              fontSize={{lg: "18px", md: "16px", sm: "14px", base: "12px"}}
              fontWeight={"400"}
              lineHeight={{lg: "25.2px", md: "22px", base: "18px" }}
              textTransform={"uppercase"}
              mb="15px"
            >
              Questions & Answers
            </Text>
            <Heading
              color={"#FFFFFF"}
              fontSize={{xl: "48px", lg: "42px", md: "36px", sm: "30px", base: "28px"}}
              fontWeight={"400"}
              lineHeight={{xl: "67px", lg: "50px", sm: "42px", base: "36px"}}
              textTransform={"uppercase"}
              fontFamily={"primary"}
            >
              Frequently Asked <br />
              Questions
            </Heading>
          </Box>

          <Box maxW={"770px"} width={"100%"} mx={"auto"} mt={"57px"}>
            {faqQA.map((faqQuestionsAswers) => {
              return (
                <Box
                  mb={"10px"}
                  bg={"rgba(255, 255, 255, 0.05)"}
                  backdropFilter={"blur(5px)"}
                  borderRadius={"10px"}
                  py={"20px"}
                  px={{sm: "29px", base: "16px"}}
                  position={"relative"}
                >
                  <FaqBtn data={faqQuestionsAswers} />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Faq;
