import React from 'react'
import '../Styles/Contactus.css'
import hos from '../assets/images/hos.jpg'
import ht from '../assets/images/ht.jpg'
import child from '../assets/images/child.jpg'
import apo from '../assets/images/apo.jpg'
import nam1 from '../assets/images/nam1.jpg'
import pho1 from '../assets/images/pho1.jpg'
import ema0 from '../assets/images/ema0.jpg'
import depart from '../assets/images/depart.jpg'
import prob0 from '../assets/images/prob0.jpg'
export default function Contactus() {
  return (
    <div>
      <img className='ho' src={hos}/>
      <h1 className='ta'>Hospital</h1>
      <img className='htm' src={ht}/>
      <h1 className='form'>Appointment Form</h1>
       <div className='loo1'></div>
      <img className='child' src={child}/>
      <label className='no'>Appointment no:</label>
      <input type='text' className='noo'/>
      <img className='ll' src={apo}/>
      <label className='me'>Name:</label>
      <input type='text' className='me1'/>
      <img className='zz' src={nam1}/>
      <label className='bb'>phone:</label>
      <input type='text' className='bbb'/>
      <img className='cc' src={pho1}/>
      <label className='il'>Email:</label>
      <input type='text' className='ili'/>
      <img className='ilil' src={ema0}/>
      <label className='men'>Department:</label>
       <select className='men1'>
    <input type='text'/>
    <option>select department</option>
    <option>cardiology</option>
    <option>Neurologist</option>
    <option>Dermatology</option>
    <option>pediatrician</option>
    <option>orthopedics</option>
    <option>urology</option>
    <option>Nephrology</option>
   </select>
   <img className='sel' src={depart}/>
   <label className='lem'>Problem:</label>
   <input type='text' className='lem1'/>
   <img className='lem2' src={prob0}/>
   <button type='submit' className='subb'>submit</button>
    </div>
  )
}
