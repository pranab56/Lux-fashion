import React from "react";
import { createContext } from "react";
import { useState } from "react";
import {useParams } from "react-router-dom";
import addToDb from "../../Page/FakeDb";
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
    
    addToDb(product._id)
    
  };

  return (
    
   
<div>
<div class="min-w-screen min-h-screen bg-rose-500 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src={product?.img} class="w-full relative z-10" alt=""/>
                    <div class="border-4 border-rose-400 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{product.name}</h1>
                    <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... <a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                        <span class="text-2xl leading-none align-baseline">.99</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button onClick={()=>handleProduct(product)} class="bg-rose-500 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>


    
        
  );
};

export default ProductDetails;
