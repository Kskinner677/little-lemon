import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, HStack, VStack, Box } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const foodItems = [
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
  {
    title: "Spaghetti",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    getImageSrc: () => require("../assets/spaghetti.jpg"),
    price: "5.00",
  },
]

const Menu = () => (
<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="brand.secondary.biege"
  >
        <Heading as='h1' size="2xl" pt={24} color="brand.highlight.dark">Menu</Heading>
        <Box
          display="grid"
          gridGap={8}
        >
          {foodItems.map((item) => (
            <MenuItem
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

export default Menu;