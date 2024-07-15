'use client'
import React, { useState, useEffect, useRef } from 'react';
import ClauseGadget from './clause-gadget';
import VariableGadget from './variable-gadget';

// 3SAT -> Vertex Cover (VC)

// sample input: [1, 2, 3, 4, 5, -1, 3, 1, -2, 4, -5, 2, -1, 3, 4]
//               5 variables, 3 clauses

export default function Home() {
  const N = 5
  const M = 5
  const INPUT = [1, 2, 3, 4, 5, -1, 3, 1, -2, 4, -5, 2, -1, 3, 4]

  const OFFSETS = [308, 231, 154, 77, 0]
  const VAR_OFFSETS = OFFSETS[N-1]
  const CLAUSE_OFFSETS = OFFSETS[M-1]

  const COLORS = ["blue", "red", "green", "orange", "purple"]

  var vis_vars = []
  var vis_clauses = []

  // [<id>, <color>, <border-color>]
  var sequence = [
    ["a1", "", ""], ["a2", "", ""], ["a3", "", ""],
    ["b1", "", ""], ["b2", "", ""], ["b3", "", ""],
    ["c1", "", ""], ["c2", "", ""], ["c3", "", ""],
    ["d1", "", ""], ["d2", "", ""], ["d3", "", ""],
    ["e1", "", ""], ["e2", "", ""], ["e3", "", ""],
  ]

  // initialize sequence based on input
  for (let i = 0; i < INPUT.length; ++i) {
    sequence[i][1] = COLORS[Math.abs(INPUT[i])-1]
    if (INPUT[i] < 0) {
      sequence[i][2] = "red"
    }
  } // for ..input size
  
  // layout of variable widgets
  for (let i = 0; i < N; ++i) {
    vis_vars.push("visible")
  }
  for (let i = N+1; i < 6; ++i) {
    vis_vars.push("hidden")
  }

  // layout of clause widgets
  for (let i = 0; i < M; ++i) {
    vis_vars.push("visible")
  }
  for (let i = M+1; i < 6; ++i) {
    vis_vars.push("hidden")
  }

  const [currIndex, setCurrIndex] = useState(0); // State to manage current step
  var steps = sequence.length
  function handleClick() {
      setCurrIndex((prevStep) => (prevStep + 1) % steps);
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <svg height="500" width="800">
        // difference of 154
        <VariableGadget x={28+VAR_OFFSETS}  vis={vis_vars[0]} color={COLORS[0]}/>
        <VariableGadget x={182+VAR_OFFSETS} vis={vis_vars[1]} color={COLORS[1]}/>
        <VariableGadget x={336+VAR_OFFSETS} vis={vis_vars[2]} color={COLORS[2]}/>        
        <VariableGadget x={490+VAR_OFFSETS} vis={vis_vars[3]} color={COLORS[3]}/>
        <VariableGadget x={644+VAR_OFFSETS} vis={vis_vars[4]} color={COLORS[4]}/>

        <ClauseGadget x={36+CLAUSE_OFFSETS}  vis={vis_clauses[0]} index={sequence[currIndex]} id1="a1" id2="a2" id3="a3"/>        
        <ClauseGadget x={190+CLAUSE_OFFSETS} vis={vis_clauses[1]} index={sequence[currIndex]} id1="b1" id2="b2" id3="b3"/>
        <ClauseGadget x={344+CLAUSE_OFFSETS} vis={vis_clauses[2]} index={sequence[currIndex]} id1="c1" id2="c2" id3="c3"/> 
        <ClauseGadget x={498+CLAUSE_OFFSETS} vis={vis_clauses[3]} index={sequence[currIndex]} id1="d1" id2="d2" id3="d3"/> 
        <ClauseGadget x={652+CLAUSE_OFFSETS} vis={vis_clauses[4]} index={sequence[currIndex]} id1="e1" id2="e2" id3="e3"/> 
      </svg>
      <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
        <span>Next</span>
      </button>
      {/* <div className="z-7 w-full max-w-2xl items-center justify-between font-mono text-sm lg:flex"> */}
        {/* <Viewer /> */}
      {/* </div> */}
    </main>
  );
}
