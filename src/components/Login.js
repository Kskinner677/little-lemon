import React, { useRef } from "react"
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'

function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <>
        <Button onClick={onOpen} size="xl" color="brand.primary.green">LOG IN</Button>

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            bg="brand.highlight.light"
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Log into account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Email' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='green' mr={3}>
                Log In
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default Login;