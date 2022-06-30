import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Page/Firebase.init";
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import Loading from "../../Page/Loading";
import { useForm } from "react-hook-form";
import useToken from "../../Page/useToken";

const Login = () => {
  const navigate=useNavigate()
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);
  const { register, formState: { errors }, handleSubmit,} = useForm();
  const [token]=useToken(GoogleUser ||user)
  const location=useLocation()
  const from = location.state?.from?.pathname || "/";
  
  const onSubmit = async (data) => {
  await signInWithEmailAndPassword(data.email,data.password)
    await sendPasswordResetEmail(data.email)
   await data.target.reset();
};

  
  
    if(token){
      navigate(from, { replace: true });
      
      
      
    }
  if (GoogleLoading || loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-2xl dark:bg-gray-800 mt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Login
        </h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        
<div className="relative mt-10 z-0 mb-6 group">
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
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
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
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
  </div>
  {errors.password?.type === "required" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}




         
          <div className="mt-10">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            onClick={() => signInWithGoogle()}
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
