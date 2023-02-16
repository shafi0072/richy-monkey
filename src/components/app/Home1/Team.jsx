import { Box, Container, Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import TeamMembersCard from './TeamMembersCard';

const TeamMembersInfo = [
  {
    TeamMemberImg: "images/team/team-member-img1.png",
    name: "Zomb",
    lable: "CEO",
    pragraph: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from ",
  },
  {
    TeamMemberImg: "images/team/team-member-img2.png",
    name: "Robert",
    lable: "Co - Owner",
    pragraph: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from ",
  },
]

const Team = () => {
  return (
    <>
      <Box
        bgImage="url('images/team/team-bg.png')"
        bgPosition={"center"}
        backgroundSize={"cover"}
        bgRepeat={"no-repeat"}
        id="Team"
      >
        <Box bg={"rgba(25, 35, 40, 0.7)"} pt={"112px"} pb={"148px"}>
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
                Team Members
              </Text>
              <Heading
                color={"#FFFFFF"}
                fontSize={{xl: "48px", lg: "42px", md: "36px", sm: "30px", base: "28px"}}
                fontWeight={"400"}
                lineHeight={{xl: "67px", lg: "50px", sm: "42px", base: "36px"}}
                textTransform={"uppercase"}
                fontFamily={"primary"}
              >
                Meet The Crew
              </Heading>
            </Box>

            <Box maxW={"770px"} width={"100%"} mx={"auto"} mt={"53px"}>
              <Flex alignItems={"flex-start"} mx={"-15px"} flexDirection={{md: "row",  base: "column"}}>
                {TeamMembersInfo.map((TeamMembersCardInfo) => {
                  return (
                    <Box width={{md: "50%", base: "100%"}} maxW={{md: "100%", base: "370px"}} mx={"auto"} px={"15px"} mb={"30px"}>
                      <TeamMembersCard data={TeamMembersCardInfo} />
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Team