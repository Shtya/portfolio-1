'use client'
import React, { useState } from 'react'
import Image1 from '@/assets/main.jpg'
import Image from 'next/image'
import dots from '@/assets/dots.png'
import cv from '@/assets/cv.jpg'

const Hero2 = () => {
  const [show , setshow] = useState(false)


  return (
    <div className='Hero2' id='hero'>
        <div className="container">
          <div className={`show-image ${show ? 'show' : ''}`}  > <Image src={cv} alt='' /> <i onClick={_=> setshow(!show)}  className='bx bx-x'></i>  </div> 
            <div className="text" style={{backgroundImage: `url('${dots.src}')`}}>
                <h4 data-aos='fade-right' data-aso-delay="100" > hello, I'm A </h4>
                <h2 data-aos='fade-right' data-aso-delay="200" > Full Stack<b> Developer </b> </h2>
                <p data-aos='fade-right' data-aso-delay="300" > I'm Ahmed Abdelrhman, I Like Building Web Applications That Leverage My Skills In Web Development. Check Out Some Of My Work In The Projects Section. </p>
                <a href='#' className='btn' data-aos='fade-right' data-aso-delay="400" onClick={_=> setshow(!show)} > view CV </a>
            </div>

            <div className="img" > <Image data-aos='fade-left' src={Image1} alt="" /> </div>
        </div>
    </div>
  )
}

export default Hero2