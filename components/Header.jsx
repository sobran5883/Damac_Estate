"use client"
import Image from 'next/image'
import logo from '../public/assets/Logo.png'
import MobileNav from './MobileNav'

function Header() {
  return (
    <div className='flex items-center justify-between '>
      <Image className='' src={logo} alt='Logo' priority/>
      <button className='text-md text-[#17ABFF] border-2 border-[#17ABFF] rounded px-8 py-2 hidden lg:block'>ENQUIRE NOW</button>
      <div className="block xl:hidden">
        <MobileNav/>
      </div>
    </div>
  )
}

export default Header