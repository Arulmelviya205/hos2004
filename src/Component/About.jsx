import React from 'react'
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

    


    
  return (
    <div>
      <img className='ho' src={hos}/>
      <h1 className='ta'>Hospital</h1>
      <img className='ha' src={ha}/>
      <p className='doc1'>The administration and coordination of hospital operations to ensure efficient<br/>
       healthcare delivery and patient care.</p>
        <div className='gg'></div>
      <h1 className="doc28" to="/home">Learn more</h1>
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
        <p className='who'>A pediatrician is a medical doctor who specializes in the<br/> health and medical<br/>
          care of infants, children, and adolescents.<br/>
          They monitor growth, development,
 and provide preventive<br/> care like vaccinations.</p>
 <div className='gg5'></div>
 <h1 className='der'>Dermatology</h1>
 <h4 className='kk4'>(skin, hair, nails)</h4>
    <img className='der1' src={der}/>
 <p className='mat'>Dermatology is the branch of medicine that focuses<br/> on diagnosing<br/>
  and treating conditions related to the skin, hair, and nails.<br/>
It covers a wide range of issues, including acne, eczema,<br/>
 psoriasis, infections, and skin cancers.</p>
 <div className='gg6'></div>
 <h1 className='nep'>Nephrology</h1>
 <h4 className='kk5'>(kidneys)</h4>
 <img className='kid' src={kid}/>
 <p className='kid1'>Nephrology is the medical specialty concerned with the<br/>
  diagnosis and treatment<br/>
  of kidney-related diseases.
It deals with conditions <br/>
such as chronic kidney disease,<br/>
 kidney stones, high blood pressure,<br/> and electrolyte imbalances.</p> 
  <video autoPlay loop muted  width='90%' style={{margin:"5vw"}}><source src={patient} type='video/mp4' className='kol'/></video>
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
   </div>
  )
}
