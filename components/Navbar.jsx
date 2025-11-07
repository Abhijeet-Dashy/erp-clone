import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../src/assets/SITBBS_logo.jpg";
import profile from "../src/assets/profile.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBell, FaGraduationCap, FaChevronDown, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ onToggleSidebar }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <RxHamburgerMenu 
          className="hamburger-icon" 
          onClick={onToggleSidebar}
        />
        <h3>SiliconTech is a Unit of Silicon University</h3>
      </div>
      <div className="navbar-right">
        <FaBell className="notification-icon" />
        <div className="grievance">
          <FaGraduationCap />
          <span>Grievance</span>
        </div>
        <div className="profile-container" ref={profileRef}>
          <div className="profile" onClick={toggleProfileDropdown}>
            <img src={profile} alt="User" className="profile-pic" />
            <span className="profile-name">ANIMESH KINDO (Student)</span>
            <FaChevronDown className={`dropdown-arrow ${profileDropdownOpen ? 'rotated' : ''}`} />
          </div>
          
{profileDropdownOpen && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <img
              src={profile} // replace with user image URL
              alt="Profile"
              className="profile-img"
            />
            <h3 className="profile-name">ANIMESH KINDO</h3>
            <p className="profile-role">Student</p>
          </div>

          <div className="profile-options">
            <div className="dropdown-item">
              <FaUser />
              <span>Student Parent</span>
            </div>
            <div className="dropdown-item">
              <FaCog />
              <span>Account Settings</span>
            </div>
            <div className="dropdown-item">
              <FaSignOutAlt />
              <span>Sign out</span>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
