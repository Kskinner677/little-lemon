import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, VStack } from "@chakra-ui/react";


const Reservations = () => (

<FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
        <Heading as='h1' size="xl">Reservations</Heading>
    </VStack>
</FullScreenSection>

);

export default Reservations;