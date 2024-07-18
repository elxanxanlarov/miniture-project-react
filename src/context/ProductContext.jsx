import { createContext, useEffect, useState } from "react";
import { productData } from "../data/data";

export const ProductContext=createContext();

export const ProductProvider=({children})=>{
    const [product,setProduct]=useState([])
    useEffect(() => {
        setProduct(productData);
      }, []);
    return <ProductContext.Provider value={[product,setProduct]}>{children}</ProductContext.Provider>
} 