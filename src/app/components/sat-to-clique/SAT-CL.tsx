'use client'
import React, { useState } from 'react';
import Arrange from './Arrange';
import WalkthroughTitle from '../WalkThruTitle';
import calculatePositions from './edge-positions';
import Edge from './Edge';
import ControlMenu from '../ControlMenu';
import ContentBox from './ContentBox';

// 3SAT -> Clique (CL)

export default function Three_SAT_CL({N, M, INPUT, setSubmit, setSubmit2, ASSIGNMENT}) {    
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    // IMPORTANT STATE VARIABLES
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

    console.log(INPUT)

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
    if (number != M) {
      falseInstance = true
    }

    console.log(sampleClique)

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
    if (numFrames > 0) {
      sequence.splice(3+numFrames, INPUT.length - numFrames)
    } // WHAT DOES THIS DO AGAIN?? -> I think it's b/c you don't need M*3 steps, i.e. last clause not needed

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
                    <Edge key={number} x1={x1} y1={y1} x2={x2} y2={y2} color={EDGE_COLORS.get(INPUT[i+j])} index={sequence[currIndex]} 
                    id={LETTERS[clauseIdx].concat((j+1).toString())} inSample={true}/>
                  )
                } else {
                  edges.push(
                    <Edge key={number} x1={x1} y1={y1} x2={x2} y2={y2} color={EDGE_COLORS.get(INPUT[i+j])} index={sequence[currIndex]} 
                    id={LETTERS[clauseIdx].concat((j+1).toString())} inSample={false}/>
                  )
                }
              } else {
                edges.push(
                  <Edge key={number} x1={x1} y1={y1} x2={x2} y2={y2} color={EDGE_COLORS.get(INPUT[i+j])} index={sequence[currIndex]} 
                    id={LETTERS[clauseIdx].concat((j+1).toString())} inSample={false}/>
                )
              }
            }
          }
        }
    }

    function AssignmentMessage() {
      const assignmentMessage = [];
    
      for (let i = 0; i < N; ++i) {
        const value = ASSIGNMENT[i] === 1 ? "True" : "False";
        assignmentMessage.push(
          <div key={i+1}>
            X<sub>{i+1}</sub>&nbsp;= {value}
          </div>
        );
      }
    
      return (
        <div className="w-full flex flex-col items-center justify-center" style={{ height:'auto', fontSize:18, marginTop:20, marginBottom:-80 }}>
          {assignmentMessage}
        </div>
      );
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"3SAT"} rightProblem={"Clique"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full" style={{marginTop:-150}}>
              <div className="flex flex-col w-4/12 h-full items-center justify-center">
                <div className="w-full" style={{height:150}}></div>
                <div className="p-3" style={{textAlign:"left", height:"auto", width:"50%", borderRadius:10, marginTop:-105, backgroundColor:"#b6f0e7"}}>
                  <strong>3-SAT INPUT: </strong><br></br>
                  <strong>n</strong> = {N} variables<br></br>
                  <strong>m</strong> = {M} clauses<br></br>
                </div>
                <div className="w-full" style={{height:30}}></div>
                <div className="w-full flex items-center justify-center p-3">
                  <p style={{textAlign:'center'}}>Edges are hoverable</p>
                </div>
                {AssignmentMessage()}
              </div>
                
              <div className="flex" style={{height:580, width:800, marginTop:-50}}>
                  <svg height="650" width="800">
                      {edges.map(edge => edge)}
                      <Arrange M={M} INPUT={INPUT}/>
                  </svg>
              </div>

              <div className="flex flex-col w-4/12 h-screen items-center justify-center" style={{padding:30}}>
                <div>
                  <div className="w-full" style={{height:150}}></div>
                  <ContentBox id={sequence[currIndex]} valid={!falseInstance}/>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-row justify-center" style={{marginTop:-350, marginBottom:28}}>
              <ControlMenu currIndex={currIndex} setCurrIndex={setCurrIndex} sequence={sequence} skipIdx={sequence.indexOf("g1")-1} 
                introEnd={"a2"} skipBackIdx={2}/>
            </div>
        </main>
    </>
    );
}