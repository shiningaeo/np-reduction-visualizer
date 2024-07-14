'use client'
import React, { useState, useEffect, useRef } from 'react';
import ClauseGadget from './clause-gadget';
import VariableGadget from './variable-gadget';
import { mkdtemp } from 'fs';

// 3SAT -> Vertex Cover (VC)

// sample input: [[1, 2, 3,], [4, 5, -1], [3, 1, -2], [4, -5, 2], [-1, 3, 4]]
//               5 variables, 3 clauses

export default function Home() {
  var n = 5
  var m = 5
  var input = [[1, 2, 3,], [4, 5, -1], [3, 1, -2], [4, -5, 2], [-1, 3, 4]]

  var visible_vars = []
  var visible_clauses = []
  var offsets = [308, 231, 154, 77, 0]
  var vars_offset = offsets[n-1]
  var clause_offset = offsets[m-1]
  
  for (let i = 0; i < n; ++i) {
    visible_vars.push("visible")
  }
  for (let i = n+1; i < 6; ++i) {
    visible_vars.push("hidden")
  }

  for (let i = 0; i < m; ++i) {
    visible_clauses.push("visible")
  }
  for (let i = m+1; i < 6; ++i) {
    visible_clauses.push("hidden")
  }

  const COLORS = ["blue", "red", "green", "orange", "purple"]

  const [currIndex, setCurrIndex] = useState(0); // State to manage current step
  var steps = COLORS.length
  function handleClick() {
      setCurrIndex((prevStep) => (prevStep + 1) % steps);
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <svg height="500" width="800">
        // difference of 154
        <VariableGadget x={28+vars_offset}  vis={visible_vars[0]} color={COLORS[0]}/>
        <VariableGadget x={182+vars_offset} vis={visible_vars[1]} color={COLORS[1]}/>
        <VariableGadget x={336+vars_offset} vis={visible_vars[2]} color={COLORS[2]}/>        
        <VariableGadget x={490+vars_offset} vis={visible_vars[3]} color={COLORS[3]}/>
        <VariableGadget x={644+vars_offset} vis={visible_vars[4]} color={COLORS[4]}/>

        <ClauseGadget x={36+clause_offset}  vis={visible_clauses[0]}/>        
        <ClauseGadget x={190+clause_offset} vis={visible_clauses[1]}/>
        <ClauseGadget x={344+clause_offset} vis={visible_clauses[2]}/> 
        <ClauseGadget x={498+clause_offset} vis={visible_clauses[3]}/> 
        <ClauseGadget x={652+clause_offset} vis={visible_clauses[4]}/> 
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
