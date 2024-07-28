'use client'
import React, { useState, useRef } from 'react';
import Three_SAT_Input from './components/SatInput';
import Three_SAT_VC from './components/sat-to-vc/Sat-VC';
import ProblemMenu from './components/ProblemMenu';

export default function Home() {
  // state variables from user input
  const [N, setN] = useState(3)
  const [M, setM] = useState(2)
  const [submit, setSubmit] = useState(false)

  // boolean sequence
  const [input, setInput] = useState(Array.from({ length: M*3 }, () => 1))

  // negation tracker
  const [negatives, setNegatives] = useState(Array.from({ length: 15 }, () => "#94a3b8"))

  const handleChangeN = (e) => {
    setN(parseInt(e.target.value));
  };

  const handleChangeM = (e) => {
    setM(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    if (submit) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  };

  function changeInput(i: number, newValue: number) {
    setInput(prevInput => {
        const newInput = [...prevInput]; // Create a copy of the previous state
        newInput[i] = newValue; // Update the specific index
        return newInput; // Return the updated array
    });
  }

  // ONLY CHANGES COLOR INPUT ADJUSTMENT IS DONE IN CLAUSE-INPUT
  function toggleNegation(i: number) {
      setNegatives(prevInput => {
          const nInput = [...prevInput];
          if (nInput[i] == "black") {
              nInput[i] = "#94a3b8"
          } else {
              nInput[i] = "black"
          }
          return nInput;
      });
      changeInput(i, input[i]*-1)
  }

  // // Create a reference for the target element
  // const targetRef = useRef(null);

  // // Function to scroll to the target element
  // const scrollToTarget = () => {
  //   if (targetRef.current) {
  //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  let problem = [
    <Three_SAT_Input
      N={N}
      M={M}
      negatives={negatives}
      handleChangeN={handleChangeN}
      handleChangeM={handleChangeM}
      toggleNegation={toggleNegation}
      changeInput={changeInput}
    />
  ]

  return (
    <>
    {!submit ? (
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
      <Three_SAT_VC N={N} M={M} INPUT={input} />
      </>
    )}
    </>
  );
}
