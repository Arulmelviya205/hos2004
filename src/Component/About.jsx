import React, { useState } from 'react'
import '../Styles/About.css'
import hos from '../assets/images/hos.jpg'
import ha from '../assets/images/ha.jpg'
import caro from '../assets/images/caro.jpg'
import brain from '../assets/images/brain.jpg'
import ortho from '../assets/images/ortho.jpg'
import pedia from '../assets/images/pedia.jpg'
import der from '../assets/images/der.jpg'
import patient from '../assets/videos/patient.mp4'
import kid from '../assets/images/kid.jpg'
import face from '../assets/images/face.jpg'
import insta from '../assets/images/insta.jpg'
import goo from '../assets/images/goo.jpg'
import { Link } from 'react-router-dom'

export default function About() {
    const doctors=[
      {
      name:"Dr.Priya sharma",
      department:"Cardiology",
      days:"Monday-Friday",
      timing:"9:00 AM-2:00PM",
      hours:"5hrs/day",
    },
    {
      name:"Dr.Rajesh Kumar",
      department:"Orthopedics",
      days:"Tuesday-Saturday",
      timing:"10:00 AM-4:00 PM",
      hours:"6hrs/day",
    },
    {
      name:"Dr.Anitha Rao",
      department:"Pediatrics",
      days:"Monday-Friday",
      timing:"8:00 AM-1:00 PM",
      hours:"5hrs/day",
    },
    {
      name:"Dr.Vivek Nair",
      department:"Neurology",
      days:"Wednesday-Sunday",
      timing:"9:30 AM-3:00PM",
      hours:"6hrs/day",
    },
    {
      name:"Dr.Meena Joseph",
      department:"Dermatology",
      days:"Monday-Thursday",
      timing:"9:30 AM-3:00PM",
      hours:"5.5hrs/day"
    },
    {
      name:"Dr.Sanjay Patel",
      department:"General Medicine",
      days:"Monday-Saturday",
      timing:"9:00 AM-5:00 PM",
      hours:"8hrs/day",
    },
    {
      name:"Dr.Kavya Lyer",
      department:"Gynecology",
      days:"Tuesday-Saturday",
      timing:"10:00 AM-3:00 PM",
      hours:"5hrs/day",
    },
    {
      name:"Dr.Arjun Das",
      department:"ENT",
      days:"Monday-Friday",
      timing:"8:30 AM-1:30 PM",
      hours:"5hrs/day",
    },
    {
      name:"Dr.Nisha Reddy",
      department:"Psychiatry",
      days:"Wednesday-Sunday",
      timing:"12:00 PM-6:00 PM",
      hours:"6hrs/day",
    },
    {
      name:"Dr.Manoj verma",
      department:"Dental",
      days:"Monday-Saturday",
      timing:"9:00 AM-3:00 PM",
      hours:"6hrs/day",
    },
    {
      name: "Dr. Karthik Menon",
      department: "General Surgery",
      days: "Monday - Saturday",
      timing: "8:30 AM - 2:30 PM",
      hours: "6 hrs/day",
    },
    {
      name: "Dr. Kavya Iyer",
      department: "Ophthalmology",
      days: "Monday - Friday",
      timing: "9:00 AM - 2:00 PM",
      hours: "5 hrs/day",
    },
    {
      name: "Dr. Rohan Pillai",
      department: "Radiology",
      days: "Tuesday - Saturday",
      timing: "8:00 AM - 2:00 PM",
      hours: "6 hrs/day",
    },
    {
      name: "Dr. Nisha Thomas",
      department: "Oncology",
      days: "Monday - Friday",
      timing: "10:00 AM - 4:00 PM",
      hours: "6 hrs/day",
    },
    {
      name: "Dr. Aditya Verma",
      department: "Urology",
      days: "Wednesday - Sunday",
      timing: "9:00 AM - 3:00 PM",
      hours: "6 hrs/day",
    },

  ];

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
      <img className='hok' src={hos}/>
      <h1 className='takp'>Hospital</h1>
      <img className='ha' src={ha}/>
      <p className='doc1'>The administration and coordination of hospital operations to ensure efficient<br/>
       healthcare delivery and patient care.</p>
        <div className='gg'></div>
      <h1 className="doc28k" to ="/home">Learn more</h1>
          <h1 className='dap'>Department</h1>
            <div className='gg1'></div>
            <h4 className='kk0'>(heart and blood vessels)</h4>
            <h1 className='diom'>cardiology</h1>
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
         disorders of the brain, spinal cord, <br/>and nervous system.</p>
        <div className='gg3'></div>
         <h1 className='pedics'>orthopedics</h1>
         <h4 className='kk2'>(bones, joints, muscles)</h4>
         <img className='ortho' src={ortho}/>
         <p className='dis0'>Orthopedics is the branch of medicine that focuses<br/>
          on the diagnosis, <br/>
         treatment, and prevention of disorders of the bones, joints, <br/>
         muscles, ligaments, <br/>
         and tendons.
         It helps manage conditions such as fractures,<br/>
         arthritis, back pain,<br/>
         and sports injuries.</p>
         <div className='gg4'></div>
         <h1 className='cian'>pediatrician</h1>
        <h4 className='kk3'>(children’s health)</h4>
        <img className='pedia' src={pedia}/>
        <p className='who'>A pediatrician is a medical doctor<br/> who specializes in the health and medical<br/>
          care of infants, children, and adolescents.<br/>
          They monitor growth, development,<br/>
 and provide preventivecare like vaccinations.</p>
 <div className='gg5'></div>
 <h1 className='der'>Dermatology</h1>
 <h4 className='kk4'>(skin, hair, nails)</h4>
    <img className='der1' src={der}/>
 <p className='mat'>Dermatology is the branch of medicine<br/> that focuses on diagnosing<br/>
  and treating conditions related <br/>to the skin, hair, and nails.<br/>
It covers a wide range of issues,<br/> including acne, eczema,<br/>
 psoriasis, infections, and skin cancers.</p>
 <div className='gg6'></div>
 <h1 className='nep'>Nephrology</h1>
 <h4 className='kk5'>(kidneys)</h4>
 <img className='kid' src={kid}/>
 <p className='kid1'>Nephrology is the medical specialty concerned<br/> with the
  diagnosis and treatment<br/>
  of kidney-related diseases.
It deals with conditions<br/>
such as chronic kidney disease,<br/>
 kidney stones, high blood pressure,<br/> and electrolyte imbalances.</p> 
  <video autoPlay loop muted  width='80%' style={{margin:"8vw"}}><source src={patient} type='video/mp4' className='kol'/></video>
  <h1 className='sche'>Doctor schedule</h1>
  <div className='schedule-con'>
   <table className="schedule-table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Department</th>
            <th>Days</th>
            <th>Timing</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d, index) => (
            <tr key={index}>
              <td>{d.name}</td>
              <td>{d.department}</td>
              <td>{d.days}</td>
              <td>{d.timing}</td>
              <td>{d.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <h1 className='spi'>Hospital</h1>
    <img className='spi0' src={hos}/>
    <div className='spi1'></div>
    <h1 className='pol'>Contact us</h1>
    <p className='pol0'>📞 Phone: +91 98765 43210</p>
    <p className='pol1'>📧 Email: support@hospital.com</p>
    <p className='pol2'>📍 Address: 123, Anna Nagar, Chennai</p>
    <img className='rto' src={face}/>
    <img className='rto0' src={insta}/>
    <img className='rto1' src={goo}/>
    <h1 className='xol'>Join us</h1>
    <label className='xol0'>Email:</label>
    <input type='email'value={email}onChange={(e) => setEmail(e.target.value)}className='xol1'/>
    <button className='tok0' onClick={submitEmail}>Submit</button>
    <h2 className='dod'>Department</h2>
    <h2 className='dod0'>Days</h2>
    <h2 className='dod1'>Timing</h2>
    <p className='uuu'>General OPD</p>
    <p className='uuu0'>Monday-Saturday</p>
    <p className='uuu1'>8:00 AM – 8:00 PM</p>
    <p className='zzz'>Emergency</p>
    <p className='zz0'>All Days</p>
    <p className='zz1'>24 * 7</p>
    <p className='nom'>Pharmacy</p>
    <p className='nom0'>Monday-Sunday</p>
    <p className='nom1'>7:00 AM – 10:00 PM</p>
    <p className='uko'>Lab & Scan</p>
    <p className='uko0'>Monday–Saturday</p>
    <p className='uko1'>8:00 AM – 6:00 PM</p>
   </div>
  )
}
