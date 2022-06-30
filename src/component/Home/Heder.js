import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../../Page/CustomLink';
import logo from '../../logo.png';
import auth from '../../Page/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from '../../Page/Loading';
import { useState } from 'react';

const Heder = () => {
  const [open,setOpen]=useState(true);
  const navigate=useNavigate()
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
     
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-3xl"><img className='w-8 h-8 mr-2' src={logo} alt="" /> Lux Fashion</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <CustomLink className="mr-5 font-serif " to={'/home'}>Home</CustomLink>
    <CustomLink className="mr-5 font-serif " to={'/product'}>Products</CustomLink>
    <CustomLink className="mr-5 font-serif " to={'/blog'}>Blogs</CustomLink>
    <CustomLink className="mr-5 font-serif " to={'/contact'}>Contact</CustomLink>
  
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/order'}><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-5 hover:text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg></Link>

    {
      user ? 
      
    <>
    
    <div className="relative inline-block">
        
        <button onClick={()=>setOpen(!open)} className="relative hover:text-rose-500 z-10 block p-2 mr-6 text-gray-700 bg-white  rounded-md dark:text-white  focus:ring-opacity-40 dark:bg-gray-800 ">
        
        {
          user.photoURL ? <img className='w-9 h-9 rounded-full' src={`${user.photoURL}`} alt="" /> 
          :
          <>
          <svg width="30" fill="currentColor" height="30" className="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                </path>
            </svg>
          </>
        }
        </button>

        
        <div className={`absolute right-0 z-20 w-48 py-2 mt-6 bg-white rounded-md shadow-xl dark:bg-gray-800 ${open ? "top-[-330px]" :"top-6"}`}>
        {
          user ? <Link onClick={()=>setOpen(!open)} to={'/myProfile'} className="block px-14 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> your profile </Link> : navigate('/login')
        }

        <button onClick={logout} className="block px-16 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Sign Out </button>
        <button onClick={()=>setOpen(!open)} className="block px-16 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> DashBoard </button>
        </div>
    </div>

    </>
     : <Link to={'/login'}><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-5 hover:text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg></Link>
    }
    
  </div>
</div>
  );
};

export default Heder;