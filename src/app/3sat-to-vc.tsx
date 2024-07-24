'use client'
import React, { useState } from 'react';
import ClauseGadget from './clause-gadget';
import VariableGadget from './variable-gadget';
import Edge from './edge';
import { poppins } from '@/app/ui/fonts';

// 3SAT -> Vertex Cover (VC)

export default function Three_SAT_VC({N, M, INPUT}) {
  const OFFSETS = [308, 231, 154, 77, 0]
  const VAR_OFFSETS = OFFSETS[N-1]
  const CLAUSE_OFFSETS = OFFSETS[M-1]

  const COLORS = ["blue", "red", "green", "orange", "purple"]
  const COLOR_GROUPS = []
  const BORDER_GROUPS = []

  const TRUE_VAR_SPOTS = [44, 198, 352, 506, 660] // difference of 154
  const FALSE_VAR_SPOTS = [140, 294, 448, 602, 756]
  var VAR_SPOTS = [] // a list of size INPUT.length

  // initialize *WALKTHROUGH SEQUENCE*
  const LETTERS = ["a", "b", "c", "d", "e"]
  var sequence = [] // IMPORTANT: walkthrough sequence
  track = 0
  for (let i = 0; i < INPUT.length; i+=3) {
    for (let j = 1; j < 4; ++j) {
      sequence.push(LETTERS[track].concat(j.toString()))
    }
    ++track
  }

  // IMPORTANT STATE VARIABLE
  const [currIndex, setCurrIndex] = useState(-1) // State to manage current step
  var steps = sequence.length
  function handleClick() {
      setCurrIndex((prevStep) => (prevStep + 1) % steps)
  }

  function handleClickBack() {
    setCurrIndex((prevStep) => (prevStep -1) % steps)
}

  // initialize COLOR_GROUPS to preserve color changes
  for (let i = 0; i < INPUT.length; i+=3) {
    var temp = [COLORS[Math.abs(INPUT[i])-1], COLORS[Math.abs(INPUT[i+1])-1], COLORS[Math.abs(INPUT[i+2])-1]]
    COLOR_GROUPS.push(temp)
  }

  // initialize BORDER_GROUPS to preserve border changes
  var track = 0
  for (let i = 0; i < INPUT.length; i+=3) {
    let temp1 = ["", "", ""]
    for (let j = 0; j < 3; ++j) {
      if (INPUT[i+j] < 0) {
          temp1[j] = "black"
      } 
    }
    BORDER_GROUPS.push(temp1)
    ++track
  }

  // initialize VAR_SPOTS for drawing edges
  for (let i = 0; i < INPUT.length; ++i) {
    if (INPUT[i] < 0) {
      VAR_SPOTS.push(FALSE_VAR_SPOTS[-1*INPUT[i]-1]+VAR_OFFSETS)
    } else {
      VAR_SPOTS.push(TRUE_VAR_SPOTS[INPUT[i]-1]+VAR_OFFSETS)
    }
  }

  var variables = []  // variable gadgets to be rendered
  track = 28
  for (let i = 0; i < N; ++i) {
    variables.push(<VariableGadget key={i} x={track + VAR_OFFSETS} color={COLORS[i]} index={i}/>)
    track += 154
  }

  var clauses = []  // clause gadgets to be rendered
  track = 36
  for (let i = 0; i < M; ++i) {
    var vars = [Math.abs(INPUT[3*i]), Math.abs(INPUT[3*i+1]), Math.abs(INPUT[3*i+2])]
    console.log(vars)
    clauses.push(<ClauseGadget key={i} vars={vars} x={track+CLAUSE_OFFSETS} index={sequence[currIndex]} 
      id1={LETTERS[i]+"1"} id2={LETTERS[i]+"2"} id3={LETTERS[i]+"3"} colors={COLOR_GROUPS[i]} borders={BORDER_GROUPS[i]}/> )
    track += 154
  }

  var edges = []  // edges to be rendered
  track = 54
  for (let i = 0; i < M*3; i+=3) {
    edges.push(<Edge key={i} index={sequence[currIndex]} id={LETTERS[i/3]+"1"} x1={VAR_SPOTS[i]} x2={track+CLAUSE_OFFSETS} y2={362}/>)
    edges.push(<Edge key={i+1} index={sequence[currIndex]} id={LETTERS[i/3]+"2"} x1={VAR_SPOTS[i+1]} x2={track+40+CLAUSE_OFFSETS} y2={282}/>)
    edges.push(<Edge key={i+2} index={sequence[currIndex]} id={LETTERS[i/3]+"3"} x1={VAR_SPOTS[i+2]} x2={track+80+CLAUSE_OFFSETS} y2={362}/>)
    track += 154
  }

  return (
    <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:30}}>
      <main className="top-0 left-0 w-full" style={{height:50, marginTop: 85}}>
            <div className="flex flex-row w-full justify-center" style={{height:300, zIndex: -100}}>
                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                <div className="flex flex-row w-2/12 justify-center items-center"></div>
                    <div className="flex flex-row w-4/12 justify-center items-center"></div>
                    <div className="flex flex-row w-8/12 justify-center items-center">

                        <h1 className={`${poppins.className} font-semibold`} style={{fontSize:22, color:"#396D83"}}>3-SAT</h1>
                    </div>
                </div>

                <div className="flex flex-row justify-center w-1/12 font-bold items-center" style={{height:50}}>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:40}}>&#8804;</h1>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:20, marginTop:12}}>&nbsp;p</h1>
                </div>

                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                    <div className="flex flex-row w-10/12 justify-center" style={{height:50}}>
                        <div className="flex w-7/12 justify-center items-center">
                            <h1 className={`${poppins.className} font-semibold`} style={{fontSize:22, color:"#396D83"}}>Vertex Cover</h1>
                        </div>
                        <div className="flex flex-row w-5/12 justify-center items-center"></div>
                    </div>
                </div>
            </div>
        </main>
      <div className="flex flex-row w-full items-center justify-center" style={{height:300, zIndex:100}}>
        <div className="flex flex-row w-2/12 h-full items-center justify-center">
          <div className="w-full p-3" style={{height:"auto", marginTop: 50, marginBottom:200, marginLeft:-40, backgroundColor:"#b6f0e7"}}>
            <strong>3-SAT Input Details<br></br></strong>
            n = 5 variables<br></br>
            m = 5 clauses<br></br>
            k = 2m+3n = <br></br>
            boolean expression:<br></br>
            banana<br></br>
            banana<br></br>
            banana<br></br>
          </div>
        </div>
        
        <div className="flex w-7/12 items-center justify-center">
          <svg style={{marginTop: -60}} height="430" width="800">
            {edges.map(edge => edge)}
            
            {variables.map(v => v)}

            {clauses.map(clause => clause)}
          </svg>
        </div>
        <div className="flex flex-row w-2/12 h-full items-center justify-center">
          <div className="w-full" style={{height:300, marginTop: 50}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="flex flex-row w-3/12 justify-center items-center" style={{marginTop:80, backgroundColor:"#EAF1F2", height:54, borderRadius:10}}>
          <button onClick={handleClickBack} className="p-2">
              <span style={{color:"coral", fontSize:20}}>&#9664;&#9664;</span>
            </button>
          <button onClick={handleClickBack} className="p-2">
            <span style={{color:"green", fontSize:20}}>&#9664;</span>
          </button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <button onClick={handleClick} className="p-2">
            <span style={{color:"green", fontSize:20}}>&#9654;</span>
          </button>
          <button onClick={handleClick} className="p-2">
            <span style={{color:"coral", fontSize:20}}>&#9654;&#9654;</span>
          </button>
      </div>
    </main>
  );
}