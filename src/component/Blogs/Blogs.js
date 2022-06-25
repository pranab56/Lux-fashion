import React from 'react';

import {useQuery } from 'react-query'
import Loading from '../../Page/Loading';
import Blog from './Blog';

const Blogs = () => {
    const { isLoading, error, data:Blogs } = useQuery('blogs', () =>
    fetch('Blogs.json').then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading></Loading>
  }
    return (
      <div className='mt-10'>
        <h3 className='text-center text-6xl mb-5'>Why Shop With Us</h3>
        <div className='bg-rose-500 block justify-center w-32 mx-auto  h-1'>

        </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10 mx-10 mb-28' >
            {
            Blogs.map(b=><Blog
            key={b.id}
            blog={b}
            ></Blog>)
            }
        </div>
      </div>
    );
};

export default Blogs;