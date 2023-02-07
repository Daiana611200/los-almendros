import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
        <span>🛒 </span>
        <span>4 </span>
        <span><Button colorScheme='blue'>Comprar</Button></span>
    </div>
  )
}

export default CartWidget