import React, { useState } from 'react';
import SvgComponent from "./svg-component";

type NextButtonProps = {
    steps: string[]; // Define type for steps prop
};

const NextButton: React.FC<NextButtonProps> = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0); // State to manage current step
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setCurrentStep((prevStep) => (prevStep + 1) % steps.length); // Increment current step
        setShowComponent(true); // Set showComponent to true to display SvgComponent
    };
    
    return (
        <div>
            <svg></svg>
            <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
                <span>Next</span>
            </button>
            {showComponent && <SvgComponent color={steps[currentStep]} />} {/* Conditional rendering of SvgComponent */}
        </div>
      );
};

export default NextButton;
