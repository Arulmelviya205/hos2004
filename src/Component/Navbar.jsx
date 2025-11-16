import React, { useState } from 'react'
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaMoneyBill, FaPhoneAlt, FaSignInAlt, FaUserInjured } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <div>
            {/* Mobile Menu Button */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
    <nav className="navbar">
        

        {/* Laptop Menu */}
        <ul className="nav-link">
          <li><Link className='home' to="/"><FaHome/>Home</Link></li>
          <li><Link className='about' to="/about"><FaInfoCircle/>About</Link></li>
          <li><Link className='contact' to="/contact"><FaPhoneAlt/>Contact Us</Link></li>
          <li><Link className='patient' to="/patient"><FaUserInjured/>Patient</Link></li>
          <li><Link className='billing' to="/billing"><FaMoneyBill/>Billing</Link></li>
          <li><Link className='login' to="/login"><FaSignInAlt/>Login</Link></li>
        </ul>


    </nav>
      {/* Sidebar for Mobile */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* ❌ Close Button */}
        <div className="close-btn" onClick={() => setOpen(false)}>
          ×
        </div>
        <ul className='mobile-menu'>
          <li><Link className='home1' to="/" onClick={() => setOpen(false)}><FaHome/>Home</Link></li>
          <li><Link className='about1' to="/about" onClick={() => setOpen(false)}><FaInfoCircle/>About</Link></li>
          <li><Link className='contact1' to="/contact" onClick={() => setOpen(false)}><FaPhoneAlt/>Contact Us</Link></li>
          <li><Link className='patient1' to="/patient" onClick={() => setOpen(false)}><FaUserInjured/>Patient</Link></li>
          <li><Link className='billing1' to="/billing" onClick={() => setOpen(false)}><FaMoneyBill/>Billing</Link></li>
          <li><Link className='login1' to="/login" onClick={() => setOpen(false)}><FaSignInAlt/>Login</Link></li>
        </ul>
          

  </div>
  
   </div>
  
  )
}
