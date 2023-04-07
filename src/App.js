import './App.css';
import { useState } from 'react';
import { toast } from 'react-toastify';


function App() {
  let [data,Setdata] =useState({FirstName:"",LastName:"",Email:"",Country:"",Street:"",Pin:"",comments:false,candidates:false,offers:false,mobilenotification:""})

  function handler(event){
    let {name,value,checked,type} = event.target;
    Setdata(()=>{
      return {
       ...data,[name]:type==="checkbox"?checked:value
      }
    })
  }

  function submithandler(event){
    event.preventDefault();
    toast.success("inputs submitted successfully")
    // we can now send data directly
    console.log(data);
  }
function resthandler(){
  Setdata({FirstName:"",LastName:"",Email:"",Country:"",Street:"",Pin:"",comments:false,candidates:false,offers:false,mobilenotification:""})
  toast.warn("inputs reset")
}
     
  return (
    <div className='container'>
      <form onSubmit={submithandler} onReset={resthandler}>
     <label htmlFor='FirstName'>First name</label>
     <input type='text' placeholder='Shakti' name="FirstName" id='FirstName' onChange={handler}        value={data.FirstName} required></input>

     <label htmlFor='LastName'>Last name</label>
     <input type='text' placeholder='Mandal' name="LastName" id='LastName' onChange={handler}          value={data.LastName} required></input>

     <label htmlFor='emailid'>Email address</label>
     <input type='email' placeholder='shakti045@gmail.com' name="Email" id='emailid' onChange={handler} value={data.Email} required></input>

      
      <label htmlFor='country'>Yor Country</label>
      <select id="country" name='Country' onChange={handler} value={data.Country} required>
        <option></option>
        <option value="India" >INDIA</option>
        <option value="China" >CHINA</option>
        <option value="America" >AMERICA</option>
        <option value="Australia" >AUSTRALIA</option>
      </select>

       <label htmlFor='Street'>Street Address</label>
       <textarea id='Street' rows={8} cols={3} onChange={handler} name='Street' value={data.Street} required></textarea>

       <label htmlFor='pincode'>Pincode</label>
       <input type='text' placeholder='756041' onChange={handler} name='Pin' value={data.Pin} required></input>
   
   <ul>
    <fieldset>
    <legend><h1>By MAil</h1></legend>
    <li>
    <input type='checkbox' name='comments' id='comments' value="Comments" onChange={handler}          checked={data.comments}></input>
    <label htmlFor='comments'>Coments</label>
    </li>

    <li>
    <input type='checkbox' name='candidates' id='candidates' value="Comments" onChange={handler}      checked={data.candidates}></input>
    <label htmlFor='candidates'>Candidates</label>
    </li>

    <li>
    <input type='checkbox' name='offers' id='offers' value="Comments" onChange={handler}             checked={data.offers}></input>
    <label htmlFor='offers'>Offers</label>
    </li>
    </fieldset>
   </ul>

   <ul>
    <fieldset>
   <legend><h1>By Mobile</h1></legend>
    <li>
      <input type='radio' id="Everything" name="mobilenotification" onChange={handler} value="Everything"  checked={data.mobilenotification==="Everything"}></input>
      <label htmlFor='Everything'>Everything</label>
    </li>

    <li>
      <input type='radio' id="same" name="mobilenotification" onChange={handler} value="Same AS Email" checked={data.mobilenotification==="Same AS Email"}></input>
      <label htmlFor='same'>Same AS Email</label>
    </li>

    <li>
      <input type='radio' id="nothing" name="mobilenotification" value="Don't Send Notification"    onChange={handler} checked={data.mobilenotification==="Don't Send Notification"}></input>
      <label htmlFor='nothing'>Don't Send Notification</label>
    </li>
    </fieldset>
   </ul>

   <div className='bn'>
    <button type='submit'>Submit</button>
    <button type='reset'>Reset </button>
    </div>
     </form>
    </div>
  );
}

export default App;
