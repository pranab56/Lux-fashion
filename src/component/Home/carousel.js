import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image2 from '../../image/carousel1.jpg'
import image1 from '../../image/carousel3.jpg'




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const carousel = () => {
    
    return (
        <div className='mb-24 mx-12 mt-7'>
             <Swiper
             
             spaceBetween={30}
             centeredSlides={true}
             autoplay={{
               delay: 5000,
               disableOnInteraction: false,
             }}
             pagination={{
               clickable: true,
             }}
            //  navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
      >
        <SwiperSlide>
          
    <div class="relative flex justify-center items-center md:justify-start ">
        <img class="hidden h-screen lg:block  w-full" src={image1} alt="randeer"/>
        <img class="md:block lg:hidden hidden  w-full " src={image1} alt="randeer"/>
        <img class="md:hidden w-full " src={image1} alt="randeer"/>
    <div class="flex absolute justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0">
        <div class=" py-32 sm:py-20  md:hidden"></div>
        <div class="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p class="text-xl sm:text-2xl xl:text-6xl text-center text-red-500 md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96" >Sale 20% Off </p>
            <p class="text-xl sm:text-2xl xl:text-4xl  mt-2 text-center md:text-left font-semibold leading-6 xl:leading-10 text-black md:w-96" >On Everything </p>
            <p class="mt-4 md:w-80 lg:w-2/12 xl:w-3/6 text-center md:text-left  text-base leading-normal text-black" >Looking to create a greater impact with your commercial Christmas display? Take a look at the services we have on offer...</p>
            <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-20 flex justify-center duration-700  items-center text-base border-2 border-red-500 transition bg-red-500 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Shop Now
            </button>   
        </div>        
    </div>
</div>

        </SwiperSlide>
        <SwiperSlide>

        
    <div class="relative flex justify-center items-center md:justify-start ">
        <img class="hidden h-screen lg:block  w-full" src={image2} alt="randeer"/>
        <img class="md:block lg:hidden hidden  w-full " src={image2} alt="randeer"/>
        <img class="md:hidden w-full " src={image2} alt="randeer"/>
    <div class="flex absolute justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0">
        <div class=" py-32 sm:py-20  md:hidden"></div>
        <div class="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
        <p class="text-xl sm:text-2xl xl:text-6xl text-center text-red-500 md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96" >Sale 20% Off </p>
            <p class="text-4xl mt-2 text-center md:text-left font-semibold leading-6 xl:leading-10 text-black md:w-96" >On Everything </p>
            <p class="mt-4 md:w-80 lg:w-2/12 xl:w-3/6 text-center md:text-left  text-base leading-normal text-black" >Looking to create a greater impact with your commercial Christmas display? Take a look at the services we have on offer...</p>
            <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-20 flex justify-center duration-700  items-center text-base border-2 border-rose-500 transition bg-rose-500 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Shop now
            </button>   
        </div>        
    </div>
</div>


        </SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default carousel;