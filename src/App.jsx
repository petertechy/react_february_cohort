import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import FileUpload from "./pages/FileUpload";
import NotFound from "./pages/NotFound";
import  Socket  from "socket.io-client";
import Chat from "./pages/Chat";
import { useEffect, useRef, useState } from "react";

let token = localStorage.token

const App = () =>{
  let endpoint = "http://localhost:5700"
  // Socket(endpoint)
  // const [socket, setsocket] = useState("")
  let socket = useRef()
  // console.log(socket)
  useEffect(() => {
    socket.current = Socket(endpoint)

    console.log(socket.current)
  }, [])
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="file" element={<FileUpload/>}/>
        <Route path="dashboard" element={token ? <Dashboard/> : <Navigate to="/sign-in"/>}/>
        <Route path="chat" element={<Chat socket={socket}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;