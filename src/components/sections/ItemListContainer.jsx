import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from "../../components/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); 
  const { category } = useParams();

useEffect(() => {
  const db = getFirestore();
  const productosCollection = collection(db, "Productos");
  getDocs(productosCollection).then((querySnapshot) => {
    const productos = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(productos);
  });
}, []);

const catFilter = productos.filter((producto) => producto.category === category);
  
return (
    <div>
      {category ? <ItemList productos={catFilter} /> : <ItemList productos={ productos } />}
    </div>
  );
};

export default ItemListContainer