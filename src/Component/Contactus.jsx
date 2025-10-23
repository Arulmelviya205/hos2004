import React, { useState } from 'react'
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
import health from '../assets/images/health.jpg'
import host from '../assets/images/host.jpg'
import doctor from '../assets/images/doctor.jpg'
import nurse from '../assets/images/nurse.jpg'
import medic from '../assets/images/medic.jpg'
import vac from '../assets/images/vac.jpg'
import kit from '../assets/images/kit.jpg'
import heart from '../assets/images/heart.jpg'
import tent from '../assets/images/tent.jpg'
import emer from '../assets/images/emer.jpg'
import ambul from '../assets/images/ambul.jpg'
import ste from '../assets/images/ste.jpg'
import surg from '../assets/images/surg.jpg'
import lab from '../assets/images/lab.jpg'
import  virus from '../assets/images/virus.jpg'
import phar from '../assets/images/phar.jpg'
import report from '../assets/images/report.jpg'
import treat from '../assets/images/treat.jpg'
import micro from '../assets/images/micro.jpg'
import clinic from '../assets/images/clinic.jpg'
import face from '../assets/images/face.jpg'
import insta from '../assets/images/insta.jpg'
import goo from '../assets/images/goo.jpg'
 export default function Contactus() {
  const [email, setEmail] = useState("");

  const submitEmail = () => {
    if (email === "") {
      alert("Please enter an email.");
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else {
      alert("Submitted Successfully");
      setEmail(""); 
    }
  };
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
   <h1 className='jj0'>Medical kit</h1>
   <div className='jj'></div> 
   <img className='lth' src={health}/>
   <h2 className='lth1'>Health Care</h2>
   <img className='st' src={host}/>
   <h2 className='st1'>Hosptial</h2>
   <img className='oct' src={doctor}/>
   <h2 className='oct1'>Doctor</h2>
   <img className='rse' src={nurse}/>
   <h2 className='rse1'>Nurse</h2>
   <img className='cine' src={medic}/>
   <h2 className='cine1'>Medicine</h2>
   <img className='tion' src={vac}/>
   <h2 className='tion1'>Vaccination</h2>
   <img className='it' src={kit}/>
   <h2 className='it1'>Medical kit</h2>
   <img className='dio' src={heart}/>
   <h2 className='dio1'>Cardiogram</h2>
   <img className='tie' src={tent}/>
   <h2 className='tie1'>Patient</h2>
   <img className='mer' src={emer}/>
   <h2 className='mer1'>Emergency</h2>
   <img className='bul' src={ambul}/>
   <h2 className='bul1'>Ambulance</h2>
   <img className='tho' src={ste}/>
   <h2 className='tho1'>Stethoscope</h2>
   <img className='surg' src={surg}/>
   <h2 className='surg1'>Surgery</h2>
   <img className='lab' src={lab}/>
   <h2 className='lab1'>Lab</h2>
   <img className='virus' src={virus}/>
   <h2 className='virus1'>Virus</h2>
   <img className='phar' src={phar}/>
   <h2 className='phar1'>Pharmacy</h2>
   <img className='report' src={report}/>
   <h2 className='report1'>Medical Report</h2>
   <img className='treat' src={treat}/>
   <h2 className='treat1'>Treatment</h2>
   <img className='micro' src={micro}/>
   <h2 className='micro1'>Microscope</h2>
   <img className='clinic' src={clinic}/>
   <h2 className='clinic1'>Clinic</h2>
   <h1 className='pi'>Hospital</h1>
   <img className='img0' src={hos}/>
   <div className='vv'></div>
   <h1 className='vv0'>Contact us</h1>
    <p className='np'>📞 Phone: +91 98765 43210</p>
    <p className='mail'>📧 Email: support@hospital.com</p>
      <p className='nagar'>📍 Address: 123, Anna Nagar, Chennai</p>
      <img className='face' src={face}/>
      <img className='ins' src={insta}/>
      <img className='g0' src={goo}/>
      <h1 className='joi'>Join us</h1>
      <label className='vv1'>Email:</label>
      <input type='email'value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='labe'/>
      <button className='ton' onClick={submitEmail}>Submit</button>
      <h2 className='ment'>Department</h2>
      <h2 className='day'>Days</h2>
      <h2 className='time'>Timing</h2>
      <p className='opd'>General OPD</p>
      <p className='monday'>Monday-Saturday</p>
      <p className='monk'>8:00 AM – 8:00 PM</p>
      <p className='genk'>Emergency</p>
      <p className='all'>All Days</p>
      <p className='all0'>24 * 7</p>
      <p className='mac'>Pharmacy</p>
      <p className='sun'>Monday-Sunday</p>
      <p className='sun0'>7:00 AM – 10:00 PM</p>
      <p className='scan'>Lab & Scan</p>
      <p className='scan0'>Monday–Saturday</p>
      <p className='scan1'>8:00 AM – 6:00 PM</p>
   </div>
   
  )
}

