'use client'
import React, { useState } from 'react';
import NPDetails from './descriptions/NPDetails';

export default function TabMenu() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Tab1');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full" style={{height:300, backgroundColor:"#EAF1F2"}}>
      <div className="p-4">
        {/* Tab menu */}
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${activeTab === 'Tab1' ? 'border-b-2 border-blue-500 bg-white' : ''}`}
            onClick={() => handleTabClick('Tab1')}
          >
            NP Problems
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab2' ? 'border-b-2 border-blue-500 bg-white' : ''}`}
            onClick={() => handleTabClick('Tab2')}
          >
            3-SAT
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab3' ? 'border-b-2 border-blue-500 bg-white' : ''}`}
            onClick={() => handleTabClick('Tab3')}
          >
            Vertex Cover
          </button>
        </div>

        {/* Tab content */}
        <div className="mt-4">
          {activeTab === 'Tab1' && <NPDetails />}
          {activeTab === 'Tab2' && <div>Content for Tab 2</div>}
          {activeTab === 'Tab3' && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};
