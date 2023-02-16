import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header/Header";
import Preloder from "./Preloder";

const LayoutWrapper = ({ children }) => {
  return (
    <Box
      bg={"#040C12"} 
      fontFamily={"primary"}
    >
      <Preloder/>
      <Header/>
      {children}
    </Box>
  );
};

export default LayoutWrapper;