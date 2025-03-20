import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

let token = localStorage.token


const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="dashboard" element={token ? <Dashboard/> : <Navigate to="/sign-in"/>}/>
      </Routes>
    </Router>
  )
}

export default App;