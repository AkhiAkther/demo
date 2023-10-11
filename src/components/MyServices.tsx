'use client'
import React, { ReactElement } from 'react'
import Container from './Container'
import Title from './Title'
import { serviceDetails } from '@/constants/data'
import { Component } from 'lucide'



interface Props{
    title:string,
    description:string,
   icon:ReactElement ;
}

const MyServices = () => {
    console.log(serviceDetails);
    
  return (
   <Container className={"border border-black mt-10"}>
    <Title  title ="My services"/>
    <div>
        {
            serviceDetails.map((item)=>(
                <div key={item?.title}>
                    <p>{item?.title}</p>
                  <span><Component/></span>
                      </div>
            ))
        }
    </div>

   </Container>
  )
}

export default MyServices