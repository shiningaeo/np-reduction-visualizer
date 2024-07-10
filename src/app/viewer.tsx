import React, { useState } from 'react';
import Animation from "./animation";

export default function Viewer() {
    const [currIndex, setCurrIndex] = useState(0); // State to manage current step
    var steps = 2
    function handleClick() {
        setCurrIndex((prevStep) => (prevStep + 1) % steps);
    }

    return (
        <>
            <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
                <span>Next</span>
            </button>
            <Animation index={currIndex}/>
        </>
    );
}