import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("")
  
  const navigate = useNavigate()

  const handleLogin = () =>{
    let url = "https://node-february-cohort.onrender.com/signin"
    let userLogin = {email, password}
    axios.post(url, userLogin)
    .then((response)=>{
      console.log(response)
      if(response.data.status){
      // localStorage.setItem('token', response.data.token)  
      localStorage.token = response.data.token  
      navigate("/dashboard")
      }else{
        setmessage(response.data.message)
      }
    })
    .catch((err)=>{
      console.log(err)
    })
    // console.log({email, password})
  }
  return (
    <>

      <div className='mx-auto col-7 rounded-3 shadow p-3 my-4'>
      <h1 className="text-success text-center">Sign In Page</h1>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
          className="form-control mb-3"
          />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
          className="form-control mb-3"
        />
        <p className="text-danger">{message}</p>
        <button className="btn btn-success w-100" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default SignIn;
