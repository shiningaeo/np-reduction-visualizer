'use client'
import React, { useState } from 'react';
import Three_SAT_Input from './components/SatInput';
import Three_SAT_VC from './components/sat-to-vc/Sat-VC';
import ProblemMenu from './components/ProblemMenu';

export default function Home() {
  const [submit, setSubmit] = useState(false)
  const [submit2, setSubmit2] = useState(false)
  const [satInput, setSatInput] = useState([]);

  const handleDataFromChild = (childData) => {
    setSatInput(childData);
    setSubmit2(true)
  };

  const handleSubmit = () => {
    if (!submit) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  // // Create a reference for the target element
  // const targetRef = useRef(null);

  // // Function to scroll to the target element
  // const scrollToTarget = () => {
  //   if (targetRef.current) {
  //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  let problem = [
    <Three_SAT_Input onDataReceive={handleDataFromChild} submit={submit}/>
  ]

  return (
    <>
    {!submit2 ? (
      <>
      <ProblemMenu />
      <main className="flex flex-col items-center justify-between" style={{marginTop:10}}>
        <div className="flex flex-row justify-center items-start w-full h-full">
          {/* left half of problem selection */}
          <div className="flex flex-row w-1/2" style={{borderRight: "solid 2px gray"}}>
            <div className="flex flex-col w-1/12"></div>
            <div className="flex flex-col w-11/12 h-full justify-center items-center" style={{backgroundColor:"#ffffff"}}>
                {problem[0]}
            </div>
          </div>

          <div className="flex flex-row w-1/2 h-full">
            <div className="flex flex-col w-11/12 h-full justify-center" style={{backgroundColor:"#ffffff"}}>
              <div className="w-full h-full" style={{height: 116, zIndex:10, backgroundColor:"#ffffff", padding:10}}>
                <p>A vertex cover instance is a graph with <strong>V</strong> vertices, <strong>E</strong> edges, and
                  a budget of size <strong>k</strong>. A valid vertex cover is a subset of the vertices such that every
                  edge has at least one endpoint in the subset. The vertex cover problem is typically from the perspective
                  of the maximum cover size. In other words, a valid instance of vertex cover should have a size of at most k.
                </p>
              </div>
              <div className="w-full" style={{height:306, backgroundColor:"#ffffff"}}></div>
              <div className="w-full flex flex-row justify-center items-center" style={{height:130, backgroundColor:"white"}}>
                <button onClick={handleSubmit} style={{zIndex:1, backgroundColor:"#b6f0e7", padding:15}}>GENERATE</button>
              </div>
            </div>
            <div className="w-1/12"></div>
          </div>
        </div>
      </main>
    </>
    ) : (
      <>
        <Three_SAT_VC N={satInput[0]} M={satInput[1]} INPUT={satInput[2]} />
      </>
    )}
    </>
  );
}
