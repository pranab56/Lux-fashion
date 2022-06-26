import React from 'react';

const UpdateProfile = ({open,setOpen}) => {
  
    const handleContact=e=>{
        e.preventDefault();
        
    }
    return (
        <div className='shadow-2xl shadow-gray-400 mx-96 rounded-lg p-10 mt-3'>
          <form onSubmit={handleContact}>
			<h2 className='text-3xl text-center mb-7 text-rose-500'>Update Profile</h2>
<div className='w-96 mx-auto '> 
	
<div class="relative  z-0 mb-6 group">
      <input type="text" name="name" id="floating_repeat_password" class="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
  </div>

      

<div class="relative  z-0 mb-6 group">
      <input type="date" name="date" id="floating_repeat_password" class="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
  </div>


<div class="relative  z-0 mb-6 group">
      <input type="number" name="number" id="floating_repeat_password" class="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact number</label>
  </div>
<div class="relative  z-0 mb-6 group">
      <input type="text" name="gender" id="floating_repeat_password" class="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
  </div>




<div class="relative mt-2 z-0 mb-6 group">
      <textarea rows={3} type="text" name="message" id="floating_repeat_password" class="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">address</label>
  </div>
  
  <div class="relative  z-0 mb-6 group">
      <input type="file" name="file" id="floating_repeat_password" class="block py-2.5 px-0 w-96 mx-auto text-sm text-gray-900 bg-transparent  appearance-none dark:text-white" placeholder=" " required />
    
  </div>
  
  <button onClick={()=>setOpen(!open)} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
</div>
</form>
        </div>
    );
};

export default UpdateProfile;