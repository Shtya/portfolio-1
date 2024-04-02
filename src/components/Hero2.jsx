import React from 'react'
import Image1 from '@/assets/main.jpg'
import Image from 'next/image'
import dots from '@/assets/dots.png'


const Hero2 = () => {
  
  return (
    <div className='Hero2' id='hero'>
        <div className="container">
            <div className="text" style={{backgroundImage: `url('${dots.src}')`}}>
                <h4 data-aos='fade-right' data-aso-delay="100" > hello, I'm A </h4>
                <h2 data-aos='fade-right' data-aso-delay="200" > Full Stack<b> Developer </b> </h2>
                <p data-aos='fade-right' data-aso-delay="300" > I'm Ahmed Abdelrhman, I Like Building Web Applications That Leverage My Skills In Web Development. Check Out Some Of My Work In The Projects Section. </p>
                <a href='#projects' className='btn' data-aos='fade-right' data-aso-delay="400" > view portfolio </a>
            </div>

            <div className="img" > <Image data-aos='fade-left' src={Image1} alt="" /> </div>
        </div>
    </div>
  )
}

export default Hero2