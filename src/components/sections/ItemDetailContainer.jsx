import ItemDetail from '../ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../data.json'

const ItemDetailContainer = () => {
   const { id } = useParams();
   
   const [productos, setProductos] = useState([]);
     
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

   const productoFilter = Data.filter((producto) => producto.id == id);

  return <ItemDetail productos={Data} />;
};

export default ItemDetailContainer