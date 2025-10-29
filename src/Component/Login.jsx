import React from 'react'
import '../Styles/Login.css'

import hos from '../assets/images/hos.jpg'
import login0 from '../assets/images/login0.jpg'
export default function Login() {
 
  return (
    <div>
      <h1 className='pit'>Hospital</h1>
      <img className='pit0' src={hos}/>
      <div className='dd'></div>
      <img className='login0' src={login0}/>
       <h1 className='gin'>login</h1>
      
    </div>
  )
}
