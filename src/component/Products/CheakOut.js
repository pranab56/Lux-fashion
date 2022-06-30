import React from 'react';

const CheakOut = (props) => {
    const {cart}=props;
    
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+parseInt(product.price);
        shipping=shipping+parseInt(product.shipping);
    }
    const num=total*0.1;
    const tax=num.toFixed(2)
    
    const subTotal=total+shipping+parseInt(tax);
    
     
    return (
        
            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                 <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                   <div>
                     <p className="text-4xl font-black leading-9 text-gray-800">
                       Summary
                     </p>
                 
                     <div className="flex items-center justify-between pt-16">
                        
                       <p className="text-base leading-none text-gray-800">
                         Total Order
                       </p>
                       <p className="text-base leading-none text-gray-800">
                         {cart.length}
                       </p>
                     </div>
                   
                    <div className='flex justify-between mt-5'>
                    <p className="text-base leading-none text-gray-800">
                         Subtotal
                       </p>
                       <p className="text-base leading-none text-gray-800">
                         ${total}
                       </p>
                    </div>

                     <div className="flex items-center justify-between pt-5">
                       <p className="text-base leading-none text-gray-800">
                         Shipping
                       </p>
                       <p className="text-base leading-none text-gray-800">${shipping}</p>
                     </div>
                     <div className="flex items-center justify-between pt-5">
                       <p className="text-base leading-none text-gray-800">Tax</p>
                       <p className="text-base leading-none text-gray-800">${tax}</p>
                     </div>
                   </div>
                   <div>
                     <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                       <p className="text-2xl leading-normal text-gray-800">
                         Total
                       </p>
                       <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                         ${subTotal}
                       </p>
                     </div>
                     <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                       Checkout
                     </button>
                   </div>
                 </div>
        </div>
        
    );
};

export default CheakOut;