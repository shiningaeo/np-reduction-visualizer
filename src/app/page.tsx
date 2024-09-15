'use client'
import React, { useState } from 'react';
import ProblemMenu from './components/ProblemMenu';
import VCDescription from './components/descriptions/VCDescription';
import CLDescription from './components/descriptions/CLDescription';
import SCDescription from './components/descriptions/SCDescription';
import Three_SAT_Input from './components/SatInput';
import GraphInput from './components/vc-to-sc/GraphInput';
import Three_SAT_VC from './components/sat-to-vc/Sat-VC';
import Three_SAT_CL from './components/sat-to-clique/SAT-CL';
import VC_SC from './components/vc-to-sc/VC-SC';
import RotateScreen from './components/RotateScreen';

export default function Home() {
  const [submit, setSubmit] = useState(false)
  const [submit2, setSubmit2] = useState(false)
  const [satInput, setSatInput] = useState([])
  const [graphInput, setGraphInput] = useState([])
  const [leftIndex, setLeftIndex] = useState(0)   // 3SAT = 0, VC = 1
  const [rightIndex, setRightIndex] = useState(0) // VC = 0, CL = 1

  const handleDataFromSat = (childData) => {
    setSatInput(childData);
    if (!submit2) {
      setSubmit2(true)
    } else {
      setSubmit2(false)
    }
  };

  const handleDataFromGraph = (childData) => {
    setGraphInput(childData);
    if (!submit2) {
      setSubmit2(true)
    } else {
      setSubmit2(false)
    }
  };

  const handleSubmit = () => {
    if (!submit) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  let leftProblem = [<Three_SAT_Input onDataReceive={handleDataFromSat} submit={submit}/>, 
    <GraphInput onDataReceive={handleDataFromGraph} submit={submit}/>]

  let rightProblem = [<VCDescription />, <CLDescription />, <SCDescription />]

  return (
    <>
    <RotateScreen />

    {!submit2 ? (
      <>
      <ProblemMenu rightIdx={rightIndex} setRightIdx={setRightIndex} leftIdx={leftIndex} setLeftIdx={setLeftIndex}/>
      <main className="flex flex-col items-center justify-between" style={{marginTop:10}}>
        <div className="flex flex-row justify-center items-start w-full h-full">

          <div className="flex flex-row w-1/2" style={{borderRight: "solid 2px gray"}}>
            <div className="flex flex-col w-1/12"></div>
            <div className="flex flex-col w-11/12 h-full justify-center items-center" style={{backgroundColor:"#ffffff"}}>
                {leftProblem[leftIndex]}
            </div>
          </div> 

          <div className="flex flex-row w-1/2 h-full">
            <div className="flex flex-col w-11/12 h-full justify-center" style={{backgroundColor:"#ffffff"}}>
              {rightProblem[rightIndex]}

              <div className="w-full flex flex-row justify-center items-center" style={{height:130, backgroundColor:"white", marginTop:20, marginBottom:30}}>
                <button onClick={handleSubmit} style={{cursor:"pointer", zIndex:1, backgroundColor:"#b6f0e7", padding:15, borderRadius:10}}>GENERATE</button>
              </div>
            </div>
            <div className="w-1/12"></div>
          </div>
        </div>
      </main>
    </>
    ) : (
      rightIndex === 0 ? (
        <Three_SAT_VC N={satInput[0]} M={satInput[1]} INPUT={satInput[2]} setSubmit={setSubmit} 
          setSubmit2={setSubmit2} ASSIGNMENT={satInput[3]} />
      ) : rightIndex === 1 ? (
        <Three_SAT_CL N={satInput[0]} M={satInput[1]} INPUT={satInput[2]} setSubmit={setSubmit} setSubmit2={setSubmit2} 
          ASSIGNMENT={satInput[3]}/>
      ) : rightIndex === 2 ? (
        <VC_SC setSubmit={setSubmit} setSubmit2={setSubmit2} edges={graphInput[0]} V={graphInput[1]} k={graphInput[2]}/>
      ) : null

    )}
    </>
  );
}
