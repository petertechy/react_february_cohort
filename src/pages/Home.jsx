import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <Link to="/">Home</Link>|
      <Link to="/sign-up">Register</Link>|
      <Link to="/sign-in">Sign In</Link>|
      {/* <Link to="/effect">Use Effect</Link> */}

    </div>
       <div className='p-3'>
       <h1 className='text-danger'>Homepage</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam maxime harum odit iure, sit minus accusantium sapiente maiores beatae dolore et? Iure quibusdam tempore at facere ullam excepturi, autem delectus.</p>
       <button className='btn btn-danger'>Submit</button>
       </div>
    </>
  )
}

export default Home