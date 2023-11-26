import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
//       <div className="carousel w-full ">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?w=740&t=st=1700416888~exp=1700417488~hmac=644c6021d15c0cd8032b1c61809943d92c1652833a84bc0593b0512b0d1ed078" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="https://img.freepik.com/free-photo/lovable-ginger-girl-elegant-pink-jacket-laughing-winsome-young-woman-trendy-accessories-standing-rosy_197531-11053.jpg?w=740&t=st=1700417200~exp=1700417800~hmac=d84c803a8d7c5d4048cd3d0bc22cefab3239e803b5b97db844404c2df23009b9" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src="https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-21550.jpg?w=740&t=st=1700417241~exp=1700417841~hmac=6cc1a3283d8eca21c1d58c993e9022e22f72b7130f3cea12ca909a2e25fbf597" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
  
// </div>
    //   <>
    //   <Swiper
    //     spaceBetween={30}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Autoplay, Pagination, Navigation]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide><img className='w-full' src='https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?w=740&t=st=1700416888~exp=1700417488~hmac=644c6021d15c0cd8032b1c61809943d92c1652833a84bc0593b0512b0d1ed078'></img></SwiperSlide>
    //     <SwiperSlide><img className='w-full' src='https://img.freepik.com/free-photo/lovable-ginger-girl-elegant-pink-jacket-laughing-winsome-young-woman-trendy-accessories-standing-rosy_197531-11053.jpg?w=740&t=st=1700417200~exp=1700417800~hmac=d84c803a8d7c5d4048cd3d0bc22cefab3239e803b5b97db844404c2df23009b9'></img></SwiperSlide>
    //     <SwiperSlide><img className='w-full' src='https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-21550.jpg?w=740&t=st=1700417241~exp=1700417841~hmac=6cc1a3283d8eca21c1d58c993e9022e22f72b7130f3cea12ca909a2e25fbf597'></img></SwiperSlide>
       
 
    //   </Swiper>
    // </>
//         <div>
//             <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>
//   <div className="hero-overlay bg-opacity-40"></div>
//   <div className="hero-content text-start text-neutral-content">
//     <div className="max-w-md text-start">
//       <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Purchase</h1>
//       <p className="mb-5">Welcome to a world of limitless possibilities. Discover the latest trends, exclusive deals, and a seamless shopping experience like never before. Join us on the journey to redefine online shopping</p>
//       <button className="btn btn-neutral">Shop now</button>
//     </div>
//   </div>
// </div>
//         </div>
<div classNam="hero min-h-screen  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-32 gap-36">
<div class="hero-content flex-col lg:flex-row">
  <img className=' w-3/6  mt-24' src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

  <div>
    <h1 class="text-3xl font-semi-bold  text-start">Discover Your Perfect Purchase</h1>
    <p className="mt-5">Welcome to a world of limitless possibilities. Discover the latest trends, exclusive deals, and a seamless shopping experience like never before. Join us on the journey to redefine online shopping</p>
    {/* <h1 class="text-3xl font-bold text-white text-center">announce Kara Place as </h1>
    <h1 class="text-3xl font-bold text-white text-center">Instrument’s next CEO</h1> */}
{/*       
    <button className='mt-6 ml-20 text-white'>Read more</button> */}
       <button className="btn btn-primary  mt-6  ">Buy Now</button>
 
  </div>

</div>

</div>
    );
};

export default Banner;