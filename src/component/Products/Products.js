import React from 'react';
import {useQuery } from 'react-query'
import Loading from '../../Page/Loading';
import UseProduct from '../../Page/UseProduct';
import Product from './Product';

const Products = () => {
 const [products,isLoading]=UseProduct();
 if(isLoading){
  return <Loading></Loading>
 }

    return (
      <div className='mt-20'>
        <h1 className='text-center text-5xl font-bold '>Our <span className='text-red-500'>Product</span></h1>
        <div className="bg-rose-500 h-1 w-32 mx-auto mt-4">

        </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                products.map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
      </div>
    );
};

export default Products;