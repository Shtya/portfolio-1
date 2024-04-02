'use client'
import React from 'react'
import Image from 'next/image'
import Img from '@/assets/me.jpg'


const About = () => {
  return (
    <div className='about' id='about'  >
      <div className="container">
        <div className="img" > <Image data-aos='zoom-in'  src={Img} alt="" /> </div>
        <div className="box"  >
          <span data-aos='fade-left'> about me</span>
          <p data-aos='fade-left' >I like building Web Applications that leverage my skills in web development. Check out some of my work in the Projects section. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.  I'm a Freelance Fullstack Developer with over 3 years of experience. </p>
          <div className="groub-btn">
            <a href='#contact'  data-aos='fade-left' className="btn"> Hire me </a>
            <a href="cv.pdf" target='_blank' download  data-aos='fade-left' className="btn"> download CV </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About