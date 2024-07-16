'use client'
import React, { useState, useEffect, useRef } from 'react';
import ClauseGadget from './clause-gadget';
import VariableGadget from './variable-gadget';
import Edge from './edge';

// 3SAT -> Vertex Cover (VC)

// sample input: [1, 2, 3, 4, 5, -1, 3, 1, -2, 4, -5, 2, -1, -3, 4]
//               5 variables, 5 clauses

export default function Three_SAT_VC() {
  const N = 5
  const M = 5
  const INPUT = [1, 2, 3, 4, 5, -1, 3, 1, -2, 4, -5, 2, -1, -3, 4]
  // const INPUT = [2, 1, 3, -3, -1, 2]

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

  var letters = ["a", "b", "c", "d", "e"]
  var sequence = []
  var track2 = 0
  for (let i = 0; i < INPUT.length; i+=3) {
    for (let j = 1; j < 4; ++j) {
      sequence.push(letters[track2].concat(j.toString()))
    }
    ++track2
  }

  const [currIndex, setCurrIndex] = useState(-1); // State to manage current step
  var steps = sequence.length
  function handleClick() {
      setCurrIndex((prevStep) => (prevStep + 1) % steps);
  }

  var variables = []
  var track3 = 28
  for (let i = 0; i < N; ++i) {
    variables.push(<VariableGadget key={i} x={track3 + VAR_OFFSETS} color={COLORS[i]}/>)
    track3 += 154
  }

  var clauses = []
  var track4 = 36
  for (let i = 0; i < M; ++i) {
    clauses.push(<ClauseGadget key={i} x={track4+CLAUSE_OFFSETS} index={sequence[currIndex]} 
      id1={letters[i]+"1"} id2={letters[i]+"2"} id3={letters[i]+"3"} colors={COLOR_GROUPS[i]} borders={BORDER_GROUPS[i]}/> )
    track4 += 154
  }

  var edges = []
  var track6 = 54
  for (let i = 0; i < M; ++i) {
    edges.push(<Edge key={i%3} index={sequence[currIndex]} id={letters[i]+"1"} x1={VAR_SPOTS[i%3]} x2={track6+CLAUSE_OFFSETS} y2={362}/>)
    edges.push(<Edge key={i%3+1} index={sequence[currIndex]} id={letters[i]+"2"} x1={VAR_SPOTS[i%3 + 1]} x2={track6+40+CLAUSE_OFFSETS} y2={282}/>)
    edges.push(<Edge key={i%3+2} index={sequence[currIndex]} id={letters[i]+"3"} x1={VAR_SPOTS[i%3 + 2]} x2={track6+80+CLAUSE_OFFSETS} y2={362}/>)
    track6 += 154
  }

  return (
    <main className="flex flex-col items-center justify-between">
      <svg height="500" width="800">
        // difference of 154

        {edges.map(y => y)}
        
        {variables.map(component => component)}

        {clauses.map(x => x)}
      </svg>
      <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
        <span>Next</span>
      </button>
    </main>
  );
}