import React from 'react'
import '../Styles/Billing.css'
import hos from '../assets/images/hos.jpg'
import ture from '../assets/videos/ture.mp4'
export default function Billing() {
  return (
    <div>
      <h1 className='kolpk'>Hospital</h1>
      <img className='kolp0k' src={hos}/>
      <video autoPlay loop muted  width='90%' style={{margin:"5vw"}}><source src={ture} type='video/mp4' className='kol'/></video>
      <div className='ser1'>
  <h2 className='ser'>Hospital Services & Charges</h2>
  <table className="ser0">
    <thead> 
      <tr>
        <th>Service ID</th>
        <th>Service Name</th>
        <th>Department</th>
        <th>Charge (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>General Consultation</td>
        <td>General Medicine</td>
        <td>500</td>
      </tr>
      <tr>
        <td>002</td>
        <td>Blood Test (Full Panel)</td>
        <td>Pathology</td>
        <td>800</td>
      </tr>
      <tr>
        <td>003</td>
        <td>X-Ray (Chest)</td>
        <td>Radiology</td>
        <td>600</td>
      </tr>
      <tr>
        <td>004</td>
        <td>ECG</td>
        <td>Cardiology</td>
        <td>700</td>
      </tr>
      <tr>
        <td>005</td>
        <td>Ultrasound Scan</td>
        <td>Radiology</td>
        <td>1200</td>
      </tr>
      <tr>
        <td>006</td>
        <td>CT Scan</td>
        <td>Radiology</td>
        <td>3500</td>
      </tr>
      <tr>
        <td>007</td>
        <td>Physiotherapy Session</td>
        <td>Orthopedics</td>
        <td>900</td>
      </tr>
      <tr>
        <td>008</td>
        <td>Vaccination (Full Dose)</td>
        <td>Pediatrics</td>
        <td>1500</td>
      </tr>
      <tr>
        <td>009</td>
        <td>Dermatology Checkup</td>
        <td>Skin Care</td>
        <td>600</td>
      </tr>
      <tr>
        <td>010</td>
        <td>Emergency Admission</td>
        <td>Emergency Ward</td>
        <td>2500</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}
