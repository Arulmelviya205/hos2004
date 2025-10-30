import React from 'react'
import '../Styles/Login.css'
import qq from '../assets/images/qq.jpg'
import hos from '../assets/images/hos.jpg'
import login0 from '../assets/images/login0.jpg'
import ma from '../assets/images/ma.jpg'
import pass from '../assets/images/pass.jpg'
import face from '../assets/images/face.jpg'
import insta from '../assets/images/insta.jpg'
import goo from '../assets/images/goo.jpg'
export default function Login() {
 
  return (
    <div>
      <h1 className='pit'>Hospital</h1>
      <img className='pit0' src={hos}/>
      <div className='dd'></div>
      <img className='login0' src={login0}/>
      <img className='namk' src={qq}/>
      <img className='mai1' src={ma}/>
      <img className='ord1' src={pass}/>
       <h1 className='gin'>login</h1>
      <label className='bel'>Username:</label>
      <input type='text'className='bel0'/>
      <label className='mai'>Email:</label>
      <input type='email' className='mai0'/>
      <label className='ord'>Password:</label>
      <input type='password' className='ord0'/>
      <button type='submit' className='mit'>submit</button>
      <div className='kn'></div>
      <img className='fac' src={face}/>
      <div className='kn0'></div>
      <img className='ita' src={insta}/> 
      <div className='kn1'></div>
      <img className='goh' src={goo}/>
    </div>
  )
}
