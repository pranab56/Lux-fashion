import React from 'react';
import './Blogs.css';

const Blog = ({blog}) => {
    const {img,name,description}=blog;
    return (
      
<div id='blog' className="sm:flex text-center rounded-xl">
    <div  className="w-full sm:w-1/2 md:w-1/2 lg:w-96 px-4 py-4 mt-6 shadow-xl dark:bg-gray-800">
        <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-14 w-14 rounded-lg bg-zinc-300  text-white">
                <img src={img} alt="" />
            </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-white font-semibold dark:text-white py-4">
           {name}
        </h3>
        <p className="text-md  text-white dark:text-gray-300 py-4">
          {description}
        </p>
    </div>
   
</div>

    );
};
// bg-rose-500
export default Blog;