// create the context
// provide the context
//consume the context

import { createContext, useEffect, useState } from "react";

export const BioContext = createContext(null);

const BioProvider = ({ children }: any) => {

  const [products,setproducts] = useState<any>([]);  
 
 useEffect(()=>{
   
    const fetchData = async() => {
    const res =   await fetch('https://dummyjson.com/products');
    const data =  await res.json()
    setproducts(data.products)
    }

    fetchData();

 },[])

 console.log(products);
 


  return <BioContext.Provider value={products}>{children}</BioContext.Provider>;
};

export default BioProvider;
