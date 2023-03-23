import {useState, createContext} from "react";

export const ShoppingCartContext = createContext(null);

 const ShoppingCartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <ShoppingCartContextProvider value={{cart, setCart}}>
            {children}
        </ShoppingCartContextProvider>
    )
}

export default ShoppingCartContextProvider;