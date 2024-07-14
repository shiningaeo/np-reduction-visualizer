import React, { useState } from 'react';

export default function Viewer() {
    const [currIndex, setCurrIndex] = useState(0); // State to manage current step
    var steps = 3
    function handleClick() {
        setCurrIndex((prevStep) => (prevStep + 1) % steps);
    }

    return (
        <>
            {/* <svg height="160" width="256">
                <Animation index={currIndex}/>
            </svg> */}
            <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
                <span>Next</span>
            </button>
        </>
    );
}