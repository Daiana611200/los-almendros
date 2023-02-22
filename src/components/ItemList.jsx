import Item from './Item'
import { Container } from '@chakra-ui/react'

const ItemList = ({ productos }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {productos?.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            weight={producto.weight}
            description={producto.description}
            stock={producto.stock}
            category={producto.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList