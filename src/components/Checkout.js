import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";


const Checkout = () => (
<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#Abc4cc"
  >
    <VStack>
        <Heading as='h1' size="xl">Checkout</Heading>
    </VStack>
</FullScreenSection>
);

export default Checkout;