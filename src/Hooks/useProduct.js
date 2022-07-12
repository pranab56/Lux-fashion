import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProduct=()=>{
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/productdetails/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts([data]));
      }, [id]);
      return [products,setProducts]
}
export default useProduct;