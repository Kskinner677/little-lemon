import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";


const MenuItem = ({ title, description, price, imageSrc}) => (
    <HStack
        width="1280px"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
        bg="blackAlpha.200"
        p={8}
        color="brand.highlight.dark"
    >
        <HStack>
            <Image
            src={imageSrc}
            alt={title}
            boxSize="200px"
            objectFit="cover"
            />
            <VStack
            p={3}
            justifyContent="start"
            width="300px"
            >
            <Text fontSize="3xl">{title}</Text>
            <Text fontSize="lg" as="i"> {description}</Text>
            </VStack>
        </HStack>
        <Box
            justifyContent="right"
            alignItems="center"
            >
            <Text fontSize="lg" as="b">${price}</Text>
        </Box>
    </HStack>
);

export default MenuItem;