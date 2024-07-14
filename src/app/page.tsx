'use client'
import React, { useState, useEffect, useRef } from 'react';
import ClauseGadget from './clause-gadget';
import VariableGadget from './variable-gadget';

// 3SAT -> Vertex Cover (VC)

// sample input: [[1, 2, 3,], [4, 5, -1], [3, 1, -2], [4, -5, 2], [-1, 3, 4]]
//               5 variables, 3 clauses

export default function Home() {
  var n = 5
  var m = 3
  var input = [[1, 2, 3,], [4, 5, -1], [3, 1, -2], [4, -5, 2], [-1, 3, 4]]
  
  var visible_vars = ["visible", "visible", "visible", "visible", "visible"]

  if (n == 3) { visible_vars = ["hidden", "visible", "visible", "visible", "hidden"]
  } else if (n == 1) { visible_vars = ["hidden", "hidden", "visible", "hidden", "hidden"] }

  const COLORS = ["blue", "red", "green", "orange", "purple"]
  var gadget_colors = ["", "", "", "", ""]
  var j = (n+1)%3

  for (let i = 0; i < n; ++i) {
    gadget_colors[j] = COLORS[i]
    j++
  } // for ..initialize colors of variable gadgets

  const [currIndex, setCurrIndex] = useState(0); // State to manage current step
  var steps = COLORS.length
  function handleClick() {
      setCurrIndex((prevStep) => (prevStep + 1) % steps);
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <svg height="500" width="800">
        // difference of 144
        <VariableGadget x={28}  vis={visible_vars[0]} color={gadget_colors[0]}/>
        <VariableGadget x={182} vis={visible_vars[1]} color={gadget_colors[1]}/>
        <VariableGadget x={336} vis={visible_vars[2]} color={gadget_colors[2]}/>        
        <VariableGadget x={490} vis={visible_vars[3]} color={gadget_colors[3]}/>
        <VariableGadget x={644} vis={visible_vars[4]} color={gadget_colors[4]}/>

        <ClauseGadget x={36}  vis={visible_vars[0]}/>        
        <ClauseGadget x={190} vis={visible_vars[1]}/>
        <ClauseGadget x={344} vis={visible_vars[2]}/> 
        <ClauseGadget x={498} vis={visible_vars[3]}/> 
        <ClauseGadget x={652} vis={visible_vars[4]}/> 
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
