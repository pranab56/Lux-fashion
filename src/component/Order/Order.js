import React from 'react';



const Order = ({product,setDelete}) => {



  const subtotal=product.price*product.quantity;
  
  return (

    
   <div className='pronab'>
     
     <div class="mb-12 pr-20 py-6 border-t border-b border-gray-200">
            <div class="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
              <div class="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div class="flex -mx-4 flex-wrap items-center">
                  <div class="w-full md:w-1/3 px-4 mb-3">
                    <div class="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img class="h-full object-contain" src={product.img} alt=""/>
                    </div>
                  </div>
                  <div class="w-2/3 px-4">
                    <h3 class="mb-2 text-xl font-bold font-heading">{product?.name}</h3>
                    <p class="text-gray-500">{product.rating} star</p>
                  </div>
                </div>
              </div>
              <div class="hidden lg:block lg:w-2/12">
                <p class="text-lg text-blue-500 font-bold font-heading">${product.price}</p>
                
              </div>
              <div class="w-auto md:w-1/6 lg:w-2/12">
                <div class="inline-flex font-bold items-center px-4 font-semibold font-heading border focus:ring-blue-300 focus:border-blue-300 rounded-md">
                  {product.quantity}
                </div>
              </div>
              <div class="w-auto md:w-1/6 lg:w-2/12 flex justify-between ">
                <p class="text-lg text-blue-500 font-bold font-heading">${subtotal}</p>
                <label onClick={()=>setDelete(product)} htmlFor='delete-modal' className='btn btn-sm btn-error'>X</label>
              </div>
              
            </div>
            
            

         
            
       </div>

   


  
   </div>
  );
};

export default Order;