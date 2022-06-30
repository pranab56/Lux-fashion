import React from 'react';
import image from '../../image/serprice.png';

const Feature = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-zinc-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-xl rounded-lg h-96 w-3/4" />
    <div style={{width:"500px"}}>
      <h1 className="text-5xl font-bold">#New Arrivals</h1>
      <p className="py-6 w-96">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="mt-6 ml-20 lg:ml-0 md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 transition hover:-translate-y-1 bg-rose-500 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Explore Now
            </button>  
    </div>
  </div>
</div>
        </div>
    );
};

export default Feature;