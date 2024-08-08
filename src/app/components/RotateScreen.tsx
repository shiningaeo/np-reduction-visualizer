import React, { useState, useEffect } from 'react';

const RotateScreen = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Threshold for the notification
  const narrowThreshold = 1291;

  return (
    <>
      {windowWidth < narrowThreshold && (
        <div className="fixed inset-0 flex items-center justify-center" style={{backgroundColor: "#EAF1F2", zIndex:2000}}>
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-center text-xl font-semibold">
              Please increase the width of your browser window.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RotateScreen;