import React from 'react'
import img1 from '@/assets/icon/11.png'
import img2 from '@/assets/icon/22.png'
import img3 from '@/assets/icon/33.png'
import img4 from '@/assets/icon/55.png'
import img5 from '@/assets/icon/66.png'
import Image from 'next/image'
import dots from '@/assets/dots.png'
const Services = () => {
    const serv = [
        { img : img3 , name:"front-end" , list:['Next js' ,'React js' , 'JavaScript' , 'Blade' , 'BootStrap'] },
        { img : img2 , name:"back-end" , list:[ 'node js' , 'Express js' , 'nest js' , 'php' , 'laravel'] },
        { img : img5 , name:"seo" , list:['semrush' , 'screaming Frog' , 'write articles' , 'search console'] },
        { img : img1 , name:"DataBase" , list:['mySql' , 'mongodb'] },
        { img : img4 , name:"other" , list:['shopify' , 'wordpress' , 'landing'] },
    ]
  return (
    <div className='Services' id='services' style={{backgroundImage:`url('${dots.src}')`}} >
        <div className="container">
            <h1 data-aos='fade-up' > Services </h1>
            <div className="boxes">
                {serv.map((e,index)=>(
                    <div className="box" key={index} data-aos='fade-up' data-aos-delay={`${index}00`}>
                        <Image src={e.img} alt={e.name} />
                        <span> {e.name} </span>
                        <ul>
                            {e.list.map((ele,idx)=>( <li key={idx}> {ele} </li> ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services