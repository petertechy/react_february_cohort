import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate
const Dashboard = () => {
  useEffect(() => {
    getDashboard()
  }, [])

  let navigate = useNavigate()

  let token = localStorage.token
  let url = "http://localhost:5700/dashboard"

const getDashboard = () =>{
  axios.get(url,{
      headers: {
       " Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept" : "application/json"
      }
  })
  .then((response)=>{
    if(!response.data.status){
      console.log(response.data.message)
      localStorage.removeItem(token)
      navigate('/sign-in')
    }
  })
  .catch(()=>{

  })
}


  return (
    <>
        <h1>Welcome to the Dashboard</h1>
    </>
  )
}

export default Dashboard