'use client'
import React, { useState } from 'react';
import NPDetails from './tab-content/NPDetails';
import SATDetails from './tab-content/SATDetails';
import VCDetails from './tab-content/VCDetails';
import CLDetails from './tab-content/CLDetails';
import SCDetails from './tab-content/SCDetails';
import SSDetails from './tab-content/SSDetails';
import About from './tab-content/About';

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
            className={`py-2 px-4 ${activeTab === 'Tab1' ? 'border-b-2 border-[#396D83] bg-white' : ''}`}
            onClick={() => handleTabClick('Tab1')}
          >NP Problems</button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab2' ? 'border-b-2 border-[#396D83] bg-white' : ''}`}
            onClick={() => handleTabClick('Tab2')}
          >3-SAT</button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab3' ? 'border-b-2 border-[#396D83] bg-white' : ''}`}
            onClick={() => handleTabClick('Tab3')}
          >Vertex Cover</button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab4' ? 'border-b-2 border-[#396D83] bg-white' : ''}`}
            onClick={() => handleTabClick('Tab4')}
          >Clique</button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab5' ? 'border-b-2 border-[#396D83] bg-white' : ''}`}
            onClick={() => handleTabClick('Tab5')}
          >Set Cover</button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab6' ? 'border-b-2 border-[#396D83] bg-white' : ''}`}
            onClick={() => handleTabClick('Tab6')}
          >Subset Sum</button>
          <button
            className={`py-2 px-4 ${activeTab === 'Tab7' ? 'border-b-2 border-[#396D83] bg-white' : ''}`}
            onClick={() => handleTabClick('Tab7')}
          >About</button>
        </div>

        {/* Tab content */}
        <div className="mt-4">
          {activeTab === 'Tab1' && <NPDetails />}
          {activeTab === 'Tab2' && <SATDetails />}
          {activeTab === 'Tab3' && <VCDetails />}
          {activeTab === 'Tab4' && <CLDetails />}
          {activeTab === 'Tab5' && <SCDetails />}
          {activeTab === 'Tab6' && <SSDetails />}
          {activeTab === 'Tab7' && <About />}
        </div>
      </div>
    </div>
  );
};
