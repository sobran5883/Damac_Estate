"use client"

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import Image from 'next/image';
import SliderBtns from './SlideBtns';
import img1 from '../public/assets/gallery/001.jpg';
import img2 from '../public/assets/gallery/002.jpg';
import img3 from '../public/assets/gallery/003.jpg';
import img4 from '../public/assets/gallery/004.jpg';

const gallerys=[
    {
        image:'/assets/gallery/01.jpg'
    },
    {
        image:'/assets/gallery/02.jpg'
    },
    {
        image:'/assets/gallery/03.jpg'
    },
    {
        image:'/assets/gallery/04.jpg'
    },
    {
        image:'/assets/gallery/05.jpg'
    }
]

function Gallery() {
  return (
    <div>
        <div className="w-full flex text-sm md:text-lg justify-center md:justify-end gap-2 mb-4 md:mb-6">
            <button className="bg-[#00357B] text-white h-8 md:h-12 w-40 rounded-md">EXTERIORS</button>
            <button className="border border-[#00357B] h-8 md:h-12 w-40 rounded-md">INTERIORS</button>
        </div>
        <div>
        <Swiper spaceBetween={30} loop={true} slidesPerView={1} className="xl:h-[520px] rounded-lg">
              {gallerys.map((gallery, index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[200px] lg:h-[500px] relative group flex justify-center items-center rounded-lg">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={gallery.image} fill alt='galleryImg' className="object-cover rounded-lg"/>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <SliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_12px)] z-50 w-full justify-between px-1 md:px-4"
                            btnStyles="bg-white rounded-full hover:bg-accent-hover text-black/60 text-[12px] md:text-[16px] w-[20px] md:w-[25px] h-[20px] md:h-[25px] flex justify-center items-center"/>
            </Swiper>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 mt-2'>
            <div className='flex gap-2'>
                <Image src={img1} alt='galleryImg'/>
                <Image src={img2} alt='galleryImg'/>
            </div>
            <div className='flex gap-2'>
                <Image src={img3} alt='galleryImg'/>
                <Image src={img4} alt='galleryImg'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery