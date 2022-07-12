import React from "react";
import { useEffect } from "react";




import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Page/Firebase.init";
import Loading from "../../Page/Loading";
import UpdateProfile from './UpdateProfile'


const MyProfile = () => {
  const [update, setUpdate] = useState([]);
  const [user, loading] = useAuthState(auth);

  const { isLoading, error, data:profile,refetch } = useQuery('MyOrder', () =>
  fetch(`http://localhost:5000/users/${user.email}`,{
    method:'GET',
          headers:{
              'authorization':`bearer ${localStorage.getItem('accessToken')}`
          }
  }).then(res =>
    res.json()
  )
)

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

 


  return (
   
   <div>
     <div className="container max-w-full">
     
     <div className="m-auto my-5 w-96 max-w-lg items-center justify-center 
     overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
     
       <div className="h-24 bg-white"></div>
       <div className="-mt-20 flex justify-center">
       {user?.photoURL ? (
         <img
           className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 "
           src={`${user?.photoURL} `}
           alt=""
         />
       ) : (
         <>
          {profile.image? <img className="h-32 rounded-full" src={profile.image} alt="" />: <img className="h-32 rounded-full" src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A="/> }
         </>
       )}
   </div>
       <div className="space-y-2 mt-10  divide-gray-700">
       <div className="mt-5 mb-1 px-3 ml-20  text-lg">
           Name: <span className="font-serif ml-1">{ profile.name? profile.name: user?.displayName}</span>
         </div>
         <div className="mb-5 ml-20 px-3 text-sky-500">
           Email: <span className="font-serif ml-1">{user?.email}</span>
        </div>
         <div className="mb-5 ml-20 px-3">
         {profile.gender?"Gender : ":""} <span className="font-serif ml-1">{profile? [profile.name]:""}</span>
        </div>
         <div className="mb-5 ml-20 px-3">
         {profile.number?"Number : ":""}<span className="font-serif ml-1">{profile? [profile.number]:""}</span>
        </div>
         <div className="mb-5 ml-20 px-3 font-serif">
         {profile.address?"address : ":""} <span className="font-serif ml-1">{profile? [profile.address]:""}</span>
        </div>
       </div>
       <div className="text-center mt-6 mb-6">
       <label htmlFor="UpdateProfile" onClick={()=>setUpdate(user)} className="btn btn-success text-white">
              Update Profile
             </label>
       </div>
 </div>

 </div>

{
    update&& <UpdateProfile
    ></UpdateProfile>
}

   </div>
      

  );
};

export default MyProfile;
