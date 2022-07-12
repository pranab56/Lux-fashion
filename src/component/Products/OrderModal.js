import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CheckOut from '../CheckOut';
import Order from '../Order/Order';
import Scrollbars from 'react-custom-scrollbars-2';
import ListName from '../Order/ListName';
import {useQuery } from 'react-query'
import Loading from '../../Page/Loading';
import DeleteModal from '../Order/DeleteModal';






const OrderModal = () => {
  const [deleteOrder,setDelete]=useState(null);
  const { isLoading,data:product ,refetch} = useQuery('orderProduct', () =>
    fetch('http://localhost:5000/order').then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading></Loading>
  }
    
    return (
       <div>
        <h3 className='text-5xl text-center mt-2 font-serif'>Your Cart</h3>
        <div className='bg-rose-500 block justify-center w-32 mx-auto mb-10  h-1'>

</div>
        <div className='flex justify-around'>
        
        <Scrollbars style={{width:"800px",height:"550px"}} >
         <ListName></ListName>
            <div>
            {
               product.map(pro=><Order
               product={pro}
               refetch={refetch}
               setDelete={setDelete}
               ></Order>)
             }
            </div>
            </Scrollbars>
         <Outlet/>
         <div>
         <CheckOut></CheckOut>
         </div>
         {
          deleteOrder && <DeleteModal
          deleteOrder={deleteOrder}
          setDelete={setDelete}
          refetch={refetch}
          ></DeleteModal>
         }
            </div>
       </div>
    );
};

export default OrderModal;