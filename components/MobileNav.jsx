"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links=[
    {
        name:'home',
        path:'/',
    },
    {
        name:'services',
        path:'/services',
    },
    {
        name:'work',
        path:'/work',
    },
    {
        name:'contact',
        path:'/contact',
    },
]

const MobileNav=()=> {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-3xl font-extrabold text-white"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-24 mb-4 flex items-center justify-center">
                <button className='text-md text-black border-black lg:text-[#17ABFF] border-2 lg:border-[#17ABFF] rounded px-8 py-2'>ENQUIRE NOW</button>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index)=>{
                    return(
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path===pathname && "text-[#17ABFF] border-b-2 border-[#17ABFF]"} text-xl capitalize hover:text-[#17dcff] transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav