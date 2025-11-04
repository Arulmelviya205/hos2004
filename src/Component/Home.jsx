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
import doctvideo from '../assets/videos/doct.mp4'
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
import emer from '../assets/images/emer.jpg'
import ste from '../assets/images/ste.jpg'
import heart from '../assets/images/heart.jpg'
import tent from '../assets/images/tent.jpg'
import ambul from '../assets/images/ambul.jpg'
import patient from '../assets/images/patient.jpg'
import nt from '../assets/images/nt.jpg'
import cardio from '../assets/images/cardio.jpg'
import nano from '../assets/images/nano.jpg'
import radio from '../assets/images/radio.jpg'
import nep from '../assets/images/nep.jpg'
import ctvs from '../assets/images/ctvs.jpg'
import varma from '../assets/images/varma.jpg'
import bill from '../assets/videos/bill.mp4'
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
           <h1 className='diok'>cardiology</h1>
           <h4 className='kkl'>(heart and blood vessels)</h4>
           <img className='carok' src={caro}/>
            <p className='thek'>Cardiology is the branch of medicine that<br/>
         deals with the study,
        diagnosis, and<br/>
         treatment of heart and blood vessel diseases.</p>
         <div className='gg22'></div>
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
 <div className='gg7'></div>
 <h1 className='dern'>Dermatology</h1>
 <h4 className='kko'>(skin, hair, nails)</h4>
 <img className='derp' src={der}/>
 <p className='matn'>Dermatology is the branch of medicine that <br/>focuses on diagnosing<br/>
  and treating conditions related to the<br/> skin, hair, and nails.<br/>
It covers a wide range of issues, including acne, eczema,<br/>
 psoriasis, infections, and skin cancers.</p>
 <h1 className='us'>Contact us</h1>
   <img className='img21' src={us}/> 
    <video autoPlay loop muted  width='80%' style={{margin:"5vw"}}><source src={doctvideo} type='video/mp4' className='pat01'/></video>
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
   <img className='emer' src={emer}/>
   <h2 className='emer1'>Emergency</h2>
   <img className='ste' src={ste}/>
   <h2 className='ste1'>Stethoscope</h2>
   <img className='heart' src={heart}/>
   <h2 className='heart1'>Cardiogram</h2>
   <img className='tent' src={tent}/>
   <h2 className='tent1'>Patient</h2>
   <img className='ambul' src={ambul}/>
   <h2 className='ambul1'>Ambulance</h2>
   <h1 className='ent'>Patient</h1>
    <img className='ent1' src={patient}/>
    <img className='ent0' src={nt}/>
    <p className='reg'>A patient is an individual who receives medical care or treatment from healthcare professionals.<br/>
     They may visit a hospital or clinic for diagnosis, therapy, or regular checkups. <br/>
     Each patient’s condition and treatment plan are carefully monitored to ensure recovery and well-being.</p>
   <p className='reg1'>A patient is a person receiving medical care or treatment from doctors or healthcare staff.<br/>
    They may visit hospitals or clinics for checkups, diagnosis, or recovery support.</p>
    <h1 className='list'>Doctor List</h1>
    <div className='kk'></div>
    <img className='car' src={cardio}/>
    <h1 className='car0'>Dr. Deepak Natarajan</h1>
    <h4 className='car1'>Specialist:cardiology</h4>
    <p className='gist'>The first PTCA to be performed in India was in 1984 at G.B Pant Hospital,<br/> Delhi. Dr Deepak Natarajan was washed up for the case, and today is one of the leading angioplasters of Delhi NCR.<br/>
     Dr. Deepak Natarajan is one of the top interventional cardiologists in India,<br/>
      recognized for his groundbreaking work in percutaneous mitral balloon valvotomy with the Inoue Balloon catheter,<br/>
       and being the first cardiologist in the country to administer intracoronary and intravenous <br/>
       streptokinase in acute myocardial infarction.</p>
    <div className='kkk'></div>
    <img className='nanoo'src={nano}/>
    <h1 className='nanok'>Dr. Rashi Gupta</h1>
    <h4 className='nanon'>Specialist:Neonatology</h4>
    <p className='gist1'>There are multiple dentists named Dr. Rashi Gupta, with prominent practices in Geelong,<br/>
     Australia, and Mumbai, India. The Geelong-based Dr. Rashi Gupta is known<br/> for her expertise in cosmetic dentistry<br/>
      and dental implants, having completed extensive training in Australia and abroad</p>
    <div  className='nnn'></div>
    <img className='radioo' src={radio}/>
    <h1 className='rd'>Dr. Ravi Kumar Saman</h1>
    <h4 className='rd1'>Specialist:Radiology</h4>
    <p className='gist2'>Dr. Ravi Kumar Saman has expertise in a range of radiological investigations and interventional<br/>
     procedures. His interests include fetal medicine, prostate imaging, and emergency radiology.<br/>
      He is involved in active diagnostics and teaching.</p>
    <div className='mmm'></div>
    <img className='nepp' src={nep}/>
    <h1 className='nepk'>Dr. Shivangini Gupta</h1>
    <h4 className='nepm'>Specialist:Pediatric Nephrology</h4>
    <p className='gist3'>Looking for a trusted Pediatric Nephrologist near me?<br/>
     Dr. Shivangini Gupta at Apollo JBP Hospitals specializes in diagnosing and<br/>
      treating kidney-related conditions in children,<br/>
      including urinary tract infections, nephrotic syndrome, and chronic kidney disease.<br/>
       With compassionate care and advanced pediatric <br/>
      expertise, she ensures accurate diagnosis, personalized treatment, and ongoing <br/>
      support for young patients and their families.</p>
    <div className='aaa'></div>
    <img className='ctvsl' src={ctvs}/>
    <h1 className='ctvss'>Dr. Ankush Singh Kotwal</h1>
    <h4 className='ctvsd'>Specialist:CTVS Surgeon</h4>
    <p className='gist4'>Dr. Ankush Singh Kotwal is a highly skilled Consultant CTVS-Cardiothoracic Surgeon <br/>
    specializing in comprehensive cardiac and thoracic care. He expertly manages heart diseases, vascular conditions,<br/>
     and performs advanced cardiothoracic surgeries</p>
    <div className='hh'></div>
    <img className='neul' src={varma}/>
    <h1 className='ne'>Dr. (Prof.) Amitaabh Varma</h1>
    <h4 className='na'>Specialist:Neurology</h4>
    <p className='gist5'>With over 50 years of clinical excellence,<br/>
     Dr. (Prof.) Amitaabh Varma is regarded as one of India’s<br/>
     most respected neurologists, celebrated for his diagnostic precision,<br/>
      ethical care, and leadership <br/>
     in advancing neurological health. He was honored by the<br/>
      Indian Academy of Neurology as a “Legend in Neurology”, a rare <br/>
     distinction that reflects his immense contribution to the field.</p>
    <h1 className='bil'>Billing</h1> 
     <video autoPlay loop muted  width='90%' style={{margin:"5vw"}}><source src={bill} type='video/mp4' className='pat01'/></video>
    </div>
  )
}
