import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [age, setage] = useState("")
    const [password, setpassword] = useState("")
    const registerUser = ()=>{
        // console.log({firstname, lastname, email, age, password})
        // axios(url, user)
        const url = "http://localhost:5700/register"
        const user = {firstname, lastname, email, age, password}
        axios.post(url, user)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <>
        <div className='mx-auto col-7 rounded-3 shadow p-3 my-4'>
        <h1>SignUp Page</h1>
        <input className='form-control mb-3' type="text" placeholder='first name' onChange={(e)=>setfirstname(e.target.value)} />
        <input className='form-control mb-3' type="text" placeholder='last name' onChange={(e)=>setlastname(e.target.value)} />
        <input className='form-control mb-3' type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input className='form-control mb-3' type="text" placeholder='age' onChange={(e)=>setage(e.target.value)}/>
        <input className='form-control mb-3' type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
        <button className='btn btn-success w-100' onClick={registerUser}>Register</button>
        </div>
    </>
  )
}

export default SignUp