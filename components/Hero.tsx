"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


const Hero = () => {
    const handleScroll = () => {}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x w-full'>
            <h1 className='hero__title'>
                Find,book, or rent a car
            </h1>
            <p className='hero__subtitle'>
                Find the perfect car for you
            </p>
            <CustomButton
            title="explore cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
               <Image src="/hero.png" alt="hero image"
               fill className="object-contain"
               /> 
            </div>
               
            <div className='hero__image-overlay'/>

        </div>
        
    </div>
  )
}

export default Hero