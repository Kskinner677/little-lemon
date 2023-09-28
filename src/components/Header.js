import React, { useEffect, useRef } from "react";
import { Box, HStack } from "@chakra-ui/react";


const Header = () => (

    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
    >
        <Box color="white" maxWidth="1280px" margin="0 auto">
            <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
            >
            <nav>
                <HStack spacing={6}>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/menu">Menu</a>
                    <a href="reservations">Reservations</a>
                    <a href="/order-online">Order Online</a>
                    <a href="/login">Login</a>
                </HStack>
            </nav>
            </HStack>
        </Box>
    </Box>
);

export default Header;