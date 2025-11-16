import React from 'react'

import './Styles/App.css'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import ContactUs from './Component/Contactus'
import Patient from './Component/Patient'
import Billing from './Component/Billing'
import Login from './Component/Login'


function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/patient' element={<Patient/>}/>
      <Route path='/billing' element={<Billing/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
       
    </>
  )
}

export default App
