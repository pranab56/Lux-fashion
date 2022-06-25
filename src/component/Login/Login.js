import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import auth from "../../Page/Firebase.init";
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import Loading from "../../Page/Loading";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate=useNavigate()
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);
  const { register, formState: { errors }, handleSubmit,} = useForm();
  
  const onSubmit = async (data) => {
  await signInWithEmailAndPassword(data.email,data.password)
    await sendPasswordResetEmail(data.email)
};

  
  
    if(GoogleUser ||user){
      navigate('/home')
      console.log(GoogleUser);
      swal("Good job!", "You clicked the button!", "success");
    }
  if (GoogleLoading || loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div class="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-2xl dark:bg-gray-800 mt-10">
        <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Lux Fashion
        </h1>

        <form class="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              for="username"
              class="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
              <button
                onClick={onSubmit}
                className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >
                <small>Forget Password?</small>
              </button>
            </div>

            <input
              type="password"
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {errors.password?.type === "required" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div class="mt-6">
            <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <div class="flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p class="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </p>

          <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div class="flex items-center mt-6 -mx-2">
          <button
            type="button"
            onClick={() => signInWithGoogle()}
            class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span class="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p class="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <Link
            to={"/register"}
            class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
