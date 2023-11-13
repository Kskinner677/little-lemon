import React from "react";
import { Box, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";


const HighlightCard = ({ title, description, price, imageSrc}) => (
    <HStack
        width="1280px"
        margin="0 auto"
        p={8}
        color="brand.secondary.green"
    >
        <VStack>
            <Image
            src={imageSrc}
            alt={title}
            boxSize="300px"
            objectFit="cover"
            width="300px"
            />
            <HStack
                justifyContent="space-between"
                alignItems="center"
                width="300px"
                >
                <Text fontSize="3xl">{title}</Text>
                <Text fontSize="lg" as="b">${price}</Text>
            </HStack>
            <Text
                bg="blackAlpha.200"
                width="300px"
                fontSize="lg" 
                as="i"
                p={2}
                >
                     {description}
                </Text>
            <Box
                width="300px"
                display='flex'
                justifyContent="flex-start"
                pt={12}
            >
                <Button variant='link' color="brand.highlight.dark">+ Order a delivery</Button>
            </Box>
            
        </VStack>
    </HStack>
);

export default HighlightCard;