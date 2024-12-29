'use client'
import React, { useState } from 'react';
import WalkthroughTitle from '../WalkThruTitle';
import Table from './Table';
import ContentBox from './ContentBox';
import ControlMenu from './ControlMenu';
import SAT_Info from '../SATInputInfo';

// 3SAT -> Subset Sum (SS)

export default function Three_SAT_SS({N, M, INPUT, setSubmit, setSubmit2, ASSIGNMENT }) {
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    const formula = []
    let CLAUSE_MAP = [] // a list of lists telling which clauses a var is found in; (+) then (-)
    let theSum = [...Array(M+N)].map(() => 0);
    
    // add non-negated vars to CLAUSE_MAP
    for (let i = 1; i < N+1; ++i) {
      let temp = []
      for (let j = 0; j < M; ++j) {
        for (let k = 0; k < 3; ++k) {
          if (INPUT[3*j + k] == i) {
            temp.push(j)
            break
          }
        }
      }
      CLAUSE_MAP.push(temp)
    }

    // add negated vars to CLAUSE_MAP
    for (let i = 1; i < N+1; ++i) {
      let temp = []
      let varNum = i * -1
      for (let j = 0; j < M; ++j) {
        for (let k = 0; k < 3; ++k) {
          if (INPUT[3*j + k] == varNum) {
            temp.push(j)
            break
          }
        }
      }
      CLAUSE_MAP.push(temp)
    }
    
    for (let i = 0; i < M; ++i) {
      formula.push(<div key={(i).toString()+"("}>&#40;&nbsp;</div>)
      for (let j = 0; j < 3; ++j) {
        formula.push(
          <div key={(i).toString() + (j).toString() + "x"}>
          <span style={{textDecoration:INPUT[3*i + j] < 0 ? "overline" : "none"}}>X</span>
          <sub>{Math.abs(INPUT[3*i + j])}</sub>&nbsp;
          </div>
        );
        if (j != 2) { 
          formula.push(<div key={(i).toString() + (j).toString() + "V"}>&#8897;&nbsp;</div>)
        }
      }
      formula.push(<div key={(i).toString()+")"}>&#41;</div>)
      if (i != M-1) { formula.push(<div key={(i).toString()+"zz"}>&#8896;</div>) }
    }

    const [currIndex, setCurrIndex] = useState(0) // State to manage current step
    let falseInstance = false
    let number = 0

    // initialize *WALKTHROUGH SEQUENCE*
    let sequence = ["a0", "a1"] // IMPORTANT: walkthrough sequence
    for (let i = 0; i < M; ++i) {
      sequence.push("b"+(i+1).toString())
    }
    for(let i = 0; i < N; ++i) {
      sequence.push("c"+(i+1).toString())
    }
    sequence.push("d0")
    sequence.push.apply(sequence, ["g0"])

    for (let i = 0; i < 3*M; i+=3) {
      let foundTrue = false
      for (let j = 0; j < 3; ++j) {
        if ((!foundTrue && ASSIGNMENT[Math.abs(INPUT[i+j])-1] == 1 && INPUT[i+j] > 0)
          || ((!foundTrue && ASSIGNMENT[Math.abs(INPUT[i+j])-1] == 0 && INPUT[i+j] < 0))) {
          foundTrue = true
          ++number
        }
      }
    }
    if (number != M) { falseInstance = true } 

    let selectedVars = new Set()
    let selectedClauses = [...Array(M)].map(() => 0);

    if (!falseInstance) {
      // step 1
      for (let i = 0; i < M; ++i) {
        if (theSum[i] == 0) {
          for (let j = 0; j < 3; ++j) {
            if (!selectedVars.has(INPUT[3*i + j]) && !selectedVars.has(INPUT[3*i + j] * -1)) {
              let varNum = INPUT[3*i + j]       // store for search
              if ((varNum > 0 && ASSIGNMENT[varNum-1] == 1) ||(varNum < 0 && ASSIGNMENT[varNum-1] == 0)) {
                selectedVars.add(varNum)        // add the var to selected
                let idx = -1;
                (varNum < 0) ? (idx = N + varNum - 1) : (idx = varNum - 1)
                for (let k = 0; k < CLAUSE_MAP[idx].length; ++k) {
                  theSum[CLAUSE_MAP[idx][k]] += 1
                }
                theSum[M+Math.abs(varNum)-1] = 1
                break 
              }
            } // found a var in a pair that hasn't been added
          } // iterate thru 3 vars in the clause
        } // if jth digit is 0
      } // for m clauses

      // step 2: set last n digits
      for (let i = M; i < M+N; ++i) {
        if (theSum[i] == 0) {
          let idx = -10

          if (ASSIGNMENT[i-1] == 1) {
            selectedVars.add((i-M+1))
            idx = i-M
          } else {
            idx = i
            selectedVars.add(((i-M+1) * -1))
          }

          theSum[i] = 1
          for (let k = 0; k < CLAUSE_MAP[idx].length; ++k) {
            theSum[CLAUSE_MAP[idx][k]] += 1
          }
        } // if ith digit is 0
      } // for ... last n digits in sum

      // step 3: finish setting first m digits
      for (let i = 0; i < M; ++i) {
        if (theSum[i] == 1) {
          selectedClauses[i] = 2
        } else if (theSum[i] == 2) {
          selectedClauses[i] = 1
        }
      }
    } // if not a false instance, need to find a subset

    return (
    <>
    <main className="flex flex-col items-center justify-between" style={{marginTop:10}}>
      <WalkthroughTitle leftProblem={"3SAT"} rightProblem={"Subset Sum"} handleReset={handleReset}/>

      <div className="flex flex-row w-full items-center justify-center" style={{height:300, zIndex:100}}>
        <SAT_Info M={M} N={N} ASSIGNMENT={ASSIGNMENT} type={6}/>

        <div className="flex w-full items-center justify-center" style={{marginTop:-10, marginLeft:30}}>
          <div className="relative flex items-center justify-center"
               style={{width:"100%", maxWidth:"800px", height:580}}>
            <div className="flex flex-col items-center w-full"
                style={{position:'absolute', height:500, width:800, marginTop:280, paddingBottom:10}}>
              
              <div className="w-full flex flex-row items-center justify-center" 
                  style={{ height:'auto', fontSize:18, marginBottom:10}}>
                  {formula}
              </div>

               <Table M={M} N={N} INPUT={INPUT} index={sequence[currIndex]} clauses={selectedClauses} vars={selectedVars}
                      ASSIGNMENT={ASSIGNMENT}/>

            </div>
          </div>
        </div>

        <div className="flex flex-col w-4/12 h-screen items-center justify-center" style={{padding:30}}>
            <div className="p-2">
                <div className="w-full" style={{height:150}}></div>
                <ContentBox id={sequence[currIndex]} validInstance={!falseInstance}/>
            </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-row justify-center" style={{marginTop:90, marginBottom:28}}>
        <ControlMenu currIndex={currIndex} setCurrIndex={setCurrIndex} sequence={sequence} N={N} M={M}/>
      </div>
    </main>
    </>
    );
};