import { Swiper, SwiperSlide } from 'swiper/react';
import './projectoverview.css'
import 'swiper/css';

import { FreeMode, Pagination } from 'swiper/modules';
const ProjectOverview = () => {
    return (
        <div>
          <h1 className="text-3xl font-bold text-center m-12 projecttitle">Project Overview</h1>
          <div>
          <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/sport-jacket-clothing_1203-2534.jpg?w=740&t=st=1696874075~exp=1696874675~hmac=dac8962488944ef6300ade6540ca274dcd499ee3fede88531817fc85fee49fab'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/graphic-woman-dress-trendy-design-white-background_460848-13623.jpg?w=360&t=st=1696874845~exp=1696875445~hmac=bfc760c8364ac1c298e1fcecce476353f5b81036b7eae6970a2fd9374211ed60'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251497.jpg?w=740&t=st=1696875120~exp=1696875720~hmac=7d5083dd9042f4248f57cb371869f9bcbcd9b8b31bd3293391067f100f8ce0e5'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/jeans_1203-8093.jpg?w=740&t=st=1696874603~exp=1696875203~hmac=3196343fece317be232067ebf0fae32c52b68f9030bf741ab895086a9f9a6f09'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/interior-kids-room-decoration-with-clothes_23-2149096031.jpg?w=360&t=st=1696875155~exp=1696875755~hmac=3cc4af5dc079a03090505eeaf46667b8b8488536d5af6ebd229d418f3423e6ac'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/man-red-polo-shirt-apparel-studio-shoot_53876-102825.jpg?w=740&t=st=1696874630~exp=1696875230~hmac=d0b9f15f96b3dc9cd568d9f545608af89c6743214e00c8e6088555e8c3806a2e'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/picture-details-long-green-dress-made-dense-fabric-with-neat-tailoring-white-buttons_132075-9075.jpg?w=360&t=st=1696874961~exp=1696875561~hmac=aaae9784bf4830624cc41053e31edcda563763995ff1587ae26678f6b8bee98c'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/woman-bathroom_144627-35868.jpg?w=360&t=st=1696874915~exp=1696875515~hmac=c74e4ac6ec5ec89c7163e70a5ee6d5f6afbcd4349ecca5f64ac0542d34c11fa2'></img></SwiperSlide>
        <SwiperSlide>< img className='h-96' src='https://img.freepik.com/free-photo/close-up-boy-showing-shirt_23-2148414572.jpg?w=740&t=st=1696875175~exp=1696875775~hmac=69ad3a56c80f697d761f85e342dcb90804c949b71c6cd46cc9d1e968a85f00aa'></img></SwiperSlide>
       
      </Swiper>
    </>
          </div>
        </div>
    );
};

export default ProjectOverview;