import React, { useState } from 'react'
import '../Styles/Billing.css'
import hos from '../assets/images/hos.jpg'
import ture from '../assets/videos/ture.mp4'
import face from '../assets/images/face.jpg'
import insta from '../assets/images/insta.jpg'
import goo from '../assets/images/goo.jpg'
export default function Billing() {
  const [patient, setPatient] = useState({
    name: "",
    id: "",
    doctor: "",
    admission: "",
    discharge: "",
  });

  const [services, setServices] = useState([
    { description: "", quantity: 1, unitPrice: 0 },
  ]);
const [verifiedBy, setVerifiedBy] = useState("");
  // handle input changes
  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const addService = () => {
    setServices([...services, { description: "", quantity: 1, unitPrice: 0 }]);
  };

  const subtotal = services.reduce(
    (acc, s) => acc + s.quantity * s.unitPrice,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
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
      <h1 className='kolpk'>Hospital</h1>
      <img className='kolp0k' src={hos}/>
      <video autoPlay loop muted  width='90%' className='kol'><source src={ture} type='video/mp4' /></video>
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
   <h1 className='con'>Bill Charge</h1>
 <div className="bill-container">
     <div className="patient-details">
        <h3>Patient Details</h3>
        <div className="input-grid">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={patient.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="id"
            placeholder="Patient ID"
            value={patient.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="doctor"
            placeholder="Doctor Name"
            value={patient.doctor}
            onChange={handleChange}
          />
          <input
            type="date"
            name="admission"
            placeholder="Admission Date"
            value={patient.admission}
            onChange={handleChange}
          />
          <input
            type="date"
            name="discharge"
            placeholder="Discharge Date"
            value={patient.discharge}
            onChange={handleChange}
          />
        </div>
      </div>

      <h3 className="table-title">Services / Charges</h3>
      <table className="bill-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Unit Price (₹)</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  placeholder="Service Name"
                  value={item.description}
                  onChange={(e) =>
                    handleServiceChange(index, "description", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleServiceChange(index, "quantity", Number(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={item.unitPrice}
                  onChange={(e) =>
                    handleServiceChange(index, "unitPrice", Number(e.target.value))
                  }
                />
              </td>
              <td>{item.quantity * item.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-btn" onClick={addService}>
        ➕ Add Service
      </button>

      <div className="bill-summary">
        <p><strong>Subtotal:</strong> ₹{subtotal}</p>
        <p><strong>Tax (5%):</strong> ₹{tax}</p>
        <p><strong>Grand Total:</strong> ₹{total}</p>
      </div>
   <div className="verified-row">
        <label htmlFor="verifiedBy">Verified By (Admin / Accountant):</label>
        <input
          id="verifiedBy"
          type="text"
          placeholder="Enter staff name"
          value={verifiedBy}
          onChange={(e) => setVerifiedBy(e.target.value)}
        />
      </div>

      {/* Signature area */}
      <div className="signature-section">
        <div className="sig-box">
          <p className="sig-title">Verified By</p>
        <div className="sig-line">{verifiedBy || "_________________________"}</div>
          <p className="sig-sub">Name & Stamp</p>
        </div>

        <div className="sig-box">
          <p className="sig-title">Authorized Signature</p>
          <input type="text" className="sig-input" placeholder="Type authorized signature"/>
          <p className="sig-sub">Designation</p>
        </div>

        <div className="sig-box">
          <p className="sig-title">Patient Signature</p>
          <input type="text" className="sig-input" placeholder="Type patient name / sign"/>
          <p className="sig-sub">Patient / Guardian</p>
        </div>
      </div>
      <div className="bill-footer">
        <button onClick={() => window.print()}>🧾 Print Bill</button>
      </div>
      </div>
<p className="contact-desc">
          We’re here to help you 24/7. Please reach out to us for any inquiries,
          appointments, or emergency support.
        </p>
      <div className="contact-info">
          <p className='chenn'><strong>🏥 Address:</strong> City Hospital, Anna Nagar, Chennai</p>
          <p className='chenn0'><strong>📧 Email:</strong> cityhospital@gmail.com</p>
          <p className='chenn1'><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p className='chenn2'><strong>🕐 Working Hours:</strong> 24/7 Emergency Service</p>
        </div>
        <img className='rong' src={hos} alt='Hospital'/> 
        <h1 className='rong0'>Hospital</h1>
         <div className='ppp'></div>
         <h1 className='ong'>Contact us</h1>
        <p className='ong0'>📞 Phone: +91 98765 43210</p>
        <p className='ong1'>📧 Email: support@hospital.com</p>
        <p className='ong2'>📍 Address: 123, Anna Nagar, Chennai</p>
        <img className='pkl' src={face}/>
        <img className='pkl0' src={insta}/>
        <img className='pkl1'src={goo}/>
      <h1 className='inkk'>Join us</h1>
      <label className='inkk0'>Email:</label>
      <input type='email'value={Email} onChange={(e) => setemail(e.target.value)}className='inkk1'/>
      <button className='tookk' onClick={submitEmail}>Submit</button>
      <h2 className='yoyy'>Department</h2>
      <h2 className='yoyy0'>Days</h2>
      <h2 className='yoyy1'>Timing</h2>
      <p className='era'>General OPD</p>
      <p className='era0'>Monday-Saturday</p>
      <p className='era1'>8:00 AM – 8:00 PM</p>
      <p className='hi'>Emergency</p>
      <p className='hi0'>All Days</p>
      <p className='hi1'>24 * 7</p>
      <p className='macy'>Pharmacy</p>
      <p className='macy0'>Monday-Sunday</p>
      <p className='macy1'>7:00 AM – 10:00 PM</p>
      <p className='hkp'>Lab & Scan</p>
      <p className='hkp0'>Monday–Saturday</p>
      <p className='hkp1'>8:00 AM – 6:00 PM</p>
  </div>
  )
}
