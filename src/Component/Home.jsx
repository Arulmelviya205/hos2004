import React from 'react'
import "../Styles/Home.css";
import hos from '../assets/images/hos.jpg';
import hos1 from '../assets/images/hos1.jpg';
import about from '../assets/images/about.jpg';
import caro from '../assets/images/caro.jpg'
import brain from '../assets/images/brain.jpg'
import ortho from '../assets/images/ortho.jpg'
import pedia from '../assets/images/pedia.jpg'
import der from '../assets/images/der.jpg'
import us from '../assets/images/us.jpg'
import apo from '../assets/images/apo.jpg'
import picturevideo from '../assets/videos/picture.mp4'
import nam1 from '../assets/images/nam1.jpg'
import pho1 from '../assets/images/pho1.jpg'
import depart from '../assets/images/depart.jpg'
import ema0 from '../assets/images/ema0.jpg'
import prob0 from '../assets/images/prob0.jpg'
import health from '../assets/images/health.jpg'
import host from '../assets/images/host.jpg'
import doctor from '../assets/images/doctor.jpg'
import nurse from '../assets/images/nurse.jpg'
import medic from '../assets/images/medic.jpg'
import vac from '../assets/images/vac.jpg'
import kit from '../assets/images/kit.jpg'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
       <img className='hos' src={hos} alt='Hospital'/> 
      <h1 className='tal'>Hospital</h1>
     <img className='hos1' src={hos1} alt='about hosptial'/>
     <p className='care'>Hospital management involves planning, organizing, and supervising healthcare services <br/>
     to ensure efficient patient care and smooth hospital operations. It focuses on optimizing<br/>
      resources, staff, and processes to improve healthcare quality and patient satisfaction.</p>
      <h1 className='star'>About</h1>
      <img className='abo' src={about}/>
      <p className='co'>The administration and coordination of hospital operations to ensure efficient<br/>
       healthcare delivery and patient care.</p>
      <div className='coo'></div>
         <Link className="coo1" to="/about">Learn more</Link>
          <h1 className='dap1'>Department</h1>
          <div className='mo'></div>
           <h1 className='dio'>cardiology</h1>
           <h4 className='kk0'>(heart and blood vessels)</h4>
           <img className='caro' src={caro}/>
            <p className='the'>Cardiology is the branch of medicine that<br/>
         deals with the study,
        diagnosis, and<br/>
         treatment of heart and blood vessel diseases.</p>
         <div className='gg2'></div>
         <h1 className='neu'>Neurologist</h1>
         <h4 className='kk1'>(brain, spinal cord, nerves)</h4>
         <img className='brain' src={brain}/>
         <p className='med'>A neurologist is a medical<br/>
          specialist who diagnoses and treats <br/>
         disorders of the brain, spinal cord,<br/> and nervous system.</p>
          <div className='gg3'></div>
         <h1 className='pedics'>orthopedics</h1>
         <h4 className='kk2'>(bones, joints, muscles)</h4>
         <img className='ortho' src={ortho}/>
         <p className='dis'>Orthopedics is the branch of medicine that focuses<br/> on the diagnosis, <br/>
         treatment, and prevention of disorders of the bones, joints, <br/>
         muscles, ligaments, <br/>
         and tendons.
         It helps manage conditions such as fractures,<br/>
         arthritis, back pain,
         and sports injuries.</p>
          <div className='gg4'></div>
         <h1 className='cian'>pediatrician</h1>
         <h4 className='kk3'>(children’s health)</h4>
         <img className='pedia' src={pedia}/>
         <p className='who'>A pediatrician is a medical doctor who specializes in the<br/> health and medical<br/>
          care of infants, children, and adolescents.<br/>
          They monitor growth, development,
 and provide preventive<br/> care like vaccinations.</p>
 <div className='gg5'></div>
 <h1 className='der'>Dermatology</h1>
 <h4 className='kk4'>(skin, hair, nails)</h4>
 <img className='der1' src={der}/>
 <p className='mat'>Dermatology is the branch of medicine that <br/>focuses on diagnosing<br/>
  and treating conditions related to the<br/> skin, hair, and nails.<br/>
It covers a wide range of issues, including acne, eczema,<br/>
 psoriasis, infections, and skin cancers.</p>
 <h1 className='us'>Contact us</h1>
   <img className='img21' src={us}/>
    <video autoPlay loop muted  width='100%'><source src={picturevideo} type='video/mp4' className='pat01'/></video>
    <div className='loo'></div>
     <img className='apo0' src={apo}/>
     <img className='name1'  src={nam1}/>
     <img className='pho1' src={pho1}/>
     <img className='email0' src={ema0}/>
     <img className='depart1' src={depart}/>
     <img className='prob1' src={prob0}/>
    
    <h1 className='apo'>Appointment form</h1>
    <label className='apo1'>Appointment no:</label>
    <input type='text' className='apo2'/>
    <label className='name'>Name:</label>
    <input type='text' className='name0'/>
    <label className='phone'>Phone:</label>
    <input type='text' className='phone1'/>
    <label className='depart'>Department:</label>
    <select className='depart0'>
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
   <label className='email'>Email:</label>
   <input type='text' className='email1'/>
   <label className='prob'>Problem:</label>
   <input type='text' className='prob0'/>
   <button type='submit' className='submit'>submit</button>
   <div className='kit1'></div>
   <h1 className='kit'>Medical kit</h1>
   <img className='health' src={health}/>
   <h2 className='hea'>Health Care</h2>
   <img className='host' src={host}/>
   <h2 className='host1'>Hospital</h2>
   <img className='doct' src={doctor}/>
   <h2 className='doct1'>Doctor</h2>
   <img className='nurse'src={nurse}/>
   <h2 className='nurse1'>Nurse</h2>
   <img className='medic' src={medic}/>
   <h2 className='medic1'>Medicine</h2>
   <img className='vac' src={vac}/>
   <h2 className='vac1'>Vaccination</h2>
   <img className='ki' src={kit}/>
   <h2 className='ki1'>Medical kit</h2>
  </div>
    
  )
}
