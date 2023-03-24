import { useState, createContext } from "react";

export const ShoppingCartContext = createContext();

export const { Provider } = ShoppingCartContext;

const ShoppingCartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <Provider value={{cart, setCart}}>
            {children}
        </Provider>
    )
}

export default ShoppingCartContextProvider;