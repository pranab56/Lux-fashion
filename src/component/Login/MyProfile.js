import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Page/Firebase.init';

const MyProfile = () => {
    const [user,loading]=useAuthState(auth);
    return (
        
            <div className="flex-col py-20 w-96 mx-auto max-w-lg p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">


	{
          user?.photoURL ? <img className='w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square' src={`${user?.photoURL}`} alt="" /> :<>
          <svg className='w-32 h-32 mx-auto rounded-full' fill="currentColor" class="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                </path>
            </svg>
          </>
        }

	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{user?.email}</p>
		</div>
        <button className='btn btn-primary'>Update Your Profile</button>
	</div>
</div>
        
    );
};

export default MyProfile;