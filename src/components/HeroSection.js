import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, HStack } from "@chakra-ui/react";


const HeroSection = () => (
<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#Abc4cb"
  >
    <HStack>
        <Heading as='h1' size="xl">Hero Section</Heading>
    </HStack>
</FullScreenSection>
);

export default HeroSection;