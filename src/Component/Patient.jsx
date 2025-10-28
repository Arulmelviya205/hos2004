import React, { useEffect, useState } from 'react'
import '../Styles/Patient.css'
import hos from '../assets/images/hos.jpg'
import patho from '../assets/images/patho.jpg'
import varma from '../assets/images/varma.jpg'
import ana from '../assets/images/ana.jpg'
import nano from '../assets/images/nano.jpg'
import uro from '../assets/images/uro.jpg'
import cardio from '../assets/images/cardio.jpg'
import radio from '../assets/images/radio.jpg'
import gyna from '../assets/images/gyna.jpg'
import nep from '../assets/images/nep.jpg'
import onco from '../assets/images/onco.jpg'
import ctvs from '../assets/images/ctvs.jpg'
import sree from '../assets/images/sree.jpg'
import man from '../assets/images/man.jpg'
import nam from '../assets/images/nam.jpg'
import gir from '../assets/images/gir.jpg'
import gen from '../assets/images/gen.jpg'
import boy from '../assets/images/boy.jpg'
import ema from '../assets/images/ema.jpg'
import num from '../assets/images/num.jpg'
import pro from '../assets/images/pro.jpg'
import add from '../assets/images/add.jpg'
import gro from '../assets/images/gro.jpg'
import path from '../assets/images/path.jpg'
import tial from '../assets/images/tial.jpg'
import nam0 from '../assets/images/nam0.jpg'
import qq from '../assets/images/qq.jpg'
import ss from '../assets/images/ss.jpg'
import gg from '../assets/images/gg.jpg'
import ob from '../assets/images/ob.jpg'
import ma from '../assets/images/ma.jpg'
import mb from '../assets/images/mb.jpg'
import em from '../assets/images/em.jpg'
import ress from '../assets/images/ress.jpg'
import up from '../assets/images/up.jpg'
import tt from '../assets/images/tt.jpg'
import face from '../assets/images/face.jpg'
import insta from '../assets/images/insta.jpg'
import goo from '../assets/images/goo.jpg'
import axios from 'axios'
export default function Patient() {
    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[gender,setGender]=useState('');
    const[dob,setDoB]=useState('');
    const[email,setEmail]=useState('');
    const[number,setNumber]=useState('');
    const[problem,setProblem]=useState('');
    const[address,setAddress]=useState('');
    const[blood,setBlood]=useState('');
    const[check,setCheck]=useState(false);
     const [TotalData, setTotalData] = useState([]);
    const PostData=async() =>{
      try{
      await axios.post(`https://68c8ec4eceef5a150f62b5f6.mockapi.io/index1/`,{
        id:id,
        name:name,
        age:age,
        gender:gender,
        dob:dob,
        email:email,
        number:number,
        problem:problem,
        address:address,
        blood:blood,
        check:check
     });
     GetData();
      }
   catch(error){
       console.log("failed to create data:",error.message);
       alert("submitted successfully:");
    }
  }
  const GetData= async()=>{
    try{
      const response=await axios.get(`https://68c8ec4eceef5a150f62b5f6.mockapi.io/index1/`);
      setTotalData(response.data);
    }
    catch(error){
      console.log("failed to get data:",error.message);
      alert("failed to get data:");
    }
    useEffect(()=>{
      GetData();
    },[]);
  }
  const[updateid,setupdateId]=useState('');
  const[updatename,setupdateName]=useState('');
  const[updateage,setupdateAge]=useState('');
  const[updategender,setupdateGender]=useState('');
  const[updatedob,setupdateDoB]=useState('');
  const[updateemail,setupdateEmail]=useState('');
  const[updatenumber,setupdateNumber]=useState('');
  const[updateproblem,setupdateProblem]=useState('');
  const[updateaddress,setupdateAddress]=useState('');
  const[updateblood,setupdateBlood]=useState('');
  const[updatestatus,setupdateStatus]=useState(false);
  const updateuser = async(id)=>{
    try{
      await axios.put(`https://68c8ec4eceef5a150f62b5f6.mockapi.io/index1/${id}`,{
         id:updateid,
         name:updatename,
         age:updateage,
         gender:updategender,
         dob:updatedob,
         email:updateemail,
         number:updatenumber,
         problem:updateproblem,
         address:updateaddress,
         blood:updateblood,
         check:updatestatus
      });
      GetData();
    }
    catch(error){
      console.log("failed to update data:",error.message);
      alert("failed to update data:");
    }
  }
    const deleteuser = async(id)=>{
          try{
       await axios.delete(`https://68c8ec4eceef5a150f62b5f6.mockapi.io/index1/${id}`);
        GetData();
          }
           catch(error){
          console.error("Failed to Delete  data:",error.message);
          alert("failed to Delete data:");
      }
     }
       

      const [Email, setemail] = useState("");
     
       const submitEmail = () => {
         if (email === "") {
           alert("Please enter an email.");
         } else if (!email.includes("@") || !email.includes(".")) {
           alert("Please enter a valid email address.");
         } else {
           alert("Submitted Successfully");
           setEmail(""); 
         }
       }
  return (
    <div>
       <img className='ho11' src={hos}/>
      <h1 className='ta11'>Hospital</h1>
    <img className='cck'src={tial}/>
    <p className='apy'>A patient is an individual who receives medical care or treatment from healthcare professionals.<br/>
     They may visit a hospital or clinic for diagnosis, therapy, or regular checkups.</p>
     <p className='apy0'>A patient is a person receiving medical care or treatment from doctors or healthcare staff.<br/>
    They may visit hospitals or clinics for checkups, diagnosis, or recovery support.</p>
      <h1 className='doctor'>Doctor List</h1>
      <div className='hh0'></div>
      <img className="patho" src={patho}/>
      <h1 className='raja'>Dr. Rajavigneshwari N</h1>
      <h4 className='raja1'>Specialist:Pathologist</h4>
      <div className='hh1'></div>
      <img className='varma' src={varma}/>
      <h1 className='varmak'>Dr. (Prof.) Amitaabh Varma</h1>
      <h4 className='varma1'>Specialist:Neurology</h4>
      <div className='hh2'></div>
      <img className='ana' src={ana}/>
      <h1 className='anam'>Dr. Anita Kulkarni</h1>
      <h4 className='anal'>Specialist:Anaesthesiology</h4>
      <div className='hh3'></div>
      <img className='nanl' src={nano}/>
     <h1 className='nanoj'>Dr. Rashi Gupta</h1>
     <h4 className='nanoi'>Specialist:Neonatology</h4>
     <div className='hh4'></div>
      <img className='uro' src={uro}/>
     <h1 className='urop'>Dr. Surendra Kumar Nindra</h1>
      <h4 className='urow'>Specialist:Urology</h4>
      <div className='hh5'></div>
      <img className='cardio' src={cardio}/>
      <h1 className='cardioa'>Dr. Deepak Natarajan</h1>
      <h4 className='cardioq'>Specialist:cardiology</h4>
      <div className='hh6'></div>
      <img className='radio' src={radio}/>
      <h1 className='radiod'>Dr. Ravi Kumar Saman</h1>
      <h4 className='radion'>Specialist:Radiologist</h4>
      <div className='hh7'></div>
      <img className='gyna' src={gyna}/>
      <h1 className='gynal'>Dr. Manisha Uddey</h1>
      <h4 className='gynab'>Specialist:Gynaecology</h4>
      <div className='hh8'></div>
      <img className='nep1' src={nep}/>
      <h1 className='neph'>Dr. Shivangini Gupta</h1>
      <h4 className='nep2'>Specialist:Pediatric Nephrology</h4>
      <div className='hh9'></div>
      <img className='onco' src={onco}/>
      <h1 className='oncoo'>Dr. P. Karunakar Reddy</h1>
      <h4 className='onco1'>Specialist:Surgical Oncologist</h4>
      <div className='hh10'></div>
      <img className='ctvs' src={ctvs}/>
      <h1 className='ctvs0'>Dr. Ankush Singh Kotwal</h1>
      <h4 className='ctvs1'>Specialist:CTVS Surgeon</h4>
      <div className='hh11'></div>
      <img className='sree' src={sree}/>
      <h1 className='sree0'>Dr. K. Siva Sree</h1>
      <h4 className='sree1'>Specialist:Medical Oncologist</h4>
      <div className='mm'></div>
      <h1 className='details'>Patient Details</h1>
      <img className='nn0' src={man}/>
      <img className='nam0' src={nam}/>
      <img className='age0' src={gir}/>
      <img className='gen0' src={gen}/>
      <img className='dob0' src={boy}/>
      <img className='ema0' src={ema}/>
      <img className='num0' src={num}/>
      <img className='pro0' src={pro}/>
      <img className='add0' src={add}/>
      <img className='gro0' src={gro}/>
      <img className='path' src={path}/>
       <label className='nn'>patient ID:</label><br/>
      <input type='text' onChange={event=>{setId(event.target.value)}} className='nn1'/><br/>
      <label className='nam'>Name:</label><br/>
       <input type='text' onChange={event=>{setName(event.target.value)}} className='nam1'/><br/>
      <label className='age'>Age:</label><br/>
       <input type='text' onChange={event=>{setAge(event.target.value)}} className='age1'/><br/>
       <label className='gen'>Gender:</label><br/>
        <input type='text' onChange={event=>{setGender(event.target.value)}} className='gen1'/><br/>
        <label className='dob'>DOB:</label><br/>
         <input type='text' onChange={event=>{setDoB(event.target.value)}} className='dob1'/><br/>
         <label className='ema'>email:</label><br/>
          <input type='text' onChange={event=>{setEmail(event.target.value)}} className='ema1'/><br/>
          <label className='num'>Number:</label><br/>
           <input type='text' onChange={event=>{setNumber(event.target.value)}} className='num1'/><br/>
           <label className='pro'>Problem:</label><br/>
          <input type='text' onChange={event=>{setProblem(event.target.value)}} className='pro1'/><br/>
            <label className='add'>Address:</label><br/>
             <input type='text' onChange={event=>{setAddress(event.target.value)}} className='add1'/><br/>
             <label className='gro'>Blood group:</label><br/>
             <input type='text' onChange={event=>{setBlood(event.target.value)}} className='gro1'/><br/>
             <input type='checkbox' onChange={(event)=>setCheck(event.target.checked)} className='chec'/>
               <button className='sub' onClick={PostData}>submit</button> 
                
              <h1 className='data'>Read data</h1>
             <table>
             <tr>
              <td>ID</td>
              <td>name</td>
              <td>age</td>
              <td>gender</td>
              <td>DOB</td>
              <td>email</td>
              <td>number</td>
              <td>problem</td>
              <td>address</td>
              <td>blood group</td>
              <td>status</td>
              <td>update</td>
              <td>delete</td>
             </tr>
             {TotalData.map(item=>(
              <tr key={item.id}>
                <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.problem}</td>
              <td>{item.address}</td>
              <td>{item.blood}</td>
              <td><input type='checkbox' checked={item.check}/></td>
              <td><button onClick={()=>updateuser(item.id)}>update</button></td>
              <td><button onClick={()=>deleteuser(item.id)}>delete</button></td>

              </tr>

             ))}
             </table>
             <h1 className='da'>Update data</h1>
              <div className='ss'></div>
             <label className='rr'> Patient ID:</label>
             <input type='text' onChange={event=>{setupdateId(event.target.value)}} className='rr0'/><br/>
      <label className='qq'>Name:</label><br/>
       <input type='text' onChange={event=>{setupdateName(event.target.value)}} className='qq0'/><br/>
      <label className='ssk'>Age:</label><br/>
       <input type='text' onChange={event=>{setupdateAge(event.target.value)}} className='ss0'/><br/>
       <label className='ggm'>Gender:</label><br/>
        <input type='text' onChange={event=>{setupdateGender(event.target.value)}} className='ggn'/><br/>
        <label className='ob'>DOB:</label><br/>
         <input type='text' onChange={event=>{setupdateDoB(event.target.value)}} className='ob1'/><br/>
         <label className='ma'>email:</label><br/>
          <input type='text' onChange={event=>{setupdateEmail(event.target.value)}} className='ma1'/><br/>
          <label className='mb'>Number:</label><br/>
           <input type='text' onChange={event=>{setupdateNumber(event.target.value)}} className='mb1'/><br/>
           <label className='em'>Problem:</label><br/>
            <input type='text' onChange={event=>{setupdateProblem(event.target.value)}} className='em1'/><br/>
            <label className='ress'>Address:</label><br/>
             <input type='text' onChange={event=>{setupdateAddress(event.target.value)}} className='ress1'/><br/>
             <label className='up'>Blood group:</label><br/>
             <input type='text' onChange={event=>{setupdateBlood(event.target.value)}} className='up1'/><br/>
             <input type='checkbox' onChange={(event)=>setupdateStatus(event.target.checked)} className='ox'/>
          <img className='rr1' src={nam0}/>
          <img className='qq1' src={qq}/>
          <img className='ss1' src={ss}/>
          <img className='ggl' src={gg}/>
          <img className='ob0' src={ob}/>
          <img className='ma0' src={ma}/>
          <img className='mb0' src={mb}/>
          <img className='em0' src={em}/>
          <img className='ress0'src={ress}/>
          <img  className='up0' src={up}/>
          <img className='tt' src={tt}/>
           <h1 className='pi0k'>Hospital</h1>
             <img className='img01' src={hos}/>
          <div className='ii'></div>
             <h1 className='ont'>Contact us</h1>
              <p className='ont0'>📞 Phone: +91 98765 43210</p>
              <p className='ont1'>📧 Email: support@hospital.com</p>
                <p className='ont2'>📍 Address: 123, Anna Nagar, Chennai</p>
                <img className='ace' src={face}/>
                <img className='nsta' src={insta}/>
                <img className='gok' src={goo}/>
                <h1 className='in'>Join us</h1>
                <label className='in0'>Email:</label>
                <input type='email'value={Email}
                  onChange={(e) => setemail(e.target.value)}
                  className='in1'/>
                <button className='to' onClick={submitEmail}>Submit</button>
                <h2 className='ay'>Department</h2>
                <h2 className='ay0'>Days</h2>
                <h2 className='ay1'>Timing</h2>
                <p className='ral'>General OPD</p>
                <p className='ral0'>Monday-Saturday</p>
                <p className='ral1'>8:00 AM – 8:00 PM</p>
                <p className='cy'>Emergency</p>
                <p className='cy0'>All Days</p>
                <p className='cy1'>24 * 7</p>
                <p className='ar'>Pharmacy</p>
                <p className='ar0'>Monday-Sunday</p>
                <p className='ar1'>7:00 AM – 10:00 PM</p>
                <p className='an'>Lab & Scan</p>
                <p className='an0'>Monday–Saturday</p>
                <p className='an1'>8:00 AM – 6:00 PM</p>
    </div>
  )
}
