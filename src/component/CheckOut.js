import React from 'react';
import NoteStates from '../Page/NoteStates';


const CheckOut = ({product}) => {
  console.log(product);
  
  let total=0;
  let shipping=0;
  let quantity=0;
  for(const cart of product){
    total=total+cart.price  * cart.quantity;
    shipping=shipping+cart.shipping *cart.quantity;
    quantity=quantity+cart.quantity;
  }
  
  const tax=(total*0.1).toFixed(2);
  const grandtotal=total+shipping+parseFloat(tax);

  


    
    return (
        <div>
             <div class="">
          <div class="p-6 md:p-12 rounded-lg bg-rose-500">
            <h2 class="mb-6 text-4xl font-bold font-heading text-white">Cart totals</h2>
            <div class="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
              <span class="text-blue-50">Selected Items</span>
              <span class="text-xl font-bold font-heading text-white">{product?.length}</span>
            </div>
            <div class="flex items-center justify-between pb-5  border-blue-100">
              <span class="text-blue-50">Total Price</span>
              <span class="text-xl font-bold font-heading text-white">${total}</span>
            </div>
            <div class="flex items-center justify-between pb-5  border-blue-100">
              <span class="text-blue-50">Shipping Charge</span>
              <span class="text-xl font-bold font-heading text-white">${shipping}</span>
            </div>
            <div class="flex mb-8 items-center justify-between pb-5 border-blue-100">
              <span class="text-blue-50">Tax</span>
              <span class="text-xl font-bold font-heading text-white">${tax}</span>
            </div>
           
            
            <div class="flex mb-10 justify-between items-center">
              <span class="text-xl font-bold font-heading text-white">Order total :</span>
              <span class="text-xl font-bold font-heading text-white">${grandtotal}</span>
            </div>
            <a class="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" href="#">Pay Now</a>
          </div>
        </div>
      

        </div>
    );
};

export default CheckOut;