import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Attendance.css";
import { FaHome } from "react-icons/fa";

const Attendance = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const subjects = [
    {
      id: 1,
      name: "Fundamentals of Management(BTBS-T-HS-022)",
      branch: "CSE - B",
      roll: "44",
      faculty: "MS Kalpana Mohanty",
      attendance: 76.47,
      courseCoverage: 42.5,
    },
    {
      id: 2,
      name: "Internet of Things(BTCS-T-PC-056)",
      branch: "CSE - B",
      roll: "44",
      faculty: "DR RAMAKRUSHNA SWAIN",
      attendance: 28.33,
      courseCoverage: 58.33,
    },
    {
      id: 3,
      name: "Internet of Things Lab (BTCS-P-PC-056)",
      branch: "CSE - B2",
      roll: "22",
      faculty: "DR RAMAKRUSHNA SWAIN",
      attendance: 33.33,
      courseCoverage: 46.15,
    },
  ];

  return (
    <div className="dashboard-container">
      <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="dashboard-main">
        <Sidebar isOpen={sidebarOpen} />
        <div
          className={`dashboard-content attendance-content-area ${
            !sidebarOpen ? "sidebar-closed" : ""
          }`}
          style={{ backgroundColor: "#ecf0f5", padding: "15px" }}
        >
          <div className="attendance-header">
            <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "300" }}>
              Registered Subjects
            </h2>
            <div className="attendance-breadcrumbs">
              <FaHome style={{ marginRight: "5px" }} /> Home &gt; Registered
              Subjects
            </div>
          </div>

          <div className="attendance-box">
            <div className="attendance-box-header">
              <label style={{ marginRight: "20px", fontWeight: "bold" }}>
                Semester
              </label>
              <select className="semester-select">
                <option>I</option>
              </select>
            </div>

            <div className="table-responsive">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Branch/ Section</th>
                    <th>Roll No</th>
                    <th>Faculty</th>
                    <th>Attendance %[P]</th>
                    <th>Int.Mark</th>
                    <th>Course Coverage</th>
                    <th>Course Handout</th>
                    <th>Model Question</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((sub) => (
                    <tr key={sub.id}>
                      <td>{sub.id}</td>
                      <td>{sub.name}</td>
                      <td>{sub.branch}</td>
                      <td>{sub.roll}</td>
                      <td style={{ textTransform: "uppercase" }}>
                        {sub.faculty}
                      </td>
                      <td>
                        <div className="progress-cell">
                          <div
                            className="progress-bar-bg"
                            style={{
                              backgroundColor: "#f56954",
                              width: `${sub.attendance}%`,
                            }}
                          >
                            {sub.attendance}%
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="btn-show">Show</button>
                      </td>
                      <td>
                        <div className="progress-cell">
                          <div
                            className="progress-bar-bg"
                            style={{
                              backgroundColor: "#f56954",
                              width: `${sub.courseCoverage}%`,
                            }}
                          >
                            {sub.courseCoverage}%
                          </div>
                        </div>
                        <a href="#" className="show-details">
                          Show Details
                        </a>
                      </td>
                      <td>
                        <button className="btn-show">Show</button>
                      </td>
                      <td>
                        <button className="btn-show">Show</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="attendance-legend">
              <span className="legend-red">0 to 79%</span>
              <span className="legend-green">80% to 100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
