'use client'
import React, { useState, useEffect, useRef } from 'react';
import ClauseGadget from './clause-gadget';
import VariableGadget from './variable-gadget';
import Edge from './edge';
import { stringify } from 'querystring';

// 3SAT -> Vertex Cover (VC)

// sample input: [1, 2, 3, 4, 5, -1, 3, 1, -2, 4, -5, 2, -1, -3, 4]
//               5 variables, 5 clauses

export default function Home() {
  const N = 5
  const M = 4
  const INPUT = [1, 2, 3, 4, 5, -1, 3, 1, -2, 4, -5, 2]

  const OFFSETS = [308, 231, 154, 77, 0]
  const VAR_OFFSETS = OFFSETS[N-1]
  const CLAUSE_OFFSETS = OFFSETS[M-1]

  const COLORS = ["blue", "red", "green", "orange", "purple"]
  const COLOR_GROUPS = [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]]
  const BORDER_GROUPS = [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]]

  const TRUE_VAR_SPOTS = [44, 198, 352, 506, 660]
  const FALSE_VAR_SPOTS = [140, 294, 448, 602, 756]
  var VAR_SPOTS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0]

  // initialize COLOR_GROUPS to preserve color changes
  var track = 0
  for (let i = 0; i < INPUT.length; i+=3) {
    var temp = [COLORS[Math.abs(INPUT[i])-1], COLORS[Math.abs(INPUT[i+1])-1], COLORS[Math.abs(INPUT[i+2])-1]]
    COLOR_GROUPS[track] = temp
    ++track
  }

  // initialize BORDER_GROUPS to preserve border changes
  var track1 = 0
  for (let i = 0; i < INPUT.length; i+=3) {
    var temp1 = ["", "", ""]
    for (let j = 0; j < 3; ++j) {
      if (INPUT[i+j] < 0) {
          temp1[j] = "black"
      } 
    }

    BORDER_GROUPS[track1] = temp1
    ++track1
  }

  // initialize VAR_SPOTS for drawing edges
  for (let i = 0; i < INPUT.length; ++i) {
    if (INPUT[i] < 0) {
      VAR_SPOTS[i] = FALSE_VAR_SPOTS[-1*INPUT[i]-1]+VAR_OFFSETS
    } else {
      VAR_SPOTS[i] = TRUE_VAR_SPOTS[INPUT[i]-1]+VAR_OFFSETS
    }
  }

  var vis_vars = []
  var vis_clauses = []

  var letters = ["b", "c", "d", "e"]
  var sequence = ["a1", "a2", "a3"]
  var track2 = 0
  for (let i = 0; i < INPUT.length-3; i+=3) {
    for (let j = 1; j < 4; ++j) {
      sequence.push(letters[track2].concat(j.toString()))
    }
    ++track2
  }

  console.log(sequence)
  
  // layout of variable widgets
  for (let i = 0; i < N; ++i) {
    vis_vars.push("visible")
  }
  for (let i = N+1; i < 6; ++i) {
    vis_vars.push("hidden")
  }

  // layout of clause widgets
  for (let i = 0; i < M; ++i) {
    vis_clauses.push("visible")
  }
  for (let i = M+1; i < 6; ++i) {
    vis_clauses.push("hidden")
  }

  const [currIndex, setCurrIndex] = useState(-1); // State to manage current step
  var steps = sequence.length
  function handleClick() {
      setCurrIndex((prevStep) => (prevStep + 1) % steps);
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <svg height="500" width="800">
        // difference of 154
        <Edge index={sequence[currIndex]} id="a1" x1={VAR_SPOTS[0]} x2={54+CLAUSE_OFFSETS} y2={362}/>
        <Edge index={sequence[currIndex]} id="a2" x1={VAR_SPOTS[1]} x2={94+CLAUSE_OFFSETS} y2={282}/>
        <Edge index={sequence[currIndex]} id="a3" x1={VAR_SPOTS[2]} x2={134+CLAUSE_OFFSETS} y2={362}/>

        <Edge index={sequence[currIndex]} id="b1" x1={VAR_SPOTS[3]} x2={208+CLAUSE_OFFSETS} y2={362}/>
        <Edge index={sequence[currIndex]} id="b2" x1={VAR_SPOTS[4]} x2={248+CLAUSE_OFFSETS} y2={282}/>
        <Edge index={sequence[currIndex]} id="b3" x1={VAR_SPOTS[5]} x2={288+CLAUSE_OFFSETS} y2={362}/>

        <Edge index={sequence[currIndex]} id="c1" x1={VAR_SPOTS[6]} x2={362+CLAUSE_OFFSETS} y2={362}/>
        <Edge index={sequence[currIndex]} id="c2" x1={VAR_SPOTS[7]} x2={402+CLAUSE_OFFSETS} y2={282}/>
        <Edge index={sequence[currIndex]} id="c3" x1={VAR_SPOTS[8]} x2={442+CLAUSE_OFFSETS} y2={362}/>

        <Edge index={sequence[currIndex]} id="d1" x1={VAR_SPOTS[9]} x2={516+CLAUSE_OFFSETS} y2={362}/>
        <Edge index={sequence[currIndex]} id="d2" x1={VAR_SPOTS[10]} x2={556+CLAUSE_OFFSETS} y2={282}/>
        <Edge index={sequence[currIndex]} id="d3" x1={VAR_SPOTS[11]} x2={596+CLAUSE_OFFSETS} y2={362}/>

        <Edge index={sequence[currIndex]} id="e1" x1={VAR_SPOTS[12]} x2={670+CLAUSE_OFFSETS} y2={362}/>
        <Edge index={sequence[currIndex]} id="e2" x1={VAR_SPOTS[13]} x2={710+CLAUSE_OFFSETS} y2={282}/>
        <Edge index={sequence[currIndex]} id="e3" x1={VAR_SPOTS[14]} x2={750+CLAUSE_OFFSETS} y2={362}/>

        <VariableGadget x={28+VAR_OFFSETS}  vis={vis_vars[0]} color={COLORS[0]}/>
        <VariableGadget x={182+VAR_OFFSETS} vis={vis_vars[1]} color={COLORS[1]}/>
        <VariableGadget x={336+VAR_OFFSETS} vis={vis_vars[2]} color={COLORS[2]}/>        
        <VariableGadget x={490+VAR_OFFSETS} vis={vis_vars[3]} color={COLORS[3]}/>
        <VariableGadget x={644+VAR_OFFSETS} vis={vis_vars[4]} color={COLORS[4]}/>

        <ClauseGadget x={36+CLAUSE_OFFSETS} vis={vis_clauses[0]} index={sequence[currIndex]} 
          id1="a1" id2="a2" id3="a3" colors={COLOR_GROUPS[0]} borders={BORDER_GROUPS[0]}/>    
            

        <ClauseGadget x={190+CLAUSE_OFFSETS} vis={vis_clauses[1]} index={sequence[currIndex]} 
          id1="b1" id2="b2" id3="b3" colors={COLOR_GROUPS[1]} borders={BORDER_GROUPS[1]}/>

        <ClauseGadget x={344+CLAUSE_OFFSETS} vis={vis_clauses[2]} index={sequence[currIndex]} 
          id1="c1" id2="c2" id3="c3" colors={COLOR_GROUPS[2]} borders={BORDER_GROUPS[2]}/> 

        <ClauseGadget x={498+CLAUSE_OFFSETS} vis={vis_clauses[3]} index={sequence[currIndex]} 
          id1="d1" id2="d2" id3="d3" colors={COLOR_GROUPS[3]} borders={BORDER_GROUPS[3]}/> 

        <ClauseGadget x={652+CLAUSE_OFFSETS} vis={vis_clauses[4]} index={sequence[currIndex]} 
          id1="e1" id2="e2" id3="e3" colors={COLOR_GROUPS[4]} borders={BORDER_GROUPS[4]}/> 
      </svg>
      <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
        <span>Next</span>
      </button>
    </main>
  );
}
