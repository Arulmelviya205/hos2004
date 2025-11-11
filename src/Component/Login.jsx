import React, { useState } from 'react'
import '../Styles/Login.css'
import qq from '../assets/images/qq.jpg'
import hos from '../assets/images/hos.jpg'
import login0 from '../assets/images/login0.jpg'
import ma from '../assets/images/ma.jpg'
import pass from '../assets/images/pass.jpg'
import face from '../assets/images/face.jpg'
import insta from '../assets/images/insta.jpg'
import goo from '../assets/images/goo.jpg'
import emailjs from 'emailjs-com';

 export default function Login(){
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {
      form_name: formData.name,
      form_email: formData.email,
      message: formData.message,
      username:formData.name,
    };

    emailjs
      .send(
        "service_wue1pqf", // Replace with your EmailJS service ID
        "template_4hoz438", // Replace with your EmailJS template ID
        params,
        "zlh6YHfECaW1NmnbX" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

 
     const [Email, setemail] = useState("");
          
            const submitEmail = () => {
              if (Email === "") {
                alert("Please enter an email.");
              } else if (!Email.includes("@") || !Email.includes(".")) {
                alert("Please enter a valid email address.");
              } else {
                alert("Submitted Successfully");
                setemail(""); 
              }
            }
  return (
    <div>
      <h1 className='pit'>Hospital</h1>
      <img className='pit0' src={hos}/>
      <div className='dddk'></div>
      <img className='login0' src={login0}/>
      <img className='namk' src={qq}/>
      <img className='mai1' src={ma}/>
      <img className='ord1' src={pass}/>
       <h1 className='gin'>login</h1>

        <form onSubmit={handleSubmit}>
      <label className='bel'>Name:</label>
      <input type='text' name="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} className='bel0' required/>
      <label className='mai'>Email:</label>
      <input type='email'  name="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}className='mai0' required/>
      <label className='ord'>send message:</label>
      <textarea name="message" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} className='ord0' required></textarea>
      <button type='submit' className='mit'>send</button>
      
      </form>
      <div className='kn'></div>
      <img className='fac' src={face}/>
      <div className='kn0'></div>
      <img className='ita' src={insta}/> 
      <div className='kn1'></div>
      <img className='goh' src={goo}/>
      <h1 className='pi0kk'>Hospital</h1>
      <img className='img01j' src={hos}/>
      <div className='iik'></div>
      <h1 className='nai'>Contact us</h1>
      <p className='nai0'>📞 Phone: +91 98765 43210</p>
      <p className='nai1'>📧 Email: support@hospital.com</p>
      <p className='nai2'>📍 Address: 123, Anna Nagar, Chennai</p>
      <img className='al' src={face}/>
      <img className='al0' src={insta}/>
      <img className='al1' src={goo}/>
       <h1 className='kil'>Join us</h1>
      <label className='kil0'>Email:</label>
      <input type='email'value={Email}onChange={(e) => setemail(e.target.value)}className='kil1'/>
      <button className='tok' onClick={submitEmail}>Submit</button>
      <h2 className='jk'>Department</h2>
      <h2 className='jk0'>Days</h2>
      <h2 className='jk1'>Timing</h2>
      <p className='ok'>General OPD</p>
      <p className='ok0'>Monday-Saturday</p>
      <p className='ok1'>8:00 AM – 8:00 PM</p>
      <p className='pk'>Emergency</p>
      <p className='pk0'>All Days</p>
      <p className='pk1'>24 * 7</p>
      <p className='pok'>Pharmacy</p>
      <p className='pok0'>Monday-Sunday</p>
      <p className='pok1'>7:00 AM – 10:00 PM</p>
      <p className='ank'>Lab & Scan</p>
      <p className='ank0'>Monday–Saturday</p>
      <p className='ank1'>8:00 AM – 6:00 PM</p>
    </div>
  )
}

