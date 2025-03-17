import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";


const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App;