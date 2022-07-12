import React from 'react';

const CheckOut = () => {
    return (
        <div>
             <div class="w-full xl:w-4/12 px-4">
          <div class="p-6 md:p-12 bg-blue-300">
            <h2 class="mb-6 text-4xl font-bold font-heading text-white">Cart totals</h2>
            <div class="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
              <span class="text-blue-50">Subtotal</span>
              <span class="text-xl font-bold font-heading text-white">$89.67</span>
            </div>
            <h4 class="mb-2 text-xl font-bold font-heading text-white">Shipping</h4>
            <div class="flex mb-2 justify-between items-center">
              <span class="text-blue-50">Next day</span>
              <span class="text-xl font-bold font-heading text-white">$11.00</span>
            </div>
            <div class="flex mb-10 justify-between items-center">
              <span class="text-blue-50">Shipping to United States</span>
              <span class="text-xl font-bold font-heading text-white">-</span>
            </div>
            <div class="flex mb-10 justify-between items-center">
              <span class="text-xl font-bold font-heading text-white">Order total</span>
              <span class="text-xl font-bold font-heading text-white">$100.67</span>
            </div>
            <a class="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" href="#">Go to Checkout</a>
          </div>
        </div>
        </div>
    );
};

export default CheckOut;