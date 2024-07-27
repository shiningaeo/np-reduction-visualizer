import React, { useState } from 'react';

export default function TabMenu({ targetRef }) {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Tab1');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4" ref={targetRef}>
      {/* Tab menu */}
      <div className="flex border-b">
        <button
          className={`py-2 px-4 ${activeTab === 'Tab1' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => handleTabClick('Tab1')}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'Tab2' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => handleTabClick('Tab2')}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'Tab3' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => handleTabClick('Tab3')}
        >
          Tab 3
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {activeTab === 'Tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'Tab2' && <div>Content for Tab 2</div>}
        {activeTab === 'Tab3' && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};
