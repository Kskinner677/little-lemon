import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Image, Heading, HStack, VStack, Box, Text } from "@chakra-ui/react";


const HeroSection = () => (
<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#Abc4cb"
  >
    <VStack>
        <Heading as='h1' size="xl">Hero Section</Heading>
        <Text>This is a test</Text>
    </VStack>
</FullScreenSection>
);

export default HeroSection;