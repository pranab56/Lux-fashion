import React from 'react';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Page/Firebase.init';
import { useEffect } from 'react';


const UpdateProfile = () => {
  const [user]=useAuthState(auth);
  const { register, formState: { errors }, handleSubmit,} = useForm();
  const onSubmit = (data) => {
    const imageKey='89faf5ad1fc22b4865feac0683dcdff1';
    const image=data.image[0];
    const formData=new FormData();
    formData.append('image',image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`,{
      method:"POST",
      body:formData,
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.success){
        
        const image=result.data.url;
        const profileDetails={
          name:data.name,
          date:data.date,
          number:data.number,
          gender:data.Gender,
          address:data.address,
          image:image
        }
        fetch(`http://localhost:5000/users/${user.email}`,{
          method:'PUT',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileDetails),
        })
        .then(res=>res.json())
        .then(data=>{
          
          swal("Profile updated", "", "success");
        })
      }
      
    })

     


  }
    return (
     
        <div className='shadow-2xl shadow-gray-400 mx-96 rounded-lg p-10 mt-3'>
           <input type="checkbox" id="UpdateProfile" className="modal-toggle " />
           <label htmlFor="UpdateProfile" className="modal">
           <label className="modal-box relative max-w-4xl mt-10" htmlFor="">
           <label
              htmlFor="UpdateProfile"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          <form onSubmit={handleSubmit(onSubmit)}>
			<h2 className='text-3xl text-center mb-7 text-rose-500'>Update Profile</h2>
<div className='w-96 mx-auto '> 
	
<div className="relative  z-0 mb-6 group">
      <input
       {...register("name", {
        required: {
          value: true,
          message: "Name is required",
        },
        pattern: {
          value:{

          }
           
        },
      })}
      type="text" name="name" id="floating_repeat_password" className="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
  </div>

      

<div className="relative  z-0 mb-6 group">
      <input
       {...register("date", {
        required: {
          value: true,
          message: "Data is required",
        },
        pattern: {
          value:{

          }  
        },
      })}
      type="date" name="date" id="floating_repeat_password" className="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
  </div>


<div className="relative  z-0 mb-6 group">
      <input
       {...register("number", {
        required: {
          value: true,
          message: "Number is required",
        },
        pattern: {
          value:{

          }
           
        },
      })}
      type="number" name="number" id="floating_repeat_password" className="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact number</label>
  </div>


<div className="relative  z-0 mb-6 group">
      <input
       {...register("Gender", {
        required: {
          value: true,
          message: "Gender is required",
        },
        pattern: {
          value:{

          }
           
        },
      })}
      type="text" name="Gender" id="floating_repeat_password" className="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
  </div>




<div className="relative mt-2 z-0 mb-6 group">
      <textarea
       {...register("address", {
        required: {
          value: true,
          message: "address is required",
        },
        pattern: {
          value:{

          }
           
        },
      })}
      rows={3} type="text" name="address" id="floating_repeat_password" className="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">address</label>
  </div>
  
  <div className="relative  z-0 mb-6 group">
      <input
          {...register("image", {
            required: {
              value: true,
              message: "address is required",
            },
            pattern: {
              value:{
    
              }
               
            },
          })}
      type="file" name="image" id="image" className="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent  appearance-none dark:text-white" placeholder=" " required />
    
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
</div>
</form>
</label>
</label>
        </div>
        
    );
};

export default UpdateProfile;