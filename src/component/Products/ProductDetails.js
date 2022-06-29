import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useNavigate, useParams } from "react-router-dom";
import Order from "../Order/Order";
import CheakOut from "./CheakOut";

export const MyContext = createContext({});

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useState(() => {
    fetch(`http://localhost:5000/productdetails/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    
  };

  return (
    
   
<div className="flex justify-evenly">
    
    <div className="md:flex items-center mt-14 py-8 ">
         <div className="w-72">
           <img
             src={product.img}
             alt=""
             className="w-full h-full object-center object-cover"
           />
         </div>
         <div className="md:pl-3 ">
           <div className="flex items-center justify-between w-full pt-1">
             <p className="text-3xl font-black leading-none text-gray-800">
               {product.name}
             </p>
             <div class="flex justify-center w-1/5">
               <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                 <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
               </svg>
   
               <input class="mx-2 border text-center w-8" type="text" />
   
               <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                 <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
               </svg>
             </div>
           </div>
           <p className="text-xl  text-gray-600 py-4">Price : ${product.price}</p>
   
           <div
             onClick={() => handleProduct(product)}
             className="flex items-center justify-between pt-5 pr-6"
           >
             <div className="flex itemms-center ">
               <button className="text-xs leading-3 btn btn-success cursor-pointer">
                 Add to favorites
               </button>
             </div>
           </div>
         </div>
       </div>
         <CheakOut
         cart={cart}
         ></CheakOut>
               </div>
             


    
        
  );
};

export default ProductDetails;
