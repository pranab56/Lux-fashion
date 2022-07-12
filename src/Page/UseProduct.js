import {useQuery } from 'react-query'


const UseProduct = () => {
    const { isLoading,data:products,refetch } = useQuery('products', () =>
    fetch('http://localhost:5000/shop').then(res =>
      res.json()
    )
  )
 
  return [products,isLoading,refetch]
};


export default UseProduct;