import React from "react";
import { useNavigate } from "react-router-dom";





const Product = ({ product }) => {
  const { img, name, price } = product;
  const navigate=useNavigate()

  const handlebuy=(product)=>{
    navigate(`/productdetails/${product._id}`)
  }
  return (

     
    <div class="2xl:container 2xl:mx-auto">
      
      
  
    <div class="py-6 lg:px-20 md:px-6 px-4">
    

       

        <div>
        
        <div class="relative mt-10">
        
                <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p class="text-xs leading-3 text-gray-800">New</p></div>
                <div class="relative group">
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-500 via-gray-500 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img class="w-full rounded-lg " src={img} alt="A girl Posing Image" />
                    <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                       
                        <button onClick={()=>handlebuy(product)} class="bg-transparent font-medium text-base leading-4 border-2 border-red-500 border-rose-500 rounded-3xl py-3 w-full mt-2 text-white hover:bg-rose-500">Buy Now</button>
                    </div>
                </div>
                <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">{name}</p>
                <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">${price}</p>
                
            </div>
            
           </div>
           
    </div>
    
</div>




    
		

    
  );
};

export default Product;
