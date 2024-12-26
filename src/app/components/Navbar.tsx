'use client';
import React, { useState } from 'react';
import { poppins } from '../fonts/fonts';

export default function Navbar() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "rinnyfan@umich.edu";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('nav').offsetHeight; // Adjust the selector if necessary
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#608594"; // Change background color
    setShowEmail(true); // Show email
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#396D83"; // Revert background color
    setShowEmail(false); // Hide email
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true); // Set copied state
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <nav className="fixed top-0 left-0 w-full" style={{ zIndex:1010, borderBottom:"solid 2px #396D83" }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ height: 68 }}>
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center title">
            <a className={`${poppins.className} text-2xl font-bold`} style={{ color:"#396D83", fontStyle:"italic" }}>
              NP VISUALIZER
            </a>
          </div>
          <div className="md:flex space-x-8">
            <div className="hidden md:flex space-x-8" style={{ cursor: "pointer" }}>
              <a onClick={() => scrollToSection('projects')} className="hover:text-gray-900 text-lg navItem">
                I'm Confused
              </a>
            </div>
            <div className="hidden md:flex space-x-8" style={{ cursor:"pointer" }}>
              <div
                className="text-lg navItem"
                style={{
                  backgroundColor: "#396D83",
                  padding: "7px 12px",
                  color: "white",
                  borderRadius: "4px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  transition: "background-color 0.3s ease, color 0.3s ease"
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCopyToClipboard}
              >
                Contact
                {showEmail && (
                <span
                  style={{
                    position: "absolute",
                    top: "100%",
                    width:"135px",
                    textAlign:"center",
                    left: "94.5%",
                    marginTop:-20,
                    transform: "translateX(-50%)",
                    backgroundColor: "#fff",
                    color: "#396D83",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {copied ? "Copied!" : email}
                </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


  );
};
