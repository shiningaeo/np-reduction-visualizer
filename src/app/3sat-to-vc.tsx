'use client'
import React, { useState } from 'react';
import ClauseGadget from './clause-gadget';
import VariableGadget from './variable-gadget';
import Edge from './edge';

// 3SAT -> Vertex Cover (VC)

export default function Three_SAT_VC({N, M, INPUT}) {
  // N = 3
  // M = 2
  // // const INPUT = [1, 2, 3, 4, 5, -1, 3, 1, -2, 4, -5, 2, -1, -3, 4]
  // INPUT = [2, 1, 3, -3, -1, 2]

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
    variables.push(<VariableGadget key={i} x={track + VAR_OFFSETS} color={COLORS[i]}/>)
    track += 154
  }

  var clauses = []  // clause gadgets to be rendered
  track = 36
  for (let i = 0; i < M; ++i) {
    clauses.push(<ClauseGadget key={i} x={track+CLAUSE_OFFSETS} index={sequence[currIndex]} 
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
    <main className="flex flex-col items-center justify-between">
      <svg style={{marginTop: -30}} height="400" width="800">
        {edges.map(edge => edge)}
        
        {variables.map(v => v)}

        {clauses.map(clause => clause)}
      </svg>
      <button onClick={handleClick} className="rounded-md border p-2 hover:bg-gray-100">
        <span>Next</span>
      </button>
    </main>
  );
}