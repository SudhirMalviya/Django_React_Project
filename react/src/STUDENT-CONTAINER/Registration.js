import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({});
  const [mydata,setMydata]=useState({});
  
  const MyNav = useNavigate();

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const submit = () => {
    let url = `http://127.0.0.1:8000/student/?email=${input.email}`;
  
    axios.get(url).then((res) => {
      const existEmail = res.data;
       console.log(res.data)
      if (!input.email || !input.password) {
        alert("Email and password cannot be empty");
        return;
      }
  
      if (input.email===existEmail.email) {
        alert("Email already exists");
        MyNav("/home");
      } 
      else {
        url = "http://127.0.0.1:8000/student/";
        axios.post(url, input).then(() => {
          alert("Registration success!!");
          MyNav("/home");
        });
      }
    });
  };






  return (
    <>
      <div className="register_container">
        <div className="register">
          <h1>Registration Form</h1>
          <form className="register_form">
         
            <div className="registration_input_lable_n">
              <label htmlFor="product">Name :-</label>
              <input
                type="text"
                id="product"
                name="name"
                value={input.name}
                onChange={handleData}
              />
            </div>
            <div className="registration_input_lable_e">
              <label htmlFor="discription">Email :-</label>
              <input
                type="text"
                id="discription"
                name="email"
                value={input.email}
                onChange={handleData}
              />
            </div>
            <div className="registration_input_lable_p">
              <label htmlFor="price">Password :-</label>
              <input
                type="text"
                id="price"
                name="password"
                value={input.password}
                onChange={handleData}
              />
            </div>
            <button type="button" onClick={submit}>
              Save Data
            </button>
          </form>
        </div>
        <div className="form-image">
          <img src="/images/rshif.gif" alt="Registration Image" width="100%" />
        </div>
      </div>
    </>
  );
};

export default Register;





// const submit = () => {
//   if (existEmail.length > 0 && existEmail[0].email === input.email) {
//     alert("Email already exists");
//     MyNav("/home");
//   } else {
//     if (input.name === "" && input.email === "" && input.password === "") {
//       return
//     }
//     else {
//       let url = "http://localhost:4000/student";

//       axios.post(url, input).then(() => {
//         alert("Data saved!!");
//       });
//       MyNav("/home");
//     }
//   }
// };