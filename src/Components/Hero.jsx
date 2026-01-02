import React from 'react'
import bgImage from '../assets/hero.jpg'
import line from '../assets/line2.png'
import Navbar from '../Components/Navbar'


const Hero = () => {
  return (
    <div className='relative h-screen w-full bg-cover bg-center bg-no-repeat 'style={{ backgroundImage: `url(${bgImage})`}}>
      <Navbar/>
      <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 -mt-10'>
        <img src={line} alt="" />
        <h2 className='text-lg md:text-xl mb-4 -tracking-widest uppercase'>Where Delight meets Taste</h2>
        <h1 className='text-4xl md:text-6x1 font-bold mb-6'>Faiyaz's CAFE</h1>
        <button className='bg-amber-500 text-black py-3 px-10 hover:bg-amber-600 transition'>BOOK A TABLE</button>
      </div>
    </div>
  )
}

export default Hero