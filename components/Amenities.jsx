"use client"

import Image from "next/image"

const cards = [
    {
        image: '/assets/amenities/01.jpg',
        title: 'Floating Pools'
    },
    {
        image: '/assets/amenities/02.jpg',
        title: 'Spacious Cabins Like Rooms'
    },
    {
        image: '/assets/amenities/03.jpg',
        title: 'Sea Facing Swimming Pools'
    },
    {
        image: '/assets/amenities/04.jpg',
        title: 'Gymnasium & FItness'
    }
]

function Amenities() {
    return (
        <div className="flex flex-col items-center">
            <div class="max-w-6xl mx-auto text-[#00357B] flex flex-col items-center mt-14 px-4">
                <h1 class="text-center text-3xl sm:text-4xl font-light whitespace-pre-wrap leading-[0.8] sm:leading-[0.8] ">HARBOUR LIGHT</h1>
                <p class="text-[10px] mt-2">de GRISOGONO</p>
                <p class="text-[6px] leading-[0.2]">GENEVE</p>
                <div class="max-w-3xl text-center mt-10">
                    <h1 class="text-3xl sm:text-4xl font-medium font-oswald uppercase">Features &amp; Amenities</h1>
                    <p class="text-black my-4">Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between">
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-md shadow-black/20 shadow-md w-full sm:w-1/2 lg:w-1/4">
                        <div className="w-full h-auto">
                            <Image 
                                src={card.image} 
                                width={200} 
                                height={200} 
                                className="w-full h-auto rounded-lg object-cover" 
                                alt={card.title} 
                            />
                        </div>
                        <div className="mt-2 text-center">{card.title}</div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-end my-4">
                <h1 className="text-xs text-[#686868]">*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</h1>
            </div>
        </div>
    )
}

export default Amenities
