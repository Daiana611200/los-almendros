import React from 'react'
import { useState, useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import SendOrder from "./SendOrder";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";

const Cart = () => {
  const [cart, setCart] = useContext(ShoppingCartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Quantity: {item.quantity}</Text>
                <Text>Precio: $ {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("Eliminando")}
                >
                  Borrar del carrito
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      <SendOrder />
    </>
  );
};

export default Cart;