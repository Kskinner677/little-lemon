import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, VStack } from "@chakra-ui/react";


const About = () => (

<FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    minHeight="100vh"
  >
    <VStack>
        <Heading as='h1' size="xl">About</Heading>
    </VStack>
</FullScreenSection>

);

export default About;