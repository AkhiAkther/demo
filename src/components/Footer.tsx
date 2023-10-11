import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import logowhite from "../assest/logo-white-img.png"
import { navigation, services } from '@/constants/data'
import { Facebook,InstagramIcon } from 'lucide-react'

const Footer = () => {
  return (
  <div className='bg-zinc-600 text-zinc-300'>
     <Container className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:place-items-center gap-10 px-4">
       <div>
       <Link href={""}>
        <Image src={logowhite} alt='' className='w-28'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores expedita quae laboriosam ullam mollitia, voluptatibus laborum vel maxime nobis.</p>
        </Link>
       </div>
       <ul className='flex flex-col gap-4 font-semibold uppercase text-sm  '>
               {
                navigation.map((item)=>(
                    <Link key={item.title} href={item.href}>
                    <li className='hover:text-white cursor-pointer duration-300 relative group overflow-hidden'>{item.title}
                    <span className='h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300' />
                    </li>
                   </Link>
                ))
               
               }
              
            </ul>
        
            <ul className='flex flex-col gap-4 font-semibold uppercase text-sm  '>
               {
                services.map((item)=>(
                 
                    <li key={item.title} className='hover:text-white cursor-pointer duration-300 relative group overflow-hidden'>{item.title}
                    <span className='h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300' />
                    </li>
                   
                ))
               
               }
              
            </ul>
       <div>
        <p>Reach me with</p>
              <ul className='flex items-start gap-5 mt-2' >
                <a href='https://www.facebook.com/profile.php?id=100064316097104' target='_blank'>
                    <li className="w-8 h-8 bg-zinc-300 text-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-800 hover:text-zinc-300 cursor-pointer duration-300"> <Facebook/></li>
                </a>
                <a href='https://WWW.instagram.com/_akhi_akther_?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                    <li className="w-8 h-8 bg-zinc-300 text-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-800 hover:text-zinc-300 cursor-pointer duration-300"> <InstagramIcon
                    /></li>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100064316097104' target='_blank'>
                    <li className="w-8 h-8 bg-zinc-300 text-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-800 hover:text-zinc-300 cursor-pointer duration-300"> <Facebook/></li>
                </a>
              </ul>
       </div>
   </Container>
  </div>
  )
}

export default Footer;