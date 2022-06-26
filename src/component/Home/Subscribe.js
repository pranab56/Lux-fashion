import React from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const Subscribe = () => {
  const handleEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_rhy2vsd','template_p659l7j',e.target,'59-_-ju4DmbIQjmL2')
    toast.success('Thankyou sir')
    
  e.target.reset();
  }
    return (
        <div>
            <div class="hero min-h-screen bg-base-300 mt-32">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold">Subscribe To Get Discount Offers</h1>
      
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
    <form onSubmit={handleEmail}>
    <input className='outline-none w-72 lg:w-96 p-3 rounded-3xl border-none' type="email" name='email' placeholder='Enter your email' /><br />
     <button class=" md:w-auto mt-7 lg:mt-8 py-2 md:py-3 px-10 lg:px-20 rounded-3xl  duration-700  items-center text-base border-2 border-red-500 transition hover:-translate-y-1 bg-red-500 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Explore Now
            </button> 
      </form> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Subscribe;