import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import NoteState from "../../Page/noteState";
import ProductDetail from "./ProductDetail";



const ProductDetails = () => {
  

  const { id } = useParams();
   const [products,setprodict]=useProduct(id)
   const [cart,setCart]=useState([])
   console.log(cart);
    
    
    const handleProduct=(product)=>{
      const newCart=[...cart,product];
      setCart(newCart);
    }
 
  return (
    <div>
      {
        products.map(product=><ProductDetail
        product={product}
        handleProduct={handleProduct}
        
        ></ProductDetail>)
      }
{
  cart.map(kit=>{
    <NoteState kit={kit}></NoteState>
  })
}
     
     
    </div>
  );
};

export default ProductDetails;
