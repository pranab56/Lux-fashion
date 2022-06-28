import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
    const navigate=useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useState(() => {
    fetch(`http://localhost:5000/productdetails/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

 const handleCheakOut=(id,name,price)=>{
    const order={
        id,
        name,
        price
    }
    let stringyfiedID=JSON.stringify(order)
    localStorage.setItem('Cart',stringyfiedID);
    navigate('/order')
    
 }

  return (
    <div>
     
      
       
                <div className="md:flex items-center justify-center justify-evenly  mt-14 py-8 ">
                  <div className="w-72">
                    <img
                      src={product.img}
                      alt=''
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 ">
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-3xl font-black leading-none text-gray-800">
                        {product.name}
                      </p>
                      <select className="ml-3 py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <p className="text-xl  text-gray-600 py-4">
                     Price : ${product.price}
                    </p>
                   
                    <div className="flex items-center justify-between pt-5 pr-6">
                      <div className="flex itemms-center">
                        <button onClick={()=>handleCheakOut(id,product.name,product.price)} className="text-xs leading-3 btn btn-success cursor-pointer">
                          Add to favorites
                        </button>
                      
                       
                      </div>
                     
                    </div>
                  </div>
                </div>
                
                </div>
                
                
      
    
  );
};

export default ProductDetails;
