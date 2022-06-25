import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Page/Firebase.init';
import Loading from '../../Page/Loading';

const Register = () => {
  const navigate=useNavigate()
    const { register, formState: { errors }, handleSubmit,} = useForm();
    const [createUserWithEmailAndPassword, user,loading,error, ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, VerifyError] = useSendEmailVerification(auth);
    const [updateProfile, updating, ProfileError] = useUpdateProfile(auth);
  
    const onSubmit = async (data) => {
       await createUserWithEmailAndPassword(data.email,data.password)
       await sendEmailVerification()
       await updateProfile({ displayName:data.name })
    };
    if(user ||  updating){
      navigate('/home')
      swal("Good job!", "You clicked the button!", "success");
    }
    if(loading){
      return <Loading></Loading>
    }
    return (
        <div>
            
  <div class="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-2xl dark:bg-gray-800 mt-10">
        <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">Lux Fashion</h1>

        <form class="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                <input type="text"
                {...register("name",{
                    required:{
                      value:true,
                      message:'Name is required'
                    },
                    pattern:{
                        message: 'Provide is valid Email'
                    }
                  })} 
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            {errors.text?.type === "required" && (
            <p className="text-red-500">{errors.text.message}</p>
          )}
          {errors.text?.type === "pattern" && (
            <p className="text-red-500">{errors.text.message}</p>
          )}
            <div>
                <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                <input type="email"
                {...register("email",{
                    required:{
                      value:true,
                      message:'Email is required'
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Provide is valid Email' 
                    }
                  })} 
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            {errors.email?.type === "required" && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                
                </div>

                <input type="password"
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
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            {errors.password?.type === "required" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

            <div class="mt-6">
                <button
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Register
                </button>
            </div>
        </form>

        

       

        <p class="mt-8 text-xs font-light text-center text-gray-400"> Already account? <Link to={'/login'}
                class="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
    </div>
        </div>
    );
};

export default Register;