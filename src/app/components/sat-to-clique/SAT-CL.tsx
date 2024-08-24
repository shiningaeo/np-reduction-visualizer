import React, { useState } from 'react';
import Arrange from './Arrange';
import WalkthroughTitle from '../WalkThruTitle';
import calculatePositions from './edge-positions';
import Edge from './Edge';

// 3SAT -> Clique (CL)

export default function Three_SAT_CL({N, M, INPUT, setSubmit, setSubmit2}) {    
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    // [layout][clause][x(0) | y(1)]
    const POSITIONS = calculatePositions()

    let visited = new Set()
    for (let i = 1; i < N+1; ++i) {
        visited.add(i)
        visited.add(i*(-1))
    }

    let edges = []
    for (let i = 0; i < 3*M; i+=3) {
        for (let j = 0; j < 3; ++j) {
          if (visited.has(INPUT[i+j])) {
            for (let k = i+3; k < 3*M; ++k) {
              if (INPUT[k] != INPUT[i+j]*(-1)) {
                edges.push(
                  <Edge key={i+j} x1={POSITIONS[M-1][i][j][0]} y1={POSITIONS[M-1][i][j][1]} 
                  x2={POSITIONS[M-1][Math.floor(k/3)][k%3][0]} y2={POSITIONS[M-1][Math.floor(k/3)][k%3][1]}/>
                )
              }
            }
          }
        }
        visited.delete(INPUT[i])
        visited.delete(INPUT[i+1])
        visited.delete(INPUT[i+2])
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"3SAT"} rightProblem={"Clique"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full" style={{marginTop:30}}>
                <div className="flex" style={{height:650, width:800}}>
                    <svg height="650" width="800">
                        {edges.map(edge => edge)}
                        <Arrange M={M} INPUT={INPUT}/>
                    </svg>
                </div>
            </div>
        </main>
    </>
    );
}