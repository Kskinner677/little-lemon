import React, { useEffect, useRef, useState } from "react";
import { Box,
        HStack,
        Heading,
        Image,
        Button,
     } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo .svg"
import Basket from "../assets/Basket.svg"
import Login from "./Login";


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
                    <Link to="/"><Image src={Logo} alt="logo"/></Link>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/menu">MENU</Link>
                    <Link to="/reservations">RESERVATIONS</Link>
                </HStack>
            </nav>
            <nav>
                <HStack spacing={6}>
                    <Login />
                    <Link to="/checkout">
                            <Image src={Basket} alt="basket"/>
                    </Link>
                </HStack>
            </nav>
            </HStack>
        </Box>
    </Box>
    </Heading>
)

export default Header;