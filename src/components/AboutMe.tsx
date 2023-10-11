import React from 'react'
import Container from './Container'
import Title from './Title'

const AboutMe = () => {
  return (
    <Container className='bg-zinc-700 text-zinc-300 px-4'>
       <Title title='About Me'/>
        <p className='text-base tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias ea dolore. Similique molestias laboriosam, veritatis consequuntur doloremque aliquid placeat, exercitationem dolor architecto aspernatur modi corporis explicabo vitae. Delectus voluptatum perferendis ipsum amet <br/>
        assumenda ullam excepturi vitae? Repudiandae, harum. Cupiditate adipisci nulla exercitationem ut, id eos molestiae doloribus, reprehenderit neque officiis sint magnam obcaecati distinctio sed. Ea, tempora culpa vitae dolore tempore nam optio exercitationem rerum quis architecto. Inventore illo id porro architecto quos placeat totam dolorum nesciunt iste doloremque?</p>
    </Container>
  )
}

export default AboutMe