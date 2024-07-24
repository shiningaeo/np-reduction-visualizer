import React from 'react';
import './box.css'; // Import the CSS file for styling

const OrangeBox = () => {
    return (
        <div className="flex flex-row w-full justify-center" style={{position:"absolute", zIndex:1000}}>
            <div className="orange-box">
            </div>
        </div>
    );
};

export default OrangeBox;