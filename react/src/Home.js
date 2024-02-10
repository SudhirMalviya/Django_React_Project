import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from './STUDENT-CONTAINER/stuSlice';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { adminlogin } from './ADMIN-CONTAINER/AdminSlice';


const Home = () => {
  const dispatch = useDispatch();
 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType,setUserType]=useState("");
  const [mydata,setMydata]=useState([]);

  
  

  const handleSubmit = (e) => {
    // if(userType=="student"){ 
    // e.preventDefault(); 
    // let url = `http://127.0.0.1:8000/student/?email=${email}&password=${password}`;
    // axios.get(url).then((res) => {
    //   console.log(res.data)
    //   if (res.data.email === email) {
    //     const userData = res.data.email;
    //     dispatch(login(userData));
    //     alert("Login successful");
    //     navigate('/dashboard');
    //   } else {
    //     alert("Invalid credentials");
    //   }
    // });
    if(userType === "student") { 
      e.preventDefault(); 
      let url = `http://127.0.0.1:8000/student/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      axios.get(url).then((res) => {
        console.log(res.data)
        const ldata = res.data.find((key) => key.email === email ); //find email is exist or not 
        if (ldata) { //if email is there then login
          const userData = ldata;
          dispatch(login(userData));
          alert("Login successful");
          navigate('/dashboard');
        } else {
          alert("Invalid credentials");
        }
      }).catch(error => {
        console.error("Error during authentication:", error);
        alert("An error occurred during authentication. Please try again later.");
      });
    }
   
    
   
      
        
      
    else{
     
      
      e.preventDefault(); 
      let url = `http://127.0.0.1:8000/adminc/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      axios.get(url).then((res) => {
        console.log(res.data)
        const ldata = res.data.find((key) => key.email === email ); //find email is exsist or not 
        if (ldata) {                //if email is there then login
          console.log(ldata)
          const userData = ldata;
          dispatch(adminlogin(userData));
          alert("Login successful");
          navigate('/admindashbord');
        } else {
          alert("Invalid credentials");
        }
      }).catch(error => {
        console.error("Error during authentication:", error);
        alert("An error occurred during authentication. Please try again later.");
      });
       }
  };

  return (
    <>
      <div className='homedata'>
        <div className='home-left'>
          <form>
            
            <h1>Login</h1>

            <div>
              <label htmlFor="email"><i className="fas fa-envelope"></i> :-</label>
              <input type="email" id="email" name="email" value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} required /><br />
            </div>
            <div>
              <label htmlFor="password"><i className="fas fa-lock"></i>  :- </label>
              <input type="password" id="password" name="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} required /><br />
            </div>
            <div>
              <label htmlFor="userType"><i className="fas fa-user"></i> :- </label>
              <select id="userType" name="userType" onChange={(e) => { setUserType(e.target.value) }} >
                <option name="admin" value="admin">Admin</option>
                <option name="student" value="student">Student</option>
              </select><br />
            </div>

            <button type="button" onClick={handleSubmit} >Login</button> 
          </form>
        </div>

        <div className='home-right'>
          
          <img src='../images/cms.png' width="400px" height="300px"/>
          <h1 className='home_right-h1'><Link to="/register"><a style={{color:"black"}}>Click here for Register now</a> </Link></h1>
        </div>
      </div>
    </>
  );
}

export default Home;


