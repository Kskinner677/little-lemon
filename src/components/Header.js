import React, { useEffect, useRef } from "react";
import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo .svg"
import Basket from "../assets/Basket.svg"

const Header = () => (
    <Heading fontSize={25}>
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="brand.highlight.light"
      color="brand.primary.green"
    >
        <Box
            maxWidth="1280px"
            margin="0 auto">
            <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
            >
            <nav>
                <HStack spacing={6}>
                    <Image src={Logo} alt="logo"/>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/menu">MENU</Link>
                    <a href="reservations">RESERVATIONS</a>
                    <a href="/order-online">ORDER ONLINE</a>
                </HStack>
            </nav>
            <nav>
                <HStack spacing={6}>
                    <a href="/login">LOG IN</a>
                    <img src={Basket} />
                </HStack>
            </nav>
            </HStack>
        </Box>
    </Box>
    </Heading>
);

export default Header;