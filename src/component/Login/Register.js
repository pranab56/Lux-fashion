import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Page/Firebase.init';
import Loading from '../../Page/Loading';
import useToken from '../../Page/useToken';
import { useState } from 'react';

const Register = () => {
  const [terms,setTerms]=useState(false);
  const navigate=useNavigate()
    const { register, formState: { errors }, handleSubmit,} = useForm();
    const [createUserWithEmailAndPassword, user,loading,error, ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, VerifyError] = useSendEmailVerification(auth);
    const [updateProfile, updating, ProfileError] = useUpdateProfile(auth);

    const [token]=useToken(user ||  updating)
  
    const onSubmit = async (data) => {
      if(terms){
        await createUserWithEmailAndPassword(data.email,data.password)
        await sendEmailVerification()
        await updateProfile({ displayName:data.name })
      }
       
      
       
       await data.target?.reset();
       
    };
    if(token){
      
      navigate('/home')
      
    }
    if(loading){
      return <Loading></Loading>
    }
    return (
        <div>
            
  <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-2xl dark:bg-gray-800 mt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Register</h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mt-10 z-0 mb-6 group">
      <input type="text" name="email" id="floating_repeat_password"
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
      className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  {errors.name?.type === "required" && (
            <p className="text-red-500"><span>{errors.name.message}</span></p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="text-red-500"><span>{errors.name.message}</span></p>
          )}


        <div className="relative mt-7 z-0 mb-6 group">
      <input type="email" name="email" id="floating_repeat_password"
       {...register("email", {
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value:
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Provide is valid Email",
        },
      })}
      className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  {errors.email?.type === "required" && (
            <p className="text-red-500"><span>{errors.email.message}</span></p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500"><span>{errors.email.message}</span></p>
          )}
        


<div className="relative mt-7 z-0 mb-6 group">
      <input type="password" name="email" id="floating_repeat_password"
        {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 6,
                  message: "Provide At last 6 character ",
                },
              })}
      className="block py-2.5 px-0 w-80 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  {errors.password?.type === "required" && (
            <p className="text-red-500"><i>{errors.password.message}</i></p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500"><i>{errors.password.message}</i></p>
          )}
 <input onClick={()=>setTerms(!terms)} type="checkbox" name="terms" id="terms"
  {...register("terms", {
    required: {
      value: true,
      message: "Terms and condition is required",
    },
    pattern: {
      value:{

      }
       
    },
  })}
 />
  <label className={terms ? 'text-primary font-bold ml-2':'text-red-500 font-bold ml-2'} htmlFor="terms">Terms and condition</label>

            <div className="mt-10">
                <button
                disabled={!terms}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Register
                </button>
            </div>
        </form>

        

       

        <p className="mt-8 text-xs font-light text-center text-gray-400"> Already account? <Link to={'/login'}
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
    </div>
        </div>
    );
};

export default Register;