import React from 'react'
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import home from '../assets/images/home.jpg';
import about from '../assets/images/about.jpg';
import us from '../assets/images/us.jpg';
import patient from '../assets/images/patient.jpg';
import bill from '../assets/images/bill.jpg';
import login  from '../assets/images/login.jpg';
export default function Navbar() {
 
  return (
    <div>
      
     <nav>
      
        <div className='demo'>
            <li className='home'><Link to="/"><h2>Home</h2></Link></li>
            <li className='about'><Link to="/About"><h2>About</h2></Link></li>
            <li className='contact'><Link to="/Contactus"><h2>Contact us</h2></Link></li>
            <li className='patient'><Link to="/Patient"><h2>Patient</h2></Link></li>
            <li className='bill'><Link to="/Billing"><h2>Billing</h2></Link></li>
            <li className='login'><Link to="/Login"><h2>Login</h2></Link></li>
         
           
        <img  className="img"src={home}/>
        <img className='img1' src={about}/>
        <img className='img2' src={us}/>
        <img className='img3' src={patient}/>
        <img className='img4' src={bill}/>
        <img className='img5' src={login}/>
        </div>
            
      </nav>
        
    </div>
  )
    
}
