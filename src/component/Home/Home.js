import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Page/Loading';
import UseProduct from '../../Page/UseProduct';
import Blogs from '../Blogs/Blogs';
import Feature from '../Blogs/Feature';
import Product from '../Products/Product';
import Carousel from './carousel';
import Footer from './Footer';
import Heder from './Heder';
import Subscribe from './Subscribe';
import Testimonial from './Testimonial';

const Home = () => {
    const [products,isLoading]=UseProduct();
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Carousel></Carousel>
            <Blogs></Blogs>
            <Feature></Feature>
            <div>
            <h1 className='text-center text-5xl font-bold mt-32'>Our <span className='text-red-500'>Product</span></h1>
        <div className="bg-rose-500 h-1 w-32 mx-auto mt-4">

        </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                products.slice(1,10).map(product=><Product
                key={product.id}
                product={product}
                ></Product>)
            }
        </div>
      <div className='block ml-16 lg:ml-0 lg:flex justify-center '>
      <Link to={'/product'} className="mt-6 shrink-0 rounded-md w-full md:w-auto lg:mt-8 py-2 md:py-3 px-20  duration-700  items-center text-base border-2 bg-rose-500 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Explore Now
            </Link>  
      </div>
            </div>
            <Subscribe></Subscribe>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;