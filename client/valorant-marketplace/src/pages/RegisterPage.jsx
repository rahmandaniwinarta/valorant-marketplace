import { useState } from "react";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const RegisterPage = () => {
  return (
    <Container maxW="container.xl" p={0} bg="gray">
      <Flex h="100vh" py={20}>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg="salmon"
        >
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Register your account</Heading>
            <Text>Please fill the form below</Text>
          </VStack>
          <SimpleGrid w="full" rowGap={5}>
            <GridItem>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="input username here"></Input>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="input email here"></Input>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input placeholder="input password here"></Input>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input placeholder="make sure the password match"></Input>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg="gray.50"
        ></VStack>
      </Flex>
    </Container>
  );
};
