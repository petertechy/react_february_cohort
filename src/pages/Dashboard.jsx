import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
useNavigate;
const Dashboard = () => {
  const [dashboardinfo, setdashboardinfo] = useState([])
  useEffect(() => {
    getDashboard();
  }, []);

  let navigate = useNavigate();

  let token = localStorage.token;
  let url = "https://node-february-cohort.onrender.com/dashboard";

  const getDashboard = () => {
    axios
      .get(url, {
        headers: {
          " Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (!response.data.status) {
          // console.log(response);
          localStorage.removeItem("token");
          navigate("/sign-in");
        }else{
          console.log(response)
          setdashboardinfo([response.data.user])
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () =>{
    localStorage.removeItem("token")
    navigate("/sign-in")
  }

  return (
    <>
      <div className="border shadow p-3 ">
        <div className="row justify-center align-center">
        <div className="col">
          <h1 className="text-success fs-5">Welcome to the Dashboard</h1>
        </div>
        <div className="col text-end">
          <button onClick={handleLogout} className="btn btn-warning">Logout</button>
        </div>
        </div>

        <div>
          {dashboardinfo.map((user, index)=>(
            <div key={index}>
              <h1>{`${user.firstname} ${user.lastname}`}</h1>
              <p>{user.age}</p>
              <p>Date Registered: {user.date}</p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
