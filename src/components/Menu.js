import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, HStack } from "@chakra-ui/react";


const Menu = () => (
<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#Abc4cc"
  >
    <HStack>
        <Heading as='h1' size="xl">Menu</Heading>
    </HStack>
</FullScreenSection>
);

export default Menu;