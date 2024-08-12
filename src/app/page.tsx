'use client'
import React, { useState } from 'react';
import Three_SAT_Input from './components/SatInput';
import Three_SAT_VC from './components/sat-to-vc/Sat-VC';
import ProblemMenu from './components/ProblemMenu';
import VCDescription from './components/descriptions/VCDescription';
import CLDescription from './components/descriptions/CLDescription';
import RotateScreen from './components/RotateScreen';

export default function Home() {
  const [submit, setSubmit] = useState(false)
  const [submit2, setSubmit2] = useState(false)
  const [satInput, setSatInput] = useState([]);

  const handleDataFromChild = (childData) => {
    setSatInput(childData);
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

  let leftProblem = [<Three_SAT_Input onDataReceive={handleDataFromChild} submit={submit}/>]
  let rightProblem = [<VCDescription />, <CLDescription />]

  return (
    <>
    <RotateScreen />
    {!submit2 ? (
      <>
      <ProblemMenu />
      <main className="flex flex-col items-center justify-between" style={{marginTop:10}}>
        <div className="flex flex-row justify-center items-start w-full h-full">

          <div className="flex flex-row w-1/2" style={{borderRight: "solid 2px gray"}}>
            <div className="flex flex-col w-1/12"></div>
            <div className="flex flex-col w-11/12 h-full justify-center items-center" style={{backgroundColor:"#ffffff"}}>
                {leftProblem[0]}
            </div>
          </div> 

          <div className="flex flex-row w-1/2 h-full">
            <div className="flex flex-col w-11/12 h-full justify-center" style={{backgroundColor:"#ffffff"}}>
              {rightProblem[1]}

              <div className="w-full flex flex-row justify-center items-center" style={{height:130, backgroundColor:"white", marginTop:20, marginBottom:30}}>
                <button onClick={handleSubmit} style={{zIndex:1, backgroundColor:"#b6f0e7", padding:15, borderRadius:10}}>GENERATE</button>
              </div>
            </div>
            <div className="w-1/12"></div>
          </div>
        </div>
      </main>
    </>
    ) : (
        <Three_SAT_VC N={satInput[0]} M={satInput[1]} INPUT={satInput[2]} setSubmit={setSubmit} setSubmit2={setSubmit2} />
    )}
    </>
  );
}
