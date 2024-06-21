import Image from 'next/image';
import heroImg from '../public/assets/heroImg.png';
import heroCover from '../public/assets/heroImgCover.png'

//components
import Features from '@/components/Features';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';

const Home = () => {
  return (
    <div className=''>
      <div className='relative md:h-full'>
        <div className='absolute -z-20 top-0 left-0 h-full w-full'>
          <Image 
            className='h-[100%] w-[100%] object-cover' 
            src={heroImg} 
            alt="Hero Image" 
            priority 
          />
        </div>
        <div className='absolute -z-10 top-0 left-0 h-full w-full'>
          <Image 
            className='h-[100%] w-[100%] object-cover' 
            src={heroCover} 
            alt="Hero Cover" 
            priority 
          />
        </div>
        <div className='container p-[20px] lg:p-[40px] mx-auto h-full pt-[2rem]'>
          {/* header */}
          <Header/>
          
          <div className='h-screen lg:h-[80vh] gap-4 mt-[2rem] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
            <div className='lg:w-[40%] flex flex-col gap-3 lg:gap-12'>
              <div className='flex flex-col lg:gap-1'>
                <h1 className='text-3xl lg:text-5xl font-medium text-white font-oswald'>HARBOUR LIGHTS</h1>
                <h1 className='text-3xl lg:text-5xl font-medium text-white font-oswald'> DE <span className='text-[#17ABFF]'>GRESOGONO</span></h1>
                <h1 className='text-sm lg:text-lg font-semibold text-white lg:mt-2 font-poppins'>1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</h1>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='bg-[#000000] bg-opacity-[46%] lg:w-[80%] pl-2 md:px-4 py-2 lg:py-3 border-l-2 border-[#17ABFF]'>
                  <h1 className='text-xs lg:text-sm text-white/80'>Rental Returns of <span className='text-white font-normal'>UPTO 11%**</span></h1>
                </div>
                <div className='bg-[#000000] bg-opacity-[46%] lg:w-[80%] pl-2 md:px-4 py-2 lg:py-3 border-l-2 border-[#17ABFF]'>
                  <h1 className='text-xs lg:text-sm text-white/80'>Capital Appreciation of <span className='text-white font-normal'>UPTO 32%**</span></h1>
                </div>
              </div>
            </div>
            <div className='lg:w-[30%] max-w-[350px] backdrop-blur rounded-lg bg-[#5790be0b]'>
              <div className='p-6'>
                <p className='text-sm font-light tracking-[0.15em] text-white/80 py-2'>PRICING STARTS FROM</p>
                <h1 className='text-5xl text-white font-semibold'>$ 425,000</h1>
                <h1 className='text-xl text-white/80 py-4'>AED 1.3 Million</h1>
                <button className='w-full text-white/90 font-normal py-3 rounded bg-[#17ABFF] text-center'>GET A PRESENTATION</button>
              </div>
              <div className='w-full flex items-center justify-center border-t-2 border-black/40 bg-[#17aaff06]'>
                <p className='px-6 py-4 text-sm font-light text-[#98C5E8]'>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F4F9FF]'>
        <div className='container p-[20px] lg:p-[40px] mx-auto'>
          <Features/>
        </div>
      </div>
      <div className='container p-[20px] lg:p-[40px] mx-auto'>
        <Amenities/>
      </div>
      <div className='container p-[20px] lg:p-[40px] mx-auto'>
        <Gallery/>
      </div>
      <div className='flex items-center justify-center bg-[#091D41] h-[6rem]'>
        <h1 className='text-xs lg:text-sm font-extralight text-[#FCFCFC]'>© DAMAC Copyright 2024 All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Home;
