import Link from 'next/link'
import React from 'react'
import logo from "../assest/logo-black-img.png"
import Image from 'next/image'
import { navigation } from '@/constants/data' 
import {Menu} from 'lucide-react'


const Header = () => {
  return (
    <div className="w-full h-20 bg-designColor  ">
        <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between text-zinc-600 px-4 xl:px-0'>
       <Link href={"/"} >
        <Image src={logo} alt='logo Image' className='w-28'/>
       </Link>
        <div className=''>
           <ul className=' hidden md:flex gap-4 font-semibold uppercase text-sm  '>
               {
                navigation.map((item)=>(
                    <Link key={item.title} href={item.href}>
                    <li className='hover:text-black cursor-pointer duration-300 relative group overflow-hidden'>{item.title}
                    <span className='h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300' />
                    </li>
                   </Link>
                ))
               
               }
              
            </ul>
            {/* <div>
               <Menu/>
            </div> */}
        </div>
        </div>
    </div>
  )
}

export default Header