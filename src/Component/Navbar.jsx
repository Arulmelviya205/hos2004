import React, { useState } from 'react'
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import home from '../assets/images/home.jpg';
import about from '../assets/images/about.jpg';
import us from '../assets/images/us.jpg';
import patient from '../assets/images/patient.jpg';
import bill from '../assets/images/bill.jpg';
import login  from '../assets/images/login.jpg';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [open, setOpen] =useState(false);
  return (
   
     <nav className='navbar'>
       <div className="nav-header">
       <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
           
           <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li className='home'><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li className='about'><Link to="/About" onClick={() => setOpen(false)}>About</Link></li>
        <li className='contact'><Link to="/Contactus" onClick={() => setOpen(false)}>Contact Us</Link></li>
        <li className='patient'><Link to="/Patient" onClick={() => setOpen(false)}>Patient</Link></li>
        <li className='bill'><Link to="/Billing" onClick={() => setOpen(false)}>Billing</Link></li>
        <li className='login'><Link to="/Login" onClick={() => setOpen(false)}>Login</Link></li>
      </ul> 
          
        <img  className="img"src={home}/>
        <img className='img1' src={about}/>
        <img className='img2' src={us}/>
        <img className='img3' src={patient}/>
        <img className='img4' src={bill}/>
        <img className='img5' src={login}/>
       
            
      </nav>
        
   
  )
    
}
