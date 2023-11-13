import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import HighlightCard from "./HighlightCard";


const highlightedItems = [
  {
    title: "Greek Salad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    getImageSrc: () => require("../assets/greek salad.jpg"),
    price: "7.00",
  },
  {
    title: "Lemon Dessert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    getImageSrc: () => require("../assets/lemon dessert.jpg"),
    price: "6.00",
  },
  {
    title: "Bruchetta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    getImageSrc: () => require("../assets/bruchetta.jpg"),
    price: "5.00",
  },
]

const Highlights = () => (

<FullScreenSection
    justifyContent="center"
    backgroundColor="brand.secondary.biege"
    color="brand.primary.green"
    p={8}
    spacing={8}
  >
    <Heading as="h1" size="3xl" paddingBottom={6}>
      Highlights
      </Heading>
      <Box
          display="grid"
          gridGap={8}
          gridTemplateColumns="repeat(3,minmax(0,1fr))"
        >
          {highlightedItems.map((item) => (
            <HighlightCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageSrc={item.getImageSrc()}
              price={item.price}
            />
          ))}
        </Box>
</FullScreenSection>

);

export default Highlights;