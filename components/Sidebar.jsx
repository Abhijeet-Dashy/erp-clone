import React from "react";
import {
  FaBed,
  FaCubes,
  FaBook,
  FaHdd,
  FaShieldAlt,
  FaFileAlt,
  FaClipboardList,
  FaMoneyBill,
  FaListUl,
  FaCheckCircle,
  FaChartLine,
  FaSearch,
  FaShoppingCart,
  FaUpload,
  FaShareAlt,
  FaPhoneAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    {
      icon: <FaBed />,
      label: "Hostel",
      submenus: [
        { label: "Room Allotment", icon: <FaClipboardList /> },
        { label: "Complaints", icon: <FaExclamationTriangle /> },
        { label: "Fees", icon: <FaMoneyBill /> },
      ],
    },
    {
      icon: <FaCubes />,
      label: "Academics",
      submenus: [
        { label: "Courses", icon: <FaListUl /> },
        { label: "Results", icon: <FaCheckCircle /> },
        { label: "Attendance", icon: <FaChartLine /> },
      ],
    },
    {
      icon: <FaBook />,
      label: "DMS",
      submenus: [
        { label: "Documents", icon: <FaFileAlt /> },
        { label: "Certificates", icon: <FaClipboardList /> },
      ],
    },
    {
      icon: <FaBook />,
      label: "Library",
      submenus: [
        { label: "Search Books", icon: <FaSearch /> },
        { label: "Borrowed Books", icon: <FaBook /> },
      ],
    },
    {
      icon: <PiForkKnifeFill />,
      label: "Canteen",
      submenus: [
        { label: "Menu", icon: <FaListUl /> },
        { label: "Orders", icon: <FaShoppingCart /> },
      ],
    },
    {
      icon: <FaHdd />,
      label: "Repository",
      submenus: [
        { label: "Upload Files", icon: <FaUpload /> },
        { label: "Shared Files", icon: <FaShareAlt /> },
      ],
    },
    {
      icon: <FaShieldAlt />,
      label: "Anti Ragging",
      submenus: [
        { label: "Report Case", icon: <FaExclamationTriangle /> },
        { label: "Helpline", icon: <FaPhoneAlt /> },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      
      {/* ✅ TOP LOGO */}
      

      {/* ✅ ALWAYS VISIBLE MENUS */}
      {menuItems.map((item, index) => (
        <div key={index}>
          <div className="sidebar-item">
            <div className="sidebar-left">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.label}</span>
            </div>
          </div>

          <div className="submenu always-open">
            {item.submenus.map((sub, i) => (
              <div key={i} className="submenu-item">
                <span className="submenu-icon">{sub.icon}</span>
                <span>{sub.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
