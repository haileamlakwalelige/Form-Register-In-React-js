import React,{useState} from 'react';
import './App.css';

function App() {
  const [submitted, setSubmitted]=useState(false);
  const [valid, setValid]=useState(false);
  const [value, setValue]=useState({
    firstName:"",
    lastName:"",
    email:"",
  });
  const submitHandler =(e)=>{
    e.preventDefault();
    setSubmitted(true);
    if(value.firstName && value.lastName && value.email){
      setValid(true);
    }
    
  }
  const handleFirstName =(e)=>{
    setValue({...value, firstName:e.target.value})
  }
  const handleLastName =(e)=>{
    setValue({...value, lastName:e.target.value})
  }
  const handleEmail =(e)=>{
    setValue({...value, email:e.target.value})
  }
  return (
    <div className="App">
   <form onSubmit={submitHandler}>
   {submitted && valid ?    (<div className="success-message">Successful! Thank you</div>) : (null)
}
   <input type="text"
   value={value.firstName}
   placeholder="first Name"
   className='one'
   name="firstName"
   onChange={handleFirstName}
   />
      {submitted && !value.firstName ?  <span>Please enter the valid First Name</span> : null }
   <input type="text"
   value={value.lastName}
   placeholder="Last Name"
   className="two"
   name="lastName"
   onChange={handleLastName}
   />
      {submitted && !value.lastName ?  <span>Please enter the valid Last Name</span> : null }
   <input type="email"
   value={value.email}
   placeholder="Email"
   className="three"
   email="email"
   onChange={handleEmail}
   />
      {submitted && !value.email ?  <span>Please enter the valid Email</span> : null }
   <button type="submit" value="submit" >
   Register 
   </button>
   </form>
    </div>
  );
}

export default App;
