import { createContext, useContext, useState } from "react";

const ProductStates = createContext()

const ProductContext = ({children}) => {
    const [favs, setFavs] = useState([])

    return(
        <ProductStates.Provider value={{ favs, setFavs }}>
            {children}
        </ProductStates.Provider>
    )
}

export default ProductContext

export const UseProductStates = () => useContext(ProductStates)
