'use client'
import React, { useState, useEffect } from 'react';
import WalkthroughTitle from "../WalkThruTitle";
import ControlMenu from "../ControlMenu";
import GraphLayout from "./GraphLayout";
import ContentBox from './ContentBox';

export default function VC_SC({setSubmit, setSubmit2, edges, V, k}) {
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    const [currIndex, setCurrIndex] = useState(0) // State to manage current step
    const [valid, setValid] = useState(false)
    const [tempArray, setTempArray] = useState([]); // Array to hold the elements of temp


    // initialize *WALKTHROUGH SEQUENCE*
    const LETTERS = ["b"]
    let sequence = ["a0", "a1", "a2"] // IMPORTANT: walkthrough sequence
    for (let j = 1; j < V+1; ++j) {
        sequence.push(LETTERS[0] + j)
    }

    sequence.push.apply(sequence, ["b7", "g1", "g2"])

    const NUM_EDGES = edges.filter(item => item === "black").length
    const visibleSet: Set<number> = new Set()

    for (let i = 0; i < edges.length; ++i) {
        if (edges[i] == "black") {
            visibleSet.add(i)
        }
    }

    // circle nums = [V-1][edge#-1]
    const VERTEX_MAP = [
        [[1,5], [1,2], [1,4], [1,3], [1,6], [2,5], [2,3], [2,4], [2,6], [5,6], [4,6], [3,6], [3,4], [4,5], [3,5]]   // 6 vertices
    ] // circle numbers for each edge

    
    let subsets = [
        [], [], [], [], [], []
    ]
    let u_subset: number[] = []
    

    for (const item of visibleSet) {
        subsets[VERTEX_MAP[0][item][0]-1].push(item+1)
        subsets[VERTEX_MAP[0][item][1]-1].push(item+1)
        u_subset.push(item+1)
    }

    if (NUM_EDGES == 0) {
        u_subset.push(null)
    }

    useEffect(() => {
        isSetCover();
    }, [sequence, currIndex, subsets, visibleSet, k]);

    function* combinationN(array, n) {
        if (n === 1) {
          for (const a of array) {
            yield [a];
          }
          return;
        }
      
        for (let i = 0; i <= array.length - n; i++) {
          for (const c of combinationN(array.slice(i + 1), n - 1)) {
            yield [array[i], ...c];
          }
        }
      }
      
    
      function isSetCover() {
        const combinations = Array.from(combinationN([1, 2, 3, 4, 5, 6], k));
        let temp = new Set()
        let temp1 = new Set()
        
        if (subsets.length !== 0) {
            for (let i = 0; i < combinations.length; ++i) {
                temp = new Set();
                for (let j = 0; j < k; ++j) {
                    let v = subsets[combinations[i][j] - 1];
                    for (let z = 0; z < v.length; ++z) {
                        if (visibleSet.has(v[z] - 1)) {
                            temp.add(v[z] - 1);
                            temp1.add(combinations[i][j] - 1)
                        }
                    }
                }
                
                if (temp.size === visibleSet.size) {
                    setValid(true);
                    setTempArray(Array.from(temp1)); // Update tempArray with the elements of temp1
                    break;
                }
            }
        }
    }


    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"Vertex Cover"} rightProblem={"Set Cover"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full">
                <div className="flex flex-col w-3/12 items-center justify-center">
                    <div className="flex flex-col h-full items-center justify-center" style={{marginTop:120}}>
                        <div className="p-3 w-full" style={{width:180, textAlign:"left", height:"auto", borderRadius:10, marginTop:-105, backgroundColor:"#b6f0e7"}}>
                            <strong>VERTEX COVER INPUT: </strong><br></br>
                            <strong>V</strong> = {V} vertices<br></br>
                            <strong>E</strong> = {visibleSet.size} edges<br></br>
                            <strong>k</strong> = {k}<br></br>
                        </div>
                        <div className="w-full" style={{height:30}}></div>
                        <div className="w-full flex items-center justify-center p-3">
                            <p style={{textAlign:'center'}}>Hover over any edge to find its label</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center" style={{zIndex:1000, marginTop:30, height:500, width:900}}>
                    <GraphLayout visibleSet={visibleSet} index={sequence[currIndex]} vMap={VERTEX_MAP[0]} V={V}/>

                    <div style={{width:50}}></div>
                    <div className="flex flex-col justify-start items-center p-3" style={{width:300, height:400, fontSize:22, marginTop:80}}>
                        
                        <div className="flex flex-row">
                            
                            <div className="flex flex-col items-end" style={{width:60, marginRight:20, fontWeight:500}}>
                                <div style={{height:100}}>
                                    <h1 style={{fontWeight:500, marginBottom:40}}>U =</h1>
                                </div>
                                
                                <span style={{ backgroundColor: sequence[currIndex] == "b1" ? "#b6f0e7" : "transparent" }}>
                                    <h1>S<sub>1</sub> =</h1>
                                </span>
                                <span style={{ backgroundColor: sequence[currIndex] == "b2" ? "#b6f0e7" : "transparent" }}>
                                    <h1>S<sub>2</sub> =</h1>
                                </span>
                                <span style={{ backgroundColor: sequence[currIndex] == "b3" ? "#b6f0e7" : "transparent" }}>
                                    <h1>S<sub>3</sub> =</h1>
                                </span>
                                <span style={{ backgroundColor: sequence[currIndex] == "b4" ? "#b6f0e7" : "transparent" }}>
                                    <h1>S<sub>4</sub> =</h1>
                                </span>
                                <span style={{ backgroundColor: sequence[currIndex] == "b5" ? "#b6f0e7" : "transparent" }}>
                                    <h1>S<sub>5</sub> =</h1>
                                </span>
                                <span style={{ backgroundColor: sequence[currIndex] == "b6" ? "#b6f0e7" : "transparent" }}>
                                    <h1>S<sub>6</sub> =</h1>
                                </span>

                            </div>
                            <div className="flex flex-col" style={{marginLeft:-10, fontWeight:500, width:250}}>
                                <div style={{height:100}}>
                                    <h1 style={{fontWeight:500}}>&#123; {u_subset.join(', ')} &#125;</h1>
                                </div>
                                <div style={{ backgroundColor: sequence[currIndex] == "b1" || (sequence[currIndex] >= "g" && tempArray.includes(0)) ? "#b6f0e7" : "transparent" }}>
                                    <h1>{sequence[currIndex] >= "b1" ? `{ ${subsets[0].join(', ')} }` : '{ }'}</h1>
                                </div>
                                <div style={{ backgroundColor: sequence[currIndex] == "b2" || (sequence[currIndex] >= "g" && tempArray.includes(1)) ? "#b6f0e7" : "transparent" }}>
                                    <h1>{sequence[currIndex] >= "b2" ? `{ ${subsets[1].join(', ')} }` : '{ }'}</h1>
                                </div>
                                <div style={{ backgroundColor: sequence[currIndex] == "b3" || (sequence[currIndex] >= "g" && tempArray.includes(2)) ? "#b6f0e7" : "transparent" }}>
                                    <h1>{sequence[currIndex] >= "b3" ? `{ ${subsets[2].join(', ')} }` : '{ }'}</h1>
                                </div>
                                <div style={{ backgroundColor: sequence[currIndex] == "b4" || (sequence[currIndex] >= "g" && tempArray.includes(3)) ? "#b6f0e7" : "transparent" }}>
                                    <h1>{sequence[currIndex] >= "b4" ? `{ ${subsets[3].join(', ')} }` : '{ }'}</h1>
                                </div>
                                <div style={{ backgroundColor: sequence[currIndex] == "b5" || (sequence[currIndex] >= "g" && tempArray.includes(4)) ? "#b6f0e7" : "transparent" }}>
                                    <h1>{sequence[currIndex] >= "b5" ? `{ ${subsets[4].join(', ')} }` : '{ }'}</h1>
                                </div>
                                <div style={{ backgroundColor: sequence[currIndex] == "b6" || (sequence[currIndex] >= "g" && tempArray.includes(5)) ? "#b6f0e7" : "transparent" }}>
                                    <h1>{sequence[currIndex] >= "b6" ? `{ ${subsets[5].join(', ')} }` : '{ }'}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-3/12 items-center justify-center">
                    <div>
                        <div className="w-full" style={{height:150}}></div>
                        <ContentBox id={sequence[currIndex]} valid={valid}/>
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex flex-row justify-center" style={{marginTop:-158, marginBottom:28}}>
              <ControlMenu currIndex={currIndex} setCurrIndex={setCurrIndex} sequence={sequence} skipIdx={sequence.indexOf("g1")-1} 
                introEnd={"a2"} skipBackIdx={2}/>
            </div>
        </main>
    </>
    );
}