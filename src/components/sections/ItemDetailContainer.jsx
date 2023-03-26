import ItemDetail from '../ItemDetail'
import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "Productos");
    getDocs(productosCollection).then((snapshot) => {
      const productos = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(productos);
    });
  }, []);

  return <ItemDetail productos={data} />;
};
  
export default ItemDetailContainer;