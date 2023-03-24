import { useContext } from 'react'
import { ShoppingCartContext } from "../context/ShoppingCartContextProvider";
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className="cart">
        <Button size="lg" variant="outline" colorScheme="orange">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{quantity}</span>
        </Button>
      </div>
    </>
  );
};

export default CartWidget