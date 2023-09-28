import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, VStack } from "@chakra-ui/react";


const Testimonials = () => (
<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#Abc4cb"
  >
    <VStack>
        <Heading as='h1' size="xl">Testimonials</Heading>
    </VStack>
</FullScreenSection>
);

export default Testimonials;