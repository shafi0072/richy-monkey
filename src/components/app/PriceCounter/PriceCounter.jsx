import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import PriceCounterContent from './PriceCounterContent';

const PriceCounterText = [
    {
      heading: "1000",
      text: "Total Items"
    },
    {
      heading: "4",
      text: "Rarities"
    },
    {
      heading: "0.22",
      text: "Floor Price (ETH)"
    },
    {
      heading: "25.5K",
      text: "Volume Traded (ETH)"
    },
  ]

const PriceCounter = () => {
  return (
    <>
      <Box>
        <Flex flexWrap={"wrap"} alignItems={"flex-start"} justifyContent={"space-between"}>
          {PriceCounterText.map((PriceCounter) => {
            return (
              <Box width={{md: "25%", base: "50%"}} pb={"30px"}>
                <PriceCounterContent data={PriceCounter} />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

export default PriceCounter