import React from 'react';
import {useQuery } from 'react-query'
import Loading from './Loading';

const UseProduct = () => {
    const { isLoading, error, data:products } = useQuery('products', () =>
    fetch('Products.json').then(res =>
      res.json()
    )
  )
 
  return [products,isLoading]
};


export default UseProduct;