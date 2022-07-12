import {useQuery } from 'react-query'
import Loading from './Loading';


const UseProduct = () => {
    const { isLoading,data:products ,refetch} = useQuery('product', () =>
    fetch('http://localhost:5000/shop').then(res =>
      res.json()
    )
  )
  
  return [products,isLoading,refetch]
};


export default UseProduct;