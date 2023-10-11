import React from 'react'
import BannerImg from "../assest/banner-img.jpg"
import Image from 'next/image'
import Container from './Container'


const Banner = () => {
  return (
   <Container className={""}>
     <div className='flex items-center flex-col sm:flex-row'>
        <div className=' w-full sm:w-1/2 flex flex-col ghap-2'>
           <h2 className='text-2xl font-semibold'>AKHI AKTHER</h2>
           <p className='text-lg font-semibold'>Mern Stack Devloper</p>
           <p className='text-base trackingh-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis enim dolorum facilis voluptate quos unde qui, nesciunt laborum ducimus voluptatibus commodi. Itaque repellat distinctio accusantium animi quis impedit mollitia ex.</p>
          <a href="/resume.pdf" target='_blank'>
          <button className='w-32 h-10 bg-zinc-700 text-zinc-200 hover:bg-black hover:text-white cursor-pointer duration-200 rounded-md'>Hire Me</button>
          </a>
        </div>
        <div className=' w-full sm:w-1/2 flex items-center justify-center mt-4'>
            <Image src={BannerImg} alt='Banner Image' className='h-96 w-96 object-contain'/>
        </div>
    </div>
   </Container>
  )
}

export default Banner