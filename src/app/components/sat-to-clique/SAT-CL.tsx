'use client'
import React, { useState } from 'react';
import Arrange from './Arrange';
import WalkthroughTitle from '../WalkThruTitle';
import calculatePositions from './edge-positions';
import Edge from './Edge';
import ControlMenu from '../ControlMenu';
import ContentBox from './ContentBox';
import SAT_Info from '../SATInputInfo';

// 3SAT -> Clique (CL)

export default function Three_SAT_CL({N, M, INPUT, setSubmit, setSubmit2, ASSIGNMENT}) {    
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    const [currIndex, setCurrIndex] = useState(0) // State to manage current step
    let falseInstance = false

    // initialize *WALKTHROUGH SEQUENCE*
    const LETTERS = ["b", "c", "d", "e", "f"]
    let sequence = ["a0", "a1", "a2"] // IMPORTANT: walkthrough sequence
    let track = 0
    for (let i = 0; i < INPUT.length; i+=3) {
      for (let j = 1; j < 4; ++j) {
        sequence.push(LETTERS[track].concat(j.toString()))
      }
      ++track
    }
    sequence.push.apply(sequence, ["g1", "g2"])

    // [layout][clause][var][x(0) | y(1)]
    const POSITIONS = calculatePositions()
    const EDGE_COLORS = new Map()
    EDGE_COLORS.set(1, '#FF5733')
    EDGE_COLORS.set(-1, '#33FF57')
    EDGE_COLORS.set(2, '#3357FF')
    EDGE_COLORS.set(-2, '#FF33A8')
    EDGE_COLORS.set(3, '#A833FF')
    EDGE_COLORS.set(-3, '#FFD733')
    EDGE_COLORS.set(4, '#33FFF1')
    EDGE_COLORS.set(-4, '#FF8233')
    EDGE_COLORS.set(5, '#8DFF33')
    EDGE_COLORS.set(-5, '#FF3333')

    let edges = []
    let numFrames = 0
    let number = 0
    let sampleClique = [] // positions of vertices in sample

    for (let i = 0; i < 3*M; i+=3) {
      let foundTrue = false
      for (let j = 0; j < 3; ++j) {
        if ((!foundTrue && ASSIGNMENT[Math.abs(INPUT[i+j])-1] == 1 && INPUT[i+j] > 0)
          || ((!foundTrue && ASSIGNMENT[Math.abs(INPUT[i+j])-1] == 0 && INPUT[i+j] < 0))) {
          let x = POSITIONS[M-1][i/3][j][0]
          let y = POSITIONS[M-1][i/3][j][1]
          sampleClique.push([x, y])
          foundTrue = true
          ++number
        } // sampleClique vertices
      }
    }
    if (number != M) { falseInstance = true }

    for (let i = 0; i < 3*M; i+=3) {
      for (let j = 0; j < 3; ++j) {
        let flag = true
        for (let k = i+3; k < 3*M; ++k) {
          if (INPUT[k] != INPUT[i+j]*(-1)) {
            if (flag) {
              ++numFrames
              flag = false
            }
          }
        }
      }
    }

    // delete not needed sequence elements
    if (numFrames > 0) { sequence.splice(3+numFrames, INPUT.length - numFrames) }
  
    let keyIdx = 0; // to resolve duplicate keys
    for (let i = 0; i < 3*M; i+=3) {
        for (let j = 0; j < 3; ++j) {
          for (let k = i+3; k < 3*M; ++k) {
            let partOfSample = false
            if (INPUT[k] != INPUT[i+j]*(-1)) {

              let clauseIdx = Math.floor((i+j)/3)
              let kIdx = Math.floor(k/3)
              let x1 = POSITIONS[M-1][clauseIdx][j][0]
              let y1 = POSITIONS[M-1][clauseIdx][j][1]
              let x2 = POSITIONS[M-1][kIdx][k%3][0]
              let y2 = POSITIONS[M-1][kIdx][k%3][1]

              if (!falseInstance && !partOfSample) {
                if (sampleClique[clauseIdx][0] === x1 && sampleClique[clauseIdx][1] === y1 
                  && sampleClique[kIdx][0] === x2 && sampleClique[kIdx][1] === y2) {
                  partOfSample = true
                  edges.push(
                    <Edge key={keyIdx} x1={x1} y1={y1} x2={x2} y2={y2} color={EDGE_COLORS.get(INPUT[i+j])} index={sequence[currIndex]} 
                    id={LETTERS[clauseIdx].concat((j+1).toString())} inSample={true}/>
                  )
                  ++keyIdx
                } else {
                  edges.push(
                    <Edge key={keyIdx} x1={x1} y1={y1} x2={x2} y2={y2} color={EDGE_COLORS.get(INPUT[i+j])} index={sequence[currIndex]} 
                    id={LETTERS[clauseIdx].concat((j+1).toString())} inSample={false}/>
                  )
                  ++keyIdx
                }
              } else {
                edges.push(
                  <Edge key={keyIdx} x1={x1} y1={y1} x2={x2} y2={y2} color={EDGE_COLORS.get(INPUT[i+j])} index={sequence[currIndex]} 
                    id={LETTERS[clauseIdx].concat((j+1).toString())} inSample={false}/>
                )
                ++keyIdx
              }
            }
          }
        }
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"3SAT"} rightProblem={"Clique"} handleReset={handleReset}/>

            <div className="flex flex-row w-full items-center justify-center" style={{height:300, zIndex:100}}>
              <SAT_Info M={M} N={N} ASSIGNMENT={ASSIGNMENT} type={0}/>
                
              <div className="flex w-4/12 items-center justify-center" style={{marginTop:250, marginRight:-30}}>
                <div className="flex items-center justify-center overflow-hidden" style={{width:"100%",maxWidth:"800px", height:"430px"}}>
                  <svg style={{ position:'absolute', zIndex:0}} height="600" width="800">
                      {edges.map(edge => edge)}
                      <Arrange M={M} INPUT={INPUT}/>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col w-4/12 h-screen items-center justify-center" style={{padding:30}}>
                <div className="p-8">
                  <div className="w-full" style={{height:350}}></div>
                  <ContentBox id={sequence[currIndex]} valid={!falseInstance}/>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-row justify-center" style={{marginTop:70, marginBottom:30}}>
              <ControlMenu currIndex={currIndex} setCurrIndex={setCurrIndex} sequence={sequence} skipIdx={sequence.indexOf("g1")-1} 
                introEnd={"a2"} skipBackIdx={2}/>
            </div>
        </main>
    </>
    );
}