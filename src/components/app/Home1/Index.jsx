import { Box } from '@chakra-ui/react';
import React from 'react'
import AboutUS from './AboutUS';
import Faq from './Faq';
import H1Banner from './H1Banner';
import Roadmap from './Roadmap';
import Team from './Team';

const Index1 = () => {
  return (
    <>
      <Box position={"relative"} zIndex="2">
      <H1Banner/>
      <AboutUS/>
      <Roadmap/>
      <Team/>
      <Faq/>
      </Box>
    </>
  );
}

export default Index1