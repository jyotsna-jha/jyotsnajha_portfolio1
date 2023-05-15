import "./ResumeStyles.css";
import React, { useState } from 'react';
import resumePdf from '../assets/j.pdf';

const ResumeContent = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulating a download delay of 2 seconds
    setTimeout(() => {
      window.open(resumePdf, '_blank');
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="resume-content">
      <h2>Resume Content</h2>
      <p></p>
      <button onClick={handleDownload} disabled={isDownloading}>
        {isDownloading ? 'Downloading...' : 'Download Resume'}
      </button>
    </div>
  );
};

export default ResumeContent;

