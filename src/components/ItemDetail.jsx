import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    Alert,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";
  import { useEffect, useState } from "react";
  import ItemCount from "./ItemCount";
  import { doc, getDoc, getFirestore } from "firebase/firestore";

  const ItemDetail = ({ productos }) => {
    const { id } = useParams();
  
    const [producto, setProducto] = useState([]);

    useEffect(() => {
      const db = getFirestore();
  
      const productoRef = doc(db, "Productos", `${id}`);
  
      getDoc(productoRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto(snapshot.data());
        } else {
          console.log("No existe el documento!");
        }
      });
    }, []);
  
    const productoFilter = productos.filter((producto) => producto.id == id);
  
    return (
      <>
        {productoFilter.map((producto) => (
          <div key={producto.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={frutos} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{producto.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Categoría: {producto.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {producto.stock}
                    </Text>
                    <Text color="black.600" fontSize="xl">
                      Peso: Kg {producto.weight}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: $ {producto.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={producto.stock}
                    id={producto.id}
                    price={producto.price}
                    name={producto.name}
                    weight={producto.weight}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  