'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Img1 from '@/assets/icon/1.webp'
import Img2 from '@/assets/icon/2.webp'
import Img3 from '@/assets/icon/3.webp'
import Image from 'next/image';
import dots from '@/assets/dots.png'



const Testimonials = () => {
  
  var settings = {
      dots: false,
      slidesToScroll: 1 ,
      infinite: true,
      slidesToShow: 1,
      arrows: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 7000,
      lazyload: true,
      pauseOnHover: false ,
      adaptiveHeight: true,
      responsive: [
          {
            breakpoint: 4000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
      ]
    };
    const data = [
      {img : Img1 , h1:"Eslam Abd Elazeem" , p:  "انت ادتني شغف اكمل بعد ما كنت قربت افقده ربنا يوفقك حاجه جميله جدااا"      },
      {img : Img2 , h1:"Mohamed Kamal"     , p:  "الله اكبر انا مشوفتش بورتفوليو بالجمال ده قبل كده بم الله ما شاء الله"      },
      {img : Img3 , h1:"Islam Abdel Radi"  , p:  "عاش جدا عجبتني الالوان والتناسق بتاعهم استمر من نجاح لنجاح اكبر 🥰"      },
      {img : Img1 , h1:"KAREEM EL3SAWY"    , p:  "it's perfect ماشاء الله عليك شغل ممتاز جدا بارك الله فيك"      },
      {img : Img2 , h1:"Omar Fathy"        , p:  "ماشاء الله شغل كله محترم تسمح لي بأقناء HTML,CSS Dashboard للتعديل عليها وتحويلها إلي ريأكت"      },
      {img : Img3 , h1:"hamza"             , p:  "Ahmed Abdelrhman has helped my team and I stay on the same page. Previously, we were all over the board. working with Ahmed Abdelrhman has definitely saved us time and money."      },
    ]

  return (
    <div className='Testimonials' id='test' style={{backgroundImage:`url('${dots.src}')`}} >
        <div className="container">
            <h1>Testimonials</h1>

            <Slider {...settings} data-aos='zoom-in' >
                {
                data.map((e , index )=>(
                        <div className="box"  key={index} >
                            <Image src={e.img} alt="" />
                            <h3> {e.h1} </h3>
                            <div className="start"> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> <i className='bx bxs-star' ></i> </div>
                            <p> {e.p} </p>
                        </div>
                ))
                }
            </Slider>

        </div>
    </div>
  )
}

export default Testimonials