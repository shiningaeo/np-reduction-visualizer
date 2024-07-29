'use client'
import React, { useState } from 'react';
import ClauseGadget from './ClauseGadget';
import VariableGadget from './VarGadget';
import Edge from './Edge';
import { poppins } from '../../fonts/fonts';
import OrangeBox from './Box';
import ContentBox from './ContentBox';

// 3SAT -> Vertex Cover (VC)

export default function Three_SAT_VC({N, M, INPUT, setSubmit, setSubmit2}) {
  const OFFSETS = [308, 231, 154, 77, 0]
  const VAR_OFFSETS = OFFSETS[N-1]
  const CLAUSE_OFFSETS = OFFSETS[M-1]

  const COLORS = ["#2C82C9", "#D7263D", "#6AB02A", "#FF9F1C", "#8E44AD"]
  const COLOR_GROUPS = []
  const BORDER_GROUPS = []

  const TRUE_VAR_SPOTS = [50, 204, 358, 512, 666] // difference of 154
  const FALSE_VAR_SPOTS = [134, 288, 442, 596, 750]
  let VAR_SPOTS = [] // a list of size INPUT.length
  let coverSize = N

  // initialize *WALKTHROUGH SEQUENCE*
  const LETTERS = ["b", "c", "d", "e", "f"]
  let sequence = ["a0", "a1", "a2", "a3"] // IMPORTANT: walkthrough sequence
  let track = 0
  for (let i = 0; i < INPUT.length; i+=3) {
    console.log(INPUT)
    for (let j = 1; j < 4; ++j) {
      sequence.push(LETTERS[track].concat(j.toString()))
    }
    ++track
  }
  sequence.push.apply(sequence, ["g1", "g2", "g3", "g4"])
  console.log(sequence)

  // IMPORTANT STATE VARIABLE
  const [currIndex, setCurrIndex] = useState(0) // State to manage current step
  let steps = sequence.length
  function handleClick() {
      setCurrIndex((prevStep) => (prevStep + 1) % steps)
  }

  function handleClickBack() {
    setCurrIndex((prevStep) => (prevStep -1) % steps)
  }

  function handleReset() {
    setSubmit2(false)
    setSubmit(false)
  }

  // initialize COLOR_GROUPS to preserve color changes
  for (let i = 0; i < INPUT.length; i+=3) {
    let temp = [COLORS[Math.abs(INPUT[i])-1], COLORS[Math.abs(INPUT[i+1])-1], COLORS[Math.abs(INPUT[i+2])-1]]
    COLOR_GROUPS.push(temp)
  }

  // initialize BORDER_GROUPS to preserve border changes
  track = 0
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
      ++coverSize
      VAR_SPOTS.push(FALSE_VAR_SPOTS[-1*INPUT[i]-1]+VAR_OFFSETS)
    } else {
      VAR_SPOTS.push(TRUE_VAR_SPOTS[INPUT[i]-1]+VAR_OFFSETS)
    }
  }

  let variables = []  // variable gadgets to be rendered
  track = 28
  for (let i = 0; i < N; ++i) {
    variables.push(<VariableGadget key={i} x={track + VAR_OFFSETS} color={COLORS[i]} num={i} index={sequence[currIndex]}/>)
    track += 154
  }

  let clauses = []  // clause gadgets to be rendered
  track = 36
  for (let i = 0; i < M; ++i) {
    let vars = [Math.abs(INPUT[3*i]), Math.abs(INPUT[3*i+1]), Math.abs(INPUT[3*i+2])]
    clauses.push(<ClauseGadget key={i} vars={vars} x={track+CLAUSE_OFFSETS} index={sequence[currIndex]} 
      id1={LETTERS[i]+"1"} id2={LETTERS[i]+"2"} id3={LETTERS[i]+"3"} colors={COLOR_GROUPS[i]} borders={BORDER_GROUPS[i]}/> )
    track += 154
  }

  let edges = []  // edges to be rendered
  track = 54
  for (let i = 0; i < M*3; i+=3) {
    edges.push(<Edge key={i} index={sequence[currIndex]} id={LETTERS[i/3]+"1"} x1={VAR_SPOTS[i]} x2={track+CLAUSE_OFFSETS} y2={362}/>)
    edges.push(<Edge key={i+1} index={sequence[currIndex]} id={LETTERS[i/3]+"2"} x1={VAR_SPOTS[i+1]} x2={track+40+CLAUSE_OFFSETS} y2={282}/>)
    edges.push(<Edge key={i+2} index={sequence[currIndex]} id={LETTERS[i/3]+"3"} x1={VAR_SPOTS[i+2]} x2={track+80+CLAUSE_OFFSETS} y2={362}/>)
    track += 154
  }

  return (
    <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:118}}>
      <main className="top-0 left-0 w-full" style={{height:50, marginTop: 85}}>
          <div className="flex flex-row w-full justify-center" style={{height:300, zIndex: -100, marginTop:20}}>
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
        <div className="flex flex-col w-2/12 h-full items-center justify-center">
          <div className="w-full" style={{height:350}}></div>
          <div className="p-3" style={{textAlign:"left", height:"auto", width:"85%", borderRadius:10, marginTop:-135, marginRight:-30, backgroundColor:"#b6f0e7"}}>
            <strong>3-SAT INPUT DETAILS</strong><br></br>
            <strong>n</strong> = {N} variables<br></br>
            <strong>m</strong> = {M} clauses<br></br>
            <strong>k</strong> = n+2m = {N + 2*M}<br></br>
          </div>
        </div>
        
        <div className="flex w-7/12 items-center justify-center" style={{marginTop:100}}>
          <OrangeBox size={N} type={'N'} id={"a1"} index={sequence[currIndex]}/>
          <OrangeBox size={M} type={'M'} id={"a2"} index={sequence[currIndex]}/>
          <svg style={{marginTop: -60}} height="430" width="800">
            {edges.map(edge => edge)}
            
            {variables.map(v => v)}

            {clauses.map(clause => clause)}
          </svg>
        </div>
        <div className="flex flex-col w-2/12 h-screen items-center justify-center">
          <div>
            <div className="w-full" style={{height:150}}></div>
            <ContentBox id={sequence[currIndex]} coverSize={coverSize} k={N+2*M}/>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-3/12 justify-center items-center" style={{marginTop:180, backgroundColor:"#EAF1F2", height:70, borderRadius:10}}>
          <div className="flex flex-col items-center justify-center w-1/4">
            <button onClick={handleClickBack}>
                <span style={{color:"coral", fontSize:24}}>&#9664;&#9664;</span>
            </button>
            <p style={{fontSize:12}}>skip back</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/4" style={{marginRight:-40}}>
            <button onClick={handleClickBack}>
              <span style={{color:"green", fontSize:24}}>&#9664;</span>
            </button>
            <p style={{fontSize:12}}>back</p>
          </div>
          {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
          <div className="flex flex-col items-center justify-center w-1/4">
            <button onClick={handleClick}>
              <span style={{color:"green", fontSize:24}}>&#9654;</span>
            </button>
            <p style={{fontSize:12}}>next</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/4">
            <button onClick={handleClick}>
              <span style={{color:"coral", fontSize:24}}>&#9654;&#9654;</span>
            </button>
            <p style={{fontSize:12}}>skip forward</p>
          </div>
      </div>

      <div onClick={handleReset} className="bg-gray-200 flex items-center justify-center" 
        style={{height:30, width:70, marginTop:30, marginBottom:-70, borderRadius:10, fontSize:12}}>RESET</div>
    </main>
  );
}