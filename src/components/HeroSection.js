import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Image, Heading, HStack, VStack, Box, Text, Button, ButtonGroup } from "@chakra-ui/react";
import backgroundImage1 from "../assets/Mario-and-Adrian-b.jpg"

const restuaruantName = "Little Lemon";
const restuaruantLocation = "Chicago";
const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const HeroSection = () => (

    <VStack
      maxWidth="auto"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      bg="brand.primary.green"
      color="brand.highlight.light"
      >
        <HStack
          spacing={8}
          padding={16}
        >
          <Box>
            <Heading as='h1' size="4xl">{restuaruantName}</Heading>
            <Heading as='h1' size="2xl">{restuaruantLocation}</Heading>
            <Text>{sampleText}</Text>
          </Box>
          <Box>
            <Image src={backgroundImage1}></Image>
          </Box>
        </HStack>
        <ButtonGroup alignItems="center" justifyContent="center" gap='4'>
          <Button colorScheme='whiteAlpha'>ORDER ONLINE</Button>
          <Text>or</Text>
          <Button colorScheme='blackAlpha'>RESERVE A TABLE</Button>
        </ButtonGroup>
    </VStack>

);

export default HeroSection;