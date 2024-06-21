"use client";

import Image from "next/image";

const features =[
    {
        image:'/assets/features/Group 132.png',
        title:'BOOK WITH',
        point:'ONLY 20%'

    },
    {
        image:'/assets/features/Group.png',
        title:'PAYMENT PLAN',
        point:'EASY 70/30'

    },
    {
        image:'/assets/features/Group 16.png',
        title:'HANDOVER ON',
        point:'Q2 2027'

    },
    {
        image:'/assets/features/Group 40.png',
        title:'AREA STARTS FROM',
        point:'700 SQMT'

    },
]

function Features() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {features.map((feature, index)=>{
            return(
                <div key={index} className="flex flex-col items-center justify-center gap-1">
                    <Image src={feature.image} width={50} height={50} className="m-2" alt="featureImg"/>
                    <h1 className="text-[#004572] font-normal text-sm md:text-lg font-poppins">{feature.title}</h1>
                    <h1 className="text-[#004572] font-bold text-xl md:text-2xl font-oswald">{feature.point}</h1>
                    <div className='border-2 border-[#00357b43] w-[73px] rounded-full'></div>
                </div>
            )
        })}
    </div>
  )
}

export default Features