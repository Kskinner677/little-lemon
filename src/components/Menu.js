import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";


const Menu = () => (
<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#Abc4cc"
  >
    <VStack>
        <Heading as='h1' size="xl">Menu</Heading>
    </VStack>
</FullScreenSection>
);

export default Menu;