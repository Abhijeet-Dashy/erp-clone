import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Users,
  DollarSign,
  Truck,
  Briefcase,
  CreditCard,
  Building,
} from "lucide-react";
import "./login.css";
import slide1 from "../src/assets/slide1.jpg";
import logo from "../src/assets/SITBBS_logo.jpg";

const SignInPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const institutes = [
    "SiliconTech is a Unit of Silicon University",
    "Silicon Institute of Technology, Sambalpur",
    "Silicon Institute Trust",
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '25BCSH22' && password === '123456789') {
      navigate("/dashboard");
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-navbar">
        <img src={logo} alt="Silicon University Logo" className="logo" />
        <p className="navbar-text">
          SiliconTech is a Unit of Silicon University
        </p>
      </div>
      <div className="login-body">
        <div className="login-box">
          <div className="login-form">
            <div className="login-header">
              <h2>Login</h2>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">USER NAME</label>
                <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="institute">INSTITUTE</label>
                <select id="institute" className="input-field">
                  {institutes.map((inst, index) => (
                    <option key={index} value={inst}>
                      {inst}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>
          </div>
          <div className="login-image">
            <img
              src={slide1}
              alt="Social Parent"
              className="social-parent-img"
            />
          </div>
        </div>
      </div>

      <div className="info-cards-container">
        <div className="info-card">
          <div className="info-card-icon">
            <Users size={48} />
          </div>
          <h3>HRMS</h3>
          <ul>
            <li>Employee Profile</li>
            <li>Attendance</li>
            <li>Leave</li>
          </ul>
        </div>
        <div className="info-card">
          <div className="info-card-icon">
            <BarChart size={48} />
          </div>
          <h3>BUDGET</h3>
          <ul>
            <li>Planning</li>
            <li>Workflow</li>
            <li>Utilization</li>
          </ul>
        </div>
        <div className="info-card">
          <div className="info-card-icon">
            <DollarSign size={48} />
          </div>
          <h3>EXPENSES</h3>
          <ul>
            <li>Advance</li>
            <li>Settlement</li>
            <li>Tracking</li>
          </ul>
        </div>
        <div className="info-card">
          <div className="info-card-icon">
            <Truck size={48} />
          </div>
          <h3>TRANSPORT</h3>
          <ul>
            <li>Vehicle</li>
            <li>Route</li>
            <li>Driver</li>
            <li>Tracking</li>
          </ul>
        </div>
        <div className="info-card">
          <div className="info-card-icon">
            <Briefcase size={48} />
          </div>
          <h3>FINANCE</h3>
          <ul>
            <li>Approvals</li>
            <li>Payment</li>
            <li>Collection</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className="info-card">
          <div className="info-card-icon">
            <CreditCard size={48} />
          </div>
          <h3>PAYROLL</h3>
          <ul>
            <li>Calculation</li>
            <li>Payment</li>
          </ul>
        </div>
      </div>

      <footer className="login-footer">
        <p>Copyright © Edusols 2013-2018</p>
        <p>Product Version 2.0</p>
      </footer>
    </div>
  );
};

export default SignInPage;
