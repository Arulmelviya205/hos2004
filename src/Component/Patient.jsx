import React from 'react'
import '../Styles/Patient.css'
import hos from '../assets/images/hos.jpg'
import patievideo from '../assets/videos/patie.mp4'
import patho from '../assets/images/patho.jpg'
import varma from '../assets/images/varma.jpg'
import ana from '../assets/images/ana.jpg'
import nano from '../assets/images/nano.jpg'
import uro from '../assets/images/uro.jpg'
import cardio from '../assets/images/cardio.jpg'
import radio from '../assets/images/radio.jpg'
import gyna from '../assets/images/gyna.jpg'
import nep from '../assets/images/nep.jpg'
import onco from '../assets/images/onco.jpg'
import ctvs from '../assets/images/ctvs.jpg'
import sree from '../assets/images/sree.jpg'
import man from '../assets/images/man.jpg'
import nam from '../assets/images/nam.jpg'
import gir from '../assets/images/gir.jpg'
import gen from '../assets/images/gen.jpg'
import boy from '../assets/images/boy.jpg'
import ema from '../assets/images/ema.jpg'
import num from '../assets/images/num.jpg'
import pro from '../assets/images/pro.jpg'
import add from '../assets/images/add.jpg'
import gro from '../assets/images/gro.jpg'
import path from '../assets/images/path.jpg'

export default function Patient() {
  return (
    <div>
       <img className='ho11' src={hos}/>
      <h1 className='ta11'>Hospital</h1>
     <video autoPlay loop muted  width='98%'><source src={patievideo} type='video/mp4' className='pat0'/></video>
      <h1 className='doctor'>Doctor List</h1>
      <img className="patho" src={patho}/>
      <h1 className='raja'>Dr. Rajavigneshwari N</h1>
      <h4 className='raja1'>Specialist:Pathologist</h4>
      <img className='varma' src={varma}/>
      <h1 className='varma0'>Dr. (Prof.) Amitaabh Varma</h1>
      <h4 className='varma1'>Specialist:Neurology</h4>
      <img className='ana' src={ana}/>
      <h1 className='ana0'>Dr. Anita Kulkarni</h1>
      <h4 className='ana1'>Specialist:Anaesthesiology</h4>
      <img className='nano' src={nano}/>
      <h1 className='nano0'>Dr. Rashi Gupta</h1>
      <h4 className='nano1'>Specialist:Neonatology</h4>
      <img className='uro' src={uro}/>
      <h1 className='uro0'>Dr. Surendra Kumar Nindra</h1>
      <h4 className='uro1'>Specialist:Urology</h4>
      <img className='cardio' src={cardio}/>
      <h1 className='cardio0'>Dr. Deepak Natarajan</h1>
      <h4 className='cardio1'>Specialist:cardiology</h4>
      <img className='radio' src={radio}/>
      <h1 className='radio0'>Dr. Ravi Kumar Saman</h1>
      <h4 className='radio1'>Specialist:Radiologist</h4>
      <img className='gyna' src={gyna}/>
      <h1 className='gyna0'>Dr. Manisha Uddey</h1>
      <h4 className='gyna1'>Specialist:Gynaecology</h4>
      <img className='nep1' src={nep}/>
      <h1 className='nep0'>Dr. Shivangini Gupta</h1>
      <h4 className='nep2'>Specialist:Pediatric Nephrology</h4>
      <img className='onco' src={onco}/>
      <h1 className='oncoo'>Dr. P. Karunakar Reddy</h1>
      <h4 className='onco1'>Specialist:Surgical Oncologist</h4>
      <img className='ctvs' src={ctvs}/>
      <h1 className='ctvs0'>Dr. Ankush Singh Kotwal</h1>
      <h4 className='ctvs1'>Specialist:CTVS Surgeon</h4>
      <img className='sree' src={sree}/>
      <h1 className='sree0'>Dr. K. Siva Sree</h1>
      <h4 className='sree1'>Specialist:Medical Oncologist</h4>
      <div className='mm'></div>
      <h1 className='details'>Patient Details</h1>
      <img className='nn0' src={man}/>
      <img className='nam0' src={nam}/>
      <img className='age0' src={gir}/>
      <img className='gen0' src={gen}/>
      <img className='dob0' src={boy}/>
      <img className='ema0' src={ema}/>
      <img className='num0' src={num}/>
      <img className='pro0' src={pro}/>
      <img className='add0' src={add}/>
      <img className='gro0' src={gro}/>
      <img className='path' src={path}/>
       <label className='nn'>patient ID:</label><br/>
      <input type='text' onChange={event=>{setId(event.target.value)}} className='nn1'/><br/>
      <label className='nam'>Name:</label><br/>
       <input type='text' onChange={event=>{setName(event.target.value)}} className='nam1'/><br/>
      <label className='age'>Age:</label><br/>
       <input type='text' onChange={event=>{setAge(event.target.value)}} className='age1'/><br/>
       <label className='gen'>Gender:</label><br/>
        <input type='text' onChange={event=>{setGender(event.target.value)}} className='gen1'/><br/>
        <label className='dob'>DOB:</label><br/>
         <input type='text' onChange={event=>{setDoB(event.target.value)}} className='dob1'/><br/>
         <label className='ema'>email:</label><br/>
          <input type='text' onChange={event=>{setEmail(event.target.value)}} className='ema1'/><br/>
          <label className='num'>Number:</label><br/>
           <input type='text' onChange={event=>{setNumber(event.target.value)}} className='num1'/><br/>
           <label className='pro'>Problem:</label><br/>
            <input type='text' onChange={event=>{setProblem(event.target.value)}} className='pro1'/><br/>
            <label className='add'>Address:</label><br/>
             <input type='text' onChange={event=>{setAddress(event.target.value)}} className='add1'/><br/>
             <label className='gro'>Blood group:</label><br/>
             <input type='text' onChange={event=>{setBlood(event.target.value)}} className='gro1'/><br/>
             <input type='checkbox' onChange={(event)=>setCheck(event.target.checked)} className='chec'/>
             <button className='sub' onClick={PostData}>submit</button>
    </div>
  )
}
