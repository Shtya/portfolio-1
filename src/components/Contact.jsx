'use client'
import React, { useState } from 'react'


const Contact = () => {
const [Status , setStatus] = useState(false) 

const handleSubmit = async (e) => {
  e.preventDefault();
  let name = e.target[0].value
  let phone = e.target[1].value
  let email = e.target[2].value
  let message = e.target[3].value

  const res = await fetch('/api/sendEmail' , {
    method:"POST" , 
    headers:{ 'content-type' : "application/json" },
    body : JSON.stringify({name , email , phone , message})
  })
  
  await res.json().then(e => setStatus(true)) 

  setTimeout(() => {
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
    e.target[3].value = ''
    setStatus(false)
  }, 4000);
};


return (
  <div className='Contact' id='contact'>
    
    <div className="container">
      <div className="box">
        <h2 >Contact us  </h2>
        <p className='p'>contact us for more information and get notified when i publich something new .</p>
        <div className="group"><i className='bx bx-home' ></i>  <span>22 Abour - North-Sina - Egypt</span> </div>
        <div className="group"><i className='bx bx-envelope' ></i> <span> shtya54@gmail.com </span> </div>
        <div className="group"><i className='bx bx-phone-call' ></i> <span> 01551495772 </span> </div>
        <div className="group"><i className='bx bxl-whatsapp' ></i> <span> 01551495772 </span> </div>
      </div>


      <form method='POST' onSubmit={handleSubmit} >
        <input name='name' type="text"  placeholder='name' />
        <input name='phone' type='tel'  placeholder='Your E-mail' />
        <input name='email' type="email"  placeholder='Email Address' />
        <textarea name='text'   placeholder='Message' />
        <input  type="submit"  />
      </form>

      
    </div>

  </div>

  )
}

export default Contact
