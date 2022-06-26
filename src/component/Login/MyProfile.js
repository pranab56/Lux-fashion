import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../Page/Firebase.init';
import Loading from '../../Page/Loading';
import UpdateProfile from './UpdateProfile';

const MyProfile = () => {
  const [open,setOpen]=useState(false);
    const [user,loading]=useAuthState(auth);
     if(loading){
        return <Loading></Loading>
     }
    return (
        
            <div className={`flex-col  py-20 w-96 mx-auto max-w-lg p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 ${open ? "" : "ml-[200px] h-[610px] pt-[-100px] whitespace-pre-line"}`}>


	{
          user?.photoURL ? <img className='w-32 h-32 mx-auto rounded-full dark:bg-gray-500 ' src={`${user?.photoURL}`} alt="" /> :<>
          <svg style={{width:"120px",height:"120",marginLeft:"85px"}} className=' rounded-full' fill="currentColor" class="text-gray-800" viewBox="0 0 1792 1792">
                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                </path>
            </svg>
          </>
        }
      

	<div className="space-y-2 mt-10  divide-gray-700">
	<h4 className='text-start text-lg font-serif'>Name: <span className='font-serif ml-1'>{user?.displayName}</span></h4>
	<h4 className='text-start text-lg font-serif'>Email: <span className='font-serif ml-1'>{user?.email}</span></h4>
        {
          !open ? "" : <button onClick={()=>setOpen(!open)} className='btn btn-success text-white border-none hover:btn-warning mx-24'>Update</button>
        }
        
	</div>
        <Outlet></Outlet>
       <div className={`${open ? "" : " mt-[-340px] pt-[20px] w-min whitespace-pre-line"}`}>
       {
          !open && <UpdateProfile 
          open={open}
          setOpen={setOpen}
          ></UpdateProfile>
        }
        
       </div>
</div>
        
    );
};

export default MyProfile;