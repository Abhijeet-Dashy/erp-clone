import React from 'react';
import './Result.css';

const Result = () => {
  return (
    <div className="result-container">

      {/* ✅ Header Bar */}
      <div className="result-header-bar">
        <span className="header-title">SEMESTER RESULT</span>
        <button className="download-button">Download</button>
      </div>

      {/* ✅ Main Card (Matches screenshot) */}
      <div className="semester-card">

        {/* Orange Title Bar */}
        <div className="semester-title">SEMESTER - 1</div>

        {/* Blank white area */}
        <div className="empty-white-box"></div>

      </div>
    </div>
  );
};

export default Result;
