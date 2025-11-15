import React, { useState } from 'react'
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaMoneyBill, FaPhoneAlt, FaSignInAlt, FaUserInjured } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <div>
    <nav className="navbar">
        

        {/* Laptop Menu */}
        <ul className="nav-links">
          <li><Link className='home' to="/home"><FaHome/>Home</Link></li>
          <li><Link className='about' to="/about"><FaInfoCircle/>About</Link></li>
          <li><Link className='contact' to="/contact"><FaPhoneAlt/>Contact Us</Link></li>
          <li><Link className='patient' to="/patient"><FaUserInjured/>Patient</Link></li>
          <li><Link className='billing' to="/billing"><FaMoneyBill/>Billing</Link></li>
          <li><Link className='login' to="/login"><FaSignInAlt/>Login</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
    </nav>
      {/* Sidebar for Mobile */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* ❌ Close Button */}
        <div className="close-btn" onClick={() => setOpen(false)}>
          ×
        </div>
        <ul className='mobile-menu'>
          <li><Link to="/home" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
          <li><Link to="/patient" onClick={() => setOpen(false)}>Patient</Link></li>
          <li><Link to="/billing" onClick={() => setOpen(false)}>Billing</Link></li>
          <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
        </ul>
          

  </div>
  
   </div>
  
  )
}
