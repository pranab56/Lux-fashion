import React from 'react';
import Product from '../Products/Product';

const Order = () => {
    const stringifiedOrder = localStorage.getItem('Cart');
    const product = JSON.parse(stringifiedOrder);
    

    return (
        <div class="flex justify-center my-6">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div class="flex-1">
            <table class="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr class="h-12 uppercase">
                  <th class="hidden md:table-cell"></th>
                  <th class="text-left">Product</th>
                  <th class="lg:text-right text-left pl-5 lg:pl-0">
                    <span class="lg:hidden" title="Quantity">Qtd</span>
                    <span class="hidden lg:inline">Quantity</span>
                  </th>
                  <th class="hidden text-right md:table-cell">Unit price</th>
                  <th class="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg" class="w-20 rounded" alt="Thumbnail"/>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <p class="mb-2 md:ml-4">{product?.name}</p>
                      <form action="">
                        <button type="submit" class="text-gray-700 md:ml-4">
                          <button className='btn-xs rounded-2xl mt-1 btn-error'>Remove Item</button>
                        </button>
                      </form>
                    </a>
                  </td>
                  <td class="justify-center md:justify-end md:flex mt-6">
                    <div class="w-20 h-10">
                     2
                    </div>
                  </td>
                  <td class="hidden text-right md:table-cell">
                    <span class="text-sm lg:text-base font-medium">
                     $ {product.price}
                    </span>
                  </td>
                  <td class="text-right">
                    <span class="text-sm lg:text-base font-medium">
                      20.00€
                    </span>
                  </td>
                </tr> 
</tbody>
        
        </table>
        </div>
        </div></div>
      
    );
};

export default Order;