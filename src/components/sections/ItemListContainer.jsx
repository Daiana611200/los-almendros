import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from "../../components/ItemList"
import Data from '../../data.json'
import { useParams } from "react-router-dom"
import { Heading, Center } from '@chakra-ui/react'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); 
  const { category } = useParams();

useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(Data);
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
}, []);

const catFilter = Data.filter((producto) => producto.category === category);
  return (
    <div>
      <Center bg="green.200" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Productos
        </Heading>
      </Center>
      {category ? <ItemList productos={catFilter} /> : <ItemList productos={Data} />}
    </div>
  );
};


export default ItemListContainer