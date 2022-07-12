import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import toast from 'react-hot-toast';




const ProductDetails = () => {

  const [incresing,setIncresing]=useState(0);
  

  const handleIncresing=()=>{
    setIncresing(incresing+1);

  }
  const handleDescresing=()=>{
    if(incresing>0){
      setIncresing(incresing-1)
    }
    
  }


  const { id } = useParams();
  const [products, setProducts] = useState([]);
  
  const [cart,setCart]=useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/productdetails/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts([data]));
    }, [id]);

   const quantity={
    quantity:incresing
   }
   
    
    
    const handleProduct=(product)=>{
      
    
      const newCart=[...cart,product];
      setCart(newCart);

     

      const orderProduct={
        img:product.img,
        name:product.name,
        price:product.price,
        quantity:incresing,
        rating:product.rating,
        shipping:product.shipping
      }


      fetch('http://localhost:5000/order',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(orderProduct)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data){
      toast.success('product Add to Cart')
    }
  })

 


    }
 
  return (
    <div>
      {
        products?.map(product=><ProductDetail
        product={product}
        handleProduct={handleProduct}
        handleIncresing={handleIncresing}
        handleDescresing={handleDescresing}
        incresing={incresing}
        ></ProductDetail>)
      }

     
     
    </div>
  );
};

export default ProductDetails;
